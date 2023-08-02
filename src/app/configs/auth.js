import { AuthOptions } from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { connectToDatabase, client } from '../hooks/useConectDB';


export const authConfig = {
	secret: process.env.NEXT_AUTH_SECRET,
	providers: [
		
			GoogleProvider({
				clientId: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_SECRET,
			}),
			Credentials({
				credentials: {
					email: {label: 'email', type: 'email', required:true},
					password: {label: 'password', type: 'password', required: true}
				},
				
				async authorize(credentials) {
					if (!credentials?.email || !credentials.password) return null;
				  
					await connectToDatabase();
					const dataBase = client.db('users');
					const collections = await dataBase.listCollections().toArray();
				  
					for (const user of collections) {
					  const collection = dataBase.collection(user.name);
					  const userFindByEmailPassword = await collection.find({
						email: credentials.email,
						password: credentials.password,
					  }).toArray();
				  
					  if (userFindByEmailPassword.length > 0) {
						// Am găsit un utilizator valid
						console.log(userFindByEmailPassword, 'user gasit');
						const user = {
						 ...userFindByEmailPassword[0]
						};
				  
						return user;
					  }
					}
				  
					// Dacă nu s-a găsit un utilizator valid, returnează null
					return null;
				  }
			})
		
	],
	pages: {
		signIn: '/',
	}

	
}
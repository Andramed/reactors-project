import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { NextResponse } from 'next/server';


export async function POST(req, res) {
	console.log('sign up route');
	const data = await req.json();
	const {method, ...user} =  await data
	
	try {
		await connectToDatabase();
		const dataBase = client.db('users');
		switch (method) {
			case 'google':
				const collection = dataBase.collection('user_google');
				const result = await collection.insertOne(user);
				console.log(result.insertedId);
				break;
		
			default:
				break;
		}
	} catch (error) {
		
	}
}
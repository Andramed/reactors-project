import { connectToDatabase, client } from '@/app/hooks/useConectDB';

import { NextResponse } from 'next/server';




export async function GET (req, res) {
	try {
		await connectToDatabase();
		const collection =  client.db('cart_user_guest').collection('cart');

		let numberOfDocuments = await collection.count();
		console.log(numberOfDocuments, 'documente');
		
		return NextResponse.json(numberOfDocuments);

	}  catch (error) {
	console.error(`Error finding document: ${error}`)
	}
}
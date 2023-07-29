import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { NextResponse } from 'next/server';
export async function GET(req, res) {

	try {
		await connectToDatabase();
		const collection = client.db('Top_Phone').collection('Brands');

		let collectionData = await collection.find().toArray();

		return NextResponse.json(collectionData);
	} catch (error) {
		console.error(`Error finding document: ${error}`)
	}
}
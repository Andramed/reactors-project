import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { NextResponse } from 'next/server';
export async function GET() {
	try {
		await connectToDatabase();
		const database = client.db('Top_Phone');
		const collections = await database.listCollections().toArray();

		const data = {};
	

		for (const collection of collections) {
			const collectionName = collection.name;
			const collectionData = await database.collection(collectionName).find({}).toArray();
			data[collectionName] = collectionData;
		}
		return NextResponse.json(data)
	} catch (error) {
				console.error(`Error finding document: ${error}`)
	}
}






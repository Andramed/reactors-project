import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { NextResponse } from 'next/server';
export async function GET() {
	try {
		await connectToDatabase();
		const collection = client.db('Top_Phone').collection('Phones');

		let collectionData = await collection.distinct('brand', {}, { collation: { locale: "en", strength: 2 } });
		return NextResponse.json(collectionData);
	} catch (error) {
		console.error(`Error finding document: ${error}`)
	}
}
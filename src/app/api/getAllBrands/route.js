import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { NextResponse } from 'next/server';
export async function GET(req, res) {

	const query = {};
    const type = req.nextUrl.searchParams.get("type");

	if (type == "classic") {query.type = "classic"}
	else if (type == "smart") {query.type = "smart"};

	try {
		await connectToDatabase();
		const collection = client.db('Top_Phone').collection('Phones');

		let collectionData = await collection.distinct('brand', query, { collation: { locale: "en", strength: 2 } });

		return NextResponse.json(collectionData);
	} catch (error) {
		console.error(`Error finding document: ${error}`)
	}
}
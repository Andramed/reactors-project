import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { NextResponse } from 'next/server';
export async function GET(req,res) {

    const order = (req.nextUrl.searchParams.get("order"))? 1 * req.nextUrl.searchParams.get("order"): -1;
    const limit = (req.nextUrl.searchParams.get("limit"))? 1 * req.nextUrl.searchParams.get("limit"): 3;
    
	try {
		await connectToDatabase();
		const collection = client.db('Top_Phone').collection('Phones');

		let collectionData = await collection.find().sort({ date : order }).limit(limit).toArray();
		return NextResponse.json(collectionData);
	} catch (error) {
		console.error(`Error finding document: ${error}`)
	}
}
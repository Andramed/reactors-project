import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { NextResponse } from 'next/server';
export async function GET() {
	try {
		await connectToDatabase();
			const colection = client.db('Top_Phone').collection('Phones');
			let collectionData = await colection.find({}).toArray();
		return NextResponse.json(collectionData)
	} catch (error) {
		console.error(`Error finding document: ${error}`)
	} finally{
		client.close
	}
}






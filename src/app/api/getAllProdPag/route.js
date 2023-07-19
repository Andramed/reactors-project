import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { NextResponse } from 'next/server';

export  async function GET(req, res) {
 
        const limit_entries = 1 * req.nextUrl.searchParams.get("results");

        try {
            await connectToDatabase();
            const collection = client.db('Top_Phone').collection('Phones');

            let data = await collection.find({}).limit(limit_entries).toArray();

            return NextResponse.json(data);

        }  catch (error) {
        console.error(`Error finding document: ${error}`)
    }
}
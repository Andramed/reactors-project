
import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { NextResponse } from 'next/server';

export  async function GET(req, res) {
        let data = null;    

     
        const brandName =  req.nextUrl.searchParams.get("brandName");
        const price = 1*req.nextUrl.searchParams.get("price");
        const limit = 1*req.nextUrl.searchParams.get("limit");
    const minPrice = price - 2000;
    const maxPrice = price + 2000;
    

        try {
            await connectToDatabase();
            const collection = client.db('Top_Phone').collection('Phones');
             
            data = await collection.find({price: {$gte: minPrice, $lte: maxPrice},brand: brandName }).collation({ locale: "en", strength: 2 }).limit(limit).toArray();
         console.log(data)
            
            
            
            return NextResponse.json(data);

        }  catch (error) {
        console.error(`Error finding document: ${error}`)
    }
}


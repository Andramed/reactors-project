import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { NextResponse } from 'next/server';

export  async function GET(req, res) {
        let data = null;    


        const limit_entries = 1 * req.nextUrl.searchParams.get("results");
        const brands = req.nextUrl.searchParams.get("brands");
        const types = req.nextUrl.searchParams.get("types");
        const minPrice = 1 * req.nextUrl.searchParams.get("minPrice");
        const maxPrice = 1 * req.nextUrl.searchParams.get("maxPrice");
        

        const brandsArray = brands.split(",");
        const typesArray = types.split(",");

        try {
            await connectToDatabase();
            const collection = client.db('Top_Phone').collection('Phones');
             
            const value = {$and: [{"color_image.green" :{$exists:true}},{"color_image.red" :{$exists:true}}]};

            data = await collection.find(value).limit(limit_entries).toArray();
            
            // if (brands == '' && types == ''){
            //     data = await collection.find({$and: [ { price: { $lte : maxPrice } }, { price : { $gte: minPrice } } ]}).limit(limit_entries).toArray();
            // } else if (brands != '' && types == '') {
            //     data = await collection.find({price: {$gte: minPrice, $lte: maxPrice}, brand: { $in: brandsArray }}).collation({ locale: "en", strength: 2 }).limit(limit_entries).toArray();
            // } else if (brands == '' && types != '') {
            //     data = await collection.find({price: {$gte: minPrice, $lte: maxPrice}, type: { $in: typesArray}}).collation({ locale: "en", strength: 2 }).limit(limit_entries).toArray();
            // }
            //   else{
            //     data = await collection.find({price: {$gte: minPrice, $lte: maxPrice}, brand: { $in: brandsArray }, type: { $in: typesArray}}).collation({ locale: "en", strength: 2 }).limit(limit_entries).toArray();
            // }
            
            return NextResponse.json(data);

        }  catch (error) {
        console.error(`Error finding document: ${error}`)
    }
}
import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { NextResponse } from 'next/server';

export  async function GET(req, res) {
        let data = null;    


        const limit_entries = 1 * req.nextUrl.searchParams.get("results");
        const brands = req.nextUrl.searchParams.get("brands");
        const types = req.nextUrl.searchParams.get("types");
        const priceRange = 1 * req.nextUrl.searchParams.get("priceRange");

        const brandsArray = brands.split(",");
        const typesArray = types.split(",");

        try {
            await connectToDatabase();
            const collection = client.db('Top_Phone').collection('Phones');

            
            if (brands == '' && types == ''){
                data = await collection.find({}).limit(limit_entries).toArray();
            } else if (brands != '' && types == '') {
                data = await collection.find({ brand: { $in: brandsArray }}).collation({ locale: "en", strength: 2 }).limit(limit_entries).toArray();
            } else if (brands == '' && types != '') {
                data = await collection.find({ type: { $in: typesArray}}).collation({ locale: "en", strength: 2 }).limit(limit_entries).toArray();
            }
              else{
                data = await collection.find({ brand: { $in: brandsArray }, type: { $in: typesArray}}).collation({ locale: "en", strength: 2 }).limit(limit_entries).toArray();
            }



            // if (brands == '' && types == ''){
            //     data = await collection.find({price: {$gt: 0, $lt: priceRange}}).limit(limit_entries).toArray();
            // } else if (brands != '' && types == '') {
            //     data = await collection.find({price: {$gt: 0, $lt: priceRange}, brand: { $in: brandsArray }}).collation({ locale: "en", strength: 2 }).limit(limit_entries).toArray();
            // } else if (brands == '' && types != '') {
            //     data = await collection.find({price: {$gt: 0, $lt: priceRange}, type: { $in: typesArray}}).collation({ locale: "en", strength: 2 }).limit(limit_entries).toArray();
            // }
            //   else{
            //     data = await collection.find({price: {$gt: 0, $lt: priceRange}, brand: { $in: brandsArray }, type: { $in: typesArray}}).collation({ locale: "en", strength: 2 }).limit(limit_entries).toArray();
            // }
            // let numberOfDocuments = collection.count();

            // return NextResponse.json({data: data, nrDoc: numberOfDocuments});
            return NextResponse.json(data);

        }  catch (error) {
        console.error(`Error finding document: ${error}`)
    }
}
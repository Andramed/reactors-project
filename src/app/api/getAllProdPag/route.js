import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { NextResponse } from 'next/server';

export  async function GET(req, res) {
        let data = null;    


        const limit_entries = 1 * req.nextUrl.searchParams.get("results");
        const brands = req.nextUrl.searchParams.get("brands");
        const colors = req.nextUrl.searchParams.get("colors");
        const types = req.nextUrl.searchParams.get("types");
        const minPrice = 1 * req.nextUrl.searchParams.get("minPrice");
        const maxPrice = 1 * req.nextUrl.searchParams.get("maxPrice");
        const sortPrice = 1 * req.nextUrl.searchParams.get("sortPrice");
        

        const brandsArray = brands.split(",");
        const typesArray = types.split(",");
        const colorsArray = colors.split(",");
        const sortObject = {};
        if (sortPrice) {sortObject.price = sortPrice};

        try {
            await connectToDatabase();
            const collection = client.db('Top_Phone').collection('Phones');
             
            const colorExistence = [];
            if (colors != ''){
                colorsArray.forEach((color,index)=>{
                    const color_property = `color_image.${color}`;
                    colorExistence.push({[color_property]:{"$exists":true}});
                });
            }

            // use map to create array of color condition based on user selection
            // const value ={ $or: [{"color_image.green" :{$exists:true} }, {"color_image.red" :{$exists:true}} ] };

            // data = await collection.find(value).limit(limit_entries).toArray();
            
            // console.log(brands, "brands ",types ,"types",colors, "colors");
            console.log(colorExistence);


            if (brands == '' && types == '' && colors == ''){
             
                data = await collection.find({$and: [ { price: { $lte : maxPrice } }, { price : { $gte: minPrice } } ]}).limit(limit_entries).sort(sortObject).toArray();

            } else if (brands != '' && types == '' && colors == '') {
             
                data = await collection.find({price: {$gte: minPrice, $lte: maxPrice}, brand: { $in: brandsArray }}).collation({ locale: "en", strength: 2 }).sort(sortObject).limit(limit_entries).toArray();

            } else if (brands == '' && types != '' && colors == '') {
             
                data = await collection.find({$and: [ { price: { $lte : maxPrice } }, { price : { $gte: minPrice } } ], type: { $in: typesArray}}).collation({ locale: "en", strength: 2 }).limit(limit_entries).sort(sortObject).toArray();

            } else if (brands != '' && types != '' && colors == '') {
             
                data = await collection.find({price: {$gte: minPrice, $lte: maxPrice}, brand: { $in: brandsArray }, type: { $in: typesArray}}).collation({ locale: "en", strength: 2 }).limit(limit_entries).sort(sortObject).toArray();

            }else if (brands == '' && types == '' && colors != '') {
             
                data = await collection.find({$or: colorExistence, $and: [ { price: { $lte : maxPrice } }, { price : { $gte: minPrice } }]}).limit(limit_entries).sort(sortObject).toArray();

            } else if (brands != '' && types == '' && colors != '') {
             
                data = await collection.find({$or: colorExistence, $and: [ { price: { $lte : maxPrice } }, { price : { $gte: minPrice } } ], brand: { $in: brandsArray }}).collation({ locale: "en", strength: 2 }).limit(limit_entries).sort(sortObject).toArray();

            } else if (brands == '' && types != '' && colors != '') {
             
                data = await collection.find({$or: colorExistence, $and: [ { price: { $lte : maxPrice } }, { price : { $gte: minPrice } } ], type: { $in: typesArray}}).collation({ locale: "en", strength: 2 }).limit(limit_entries).sort(sortObject).toArray();
                
            } else if (brands != '' && types != '' && colors != '') {
        
                data = await collection.find({$or: colorExistence,  $and: [ { price: { $lte : maxPrice } }, { price : { $gte: minPrice } } ], brand: { $in: brandsArray }, type: { $in: typesArray} }).collation({ locale: "en", strength: 2 }).limit(limit_entries).sort(sortObject).toArray();

            }
            
            return NextResponse.json(data);

        }  catch (error) {
        console.error(`Error finding document: ${error}`)
    }
}
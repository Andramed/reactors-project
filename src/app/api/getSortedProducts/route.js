import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { parse } from 'url';


export  async function GET(req, res) {
  const  {query}  =  parse(req.url, true);
 
  const entries = Object.entries(query);
 
	let [key, value] = entries[0];
	console.log(value);
	const  operator = key.slice(key.indexOf('[') + 1, key.indexOf(']'));
	console.log('Valoarea parametrului de query:', {value, operator});
 

		try {
			await connectToDatabase();
			const colection = client.db('Top_Phone').collection('Phones');
			let collectionData = await colection.find({}).toArray();
			switch (operator) {
				case 'brand':
					collectionData = await colection.find({[operator]: value}).toArray();
					break;
				case 'price':
					if (value != Number) {
						value = Number(value)
					}
					collectionData = await colection.find({[operator]: value}).toArray();
					break;
				case 'newPhone':
					collectionData = await colection.find().sort({ input_date: -1 }).toArray();
					break;
				case 'operator':
					if (value === 'gt') {
						collectionData = await colection.find({}).sort({ price: 1 }).toArray();
					  } else {
						collectionData = await colection.find({}).sort({ price: -1 }).toArray();
					  }
				case '_id':
					const idObject = new ObjectId(value);
					collectionData = await colection.find({_id:idObject}).toArray();
					console.log(collectionData,'from server');
				default:
					break;
			}
			
		
		return NextResponse.json({
			param: {[operator] : value},
			collectionData: collectionData
		});
	}  catch (error) {
		console.error(`Error finding document: ${error}`)
	} finally {
		client.close();
		console.log('db closed');
	}

}
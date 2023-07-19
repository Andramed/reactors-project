import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { ObjectId } from 'mongodb';
import { NextURL } from 'next/dist/server/web/next-url';
import { NextResponse } from 'next/server';
import { parse } from 'url';


export  async function GET(req, res) {
  const  {query}  =  parse(req.url, true);
  const valueArr = Object.values(query);
  const valueArrObjID = valueArr.map((val) => new ObjectId(val));
  console.log(valueArrObjID);

	const  entries = Object.entries(query);
	let	[key, value] = entries[0];
	let  operator = key.slice(key.indexOf('[') + 1, key.indexOf(']'));
	console.log('Valoarea parametrului de query:', {valueArr, operator});
	console.log(value, 'ss');

	
		try {
			await connectToDatabase();
			const colection = client.db('Top_Phone').collection('Phones');
			let collectionData = []
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
					
					collectionData = await colection.find({[operator]: { $in: valueArrObjID } }).toArray();
					console.log(collectionData, 'din sorted Products');
 				default:
					break;
			}
			
		
		return NextResponse.json({
			param: {[operator] : value},
			collectionData: collectionData
		});
	}  catch (error) {
		console.error(`Error finding document: ${error}`)
	} 

}
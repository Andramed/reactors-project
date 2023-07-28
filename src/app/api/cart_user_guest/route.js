import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { ObjectId } from 'mongodb';
import { NextURL } from 'next/dist/server/web/next-url';
import { NextResponse } from 'next/server';
import { parse } from 'url';


export  async function POST(req, res) {
	const itemCart = await req.json();
	const itemInCart = client.db('cart_user_guest').collection('cart')
	try {
		await connectToDatabase();
		let result = await itemInCart.insertOne(itemCart);
		let data = await itemInCart.find({}).toArray();
		let numberOfDocuments = await itemInCart.count();
		return NextResponse.json({message: JSON.stringify(result.acknowledged), data:data, numberOfDocuments:numberOfDocuments})
	  } catch (err) {
		console.error(`Error inserting document: ${err}`)
		return NextResponse.json(err)
	  } finally {
		await client.close()
	  }
	
}

export async function GET (req, res) {
	try {
		await connectToDatabase();
		const collection =  client.db('cart_user_guest').collection('cart');
		let data = await collection.find({}).toArray();
		let numberOfDocuments = await collection.count();
		return NextResponse.json({product: data, numberOfDocuments: numberOfDocuments});
	}  catch (error) {
	console.error(`Error finding document: ${error}`)
	}
}

export async function DELETE(req, res) {
	const body = await req.json();
	console.log(body);
}
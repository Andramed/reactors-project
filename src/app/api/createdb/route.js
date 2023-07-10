import { useDataBase } from '@/app/hooks/useDB';



export async function POST(req) {
  
	let body = await req.json()
	const {dbName, collectionName, typeOfPhone, phone_brand} = body;
	const phone = {
		typeOfPhone: typeOfPhone,
		phone_brand: phone_brand
	}
	// console.log(dbName, collectionName, typeOfPhone, phone_brand);
	useDataBase(dbName, collectionName, phone)
  }
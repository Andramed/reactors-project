import { useDataBase } from '@/app/hooks/useCreateDocument';



export async function POST(req) {
  
	let body = await req.json()
	const {dbName, collectionName, ...rest} = body;
	
	useDataBase(dbName, collectionName, rest)
  }
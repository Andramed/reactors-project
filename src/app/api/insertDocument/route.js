import { useCreateDocument } from '@/app/hooks/useCreateDocument';



export async function POST(req) {
  
	let body = await req.json()
	 const {dbName, collectionName, ...rest} = body;
	
	useCreateDocument(dbName, collectionName, rest)
	
  }
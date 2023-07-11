import { useCreateDocument } from '@/app/hooks/useCreateDocument';
import { useFindInDB } from '@/app/hooks/useFindInDB';



export async function POST(req) {
  
	let body = await req.json()
	console.log('search string', body);
	useFindInDB('find', body)
  }
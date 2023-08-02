import { NextResponse } from 'next/server';

export  function DELETE(req, res) {
	const  {query}  =  parse(req.url, true);
	console.log(query);
	console.log('delete');
	return NextResponse.json('delete')
}
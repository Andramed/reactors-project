

import { connectToDatabase, client } from '@/app/hooks/useConectDB';
import { NextResponse } from 'next/server';

export async function POST(req, res){
    let body = await req.json()
    try {
        await connectToDatabase();
        const toConnect = client.db('questions').collection('user_questions');
        const result = await toConnect.insertOne(body)
        return NextResponse.json(result.insertedId? {"message": 'Question sended!' }: null)
    } catch (error) {
        console.error(error);
        return NextResponse.json(error)
    } finally {
        client.close();
    }

}
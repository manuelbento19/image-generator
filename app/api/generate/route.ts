import {NextRequest, NextResponse} from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env["API_KEY"],
})

export async function POST(request: NextRequest) {
    try{
        const {prompt} = await request.json();
        const result = await openai.images.generate({
            prompt,
            n:1,
            size: "1024x1024",
            response_format: "url"
        })
        return NextResponse.json({
            image: result.data[0].url
        })
    }
    catch(error:any){
        return NextResponse.json({
            error: error.message
        })
    }
}
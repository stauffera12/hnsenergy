// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "@/app/lib/mogoDB";
import Blog from "@/app/model/Blog";

import { NextResponse, NextRequest } from 'next/server';
export async function GET() {
  await connectMongo();
  try {
    const blogs = await Blog.find({});
    if(!blogs) {
     return NextResponse.json({
          data: [],
          message: "blog not found",
          status: 404
        })
  }
  return NextResponse.json({
      data: blogs,
      message: "Success",
      status: 200
    }
    ) 
    
  } catch (error:any) {
    return  NextResponse.json({
      data: [],
      message: error.message,
      status: 500,
    });
  }
}
export async function POST( request: Request) {
  await connectMongo();
      try {
        const req = await request.json()
        const newblog = await Blog.create(req);
        return  NextResponse.json({
          data: newblog,
          message: "Create success",
          status: 200,
        });
      } catch (error:any) {
        return  NextResponse.json({
          message: error.message,
          status: 500,
        });
      }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "@/app/lib/mogoDB";
import Page from "@/app/model/Page";

import { NextResponse, NextRequest } from 'next/server';
export async function GET() {
  await connectMongo();
  try {
    const pages = await Page.find({});
    if(!pages) {
     return NextResponse.json({
          data: [],
          message: "page not found",
          status: 404
        })
  }
  return NextResponse.json({
      data: pages,
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
        const newpage = await Page.create(req);
        
        return  NextResponse.json({
          data: newpage,
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

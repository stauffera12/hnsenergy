// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "@/app/lib/mogoDB";
import Category from "@/app/model/Category";

import { NextResponse, NextRequest } from 'next/server';
export async function GET() {
  await connectMongo();
  try {
    const categorys = await Category.find({});
    if(!categorys) {
     return NextResponse.json({
          message: "category not found",
          status: 404
        })
  }
  return NextResponse.json({
      data: categorys,
      message: "Success",
      status: 200
    }
    ) 
    
  } catch (error:any) {
    return  NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
export async function POST( request: Request) {
  await connectMongo();
      try {
        const req = await request.json()
        const newcategory = await Category.create(req);
        console.log(`newcategory`,newcategory);
        
        return  NextResponse.json({
          data: newcategory,
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
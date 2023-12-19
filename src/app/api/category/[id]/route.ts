// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "@/app/lib/mogoDB";
import Category from "@/app/model/Category";

import { NextResponse, NextRequest } from 'next/server';

export async function GET(req:NextRequest, {params}:any) {
  console.log(params);
  
  await connectMongo();
  try {
    const {id} = params;
    const categoryById = await Category.findById(id)
    if (!categoryById) {
      return NextResponse.json({ success: false })
    }
    return NextResponse.json({ success: true, data: categoryById })
  } catch (error) {
    return NextResponse.json({ success: false })
  }

}
export async function PUT(request: Request, {params}:any) {
  await connectMongo();
  try {
    const {id} = params;
    const req = await request.json()
    const categoryById = await Category.findByIdAndUpdate(id, req, {
      new: true,
      runValidators: true,
    })
    if (!categoryById) {
      return NextResponse.json({ success: false })
    }
    return NextResponse.json({ success: true, data: categoryById })
  } catch (error) {
    return NextResponse.json({ success: false })
  }
}
export async function DELETE(req:NextRequest,{params}:any) {
  await connectMongo();
  try {
    const {id} = params;
    const newcategory = await Category.deleteOne({ _id: id })
    if (!newcategory) {
      return NextResponse.json({ success: false })
    }
    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    return NextResponse.json({ success: false })
  }
}
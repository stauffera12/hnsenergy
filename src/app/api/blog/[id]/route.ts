// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "@/app/lib/mogoDB";
import Blog from "@/app/model/Blog";

import { NextResponse, NextRequest } from 'next/server';

export async function GET(req:NextRequest, {params}:any) {
  await connectMongo();
  
  try {
    const {id} = params;
    const blogById = await  Blog.findById(id)
    if (!blogById) {
      return NextResponse.json({ success: false })
    }
    return NextResponse.json({ success: true, data: blogById })
  } catch (error) {
    return NextResponse.json({ success: false })
  }

}
export async function PUT(request: Request, {params}:any) {
  await connectMongo();
  try {
    const {id} = params;
    const req = await request.json()
    const blogById = await Blog.findByIdAndUpdate(id, req, {
      new: true,
      runValidators: true,
    })
    if (!blogById) {
      return NextResponse.json({ success: false })
    }
    return NextResponse.json({ success: true, data: blogById })
  } catch (error) {
    return NextResponse.json({ success: false })
  }
}
export async function DELETE(req:NextRequest,{params}:any) {
  await connectMongo();
  try {
    const {id} = params;
    const newblog = await Blog.deleteOne({ _id: id })
    if (!newblog) {
      return NextResponse.json({ success: false })
    }
    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    return NextResponse.json({ success: false })
  }
}
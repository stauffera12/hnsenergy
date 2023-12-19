// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "@/app/lib/mogoDB";
import Page from "@/app/model/Page";

import { NextResponse, NextRequest } from 'next/server';

export async function GET(req:NextRequest, {params}:any) {
  
  await connectMongo();
  try {
    const {id} = params;
    const pageById = await Page.findById(id)
    if (!pageById) {
      return NextResponse.json({ success: false })
    }
    return NextResponse.json({ success: true, data: pageById })
  } catch (error) {
    return NextResponse.json({ success: false })
  }

}
export async function PUT(request: Request, {params}:any) {
  await connectMongo();
  try {
    const {id} = params;
    const req = await request.json()
    const pageById = await Page.findByIdAndUpdate(id, req, {
      new: true,
      runValidators: true,
    })
    if (!pageById) {
      return NextResponse.json({ success: false })
    }
    return NextResponse.json({ success: true, data: pageById })
  } catch (error) {
    return NextResponse.json({ success: false })
  }
}
export async function DELETE(req:NextRequest,{params}:any) {
  await connectMongo();
  try {
    const {id} = params;
    const newpage = await Page.deleteOne({ _id: id })
    if (!newpage) {
      return NextResponse.json({ success: false })
    }
    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    return NextResponse.json({ success: false })
  }
}
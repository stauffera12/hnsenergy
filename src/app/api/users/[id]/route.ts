import connectMongo from "@/app/lib/mogoDB";
import User from "@/app/model/User";
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req:NextRequest, {params}:any) {
  await connectMongo();
  try {
    const {id} = params;
    const userById = await User.findById(id)
    if (!userById) {
      return NextResponse.json({ success: false })
    }
    return NextResponse.json({ success: true, data: userById })
  } catch (error) {
    return NextResponse.json({ success: false })
  }

}
export async function PUT(request: Request, {params}:any) {
  await connectMongo();
  try {
    const {id} = params;
    const req = await request.json()
    const userById = await User.findByIdAndUpdate(id, req, {
      new: true,
      runValidators: true,
    })
    if (!userById) {
      return NextResponse.json({ success: false })
    }
    return NextResponse.json({ success: true, data: userById })
  } catch (error) {
    return NextResponse.json({ success: false })
  }
}
export async function DELETE(req:NextRequest,{params}:any) {
  await connectMongo();
  try {
    const {id} = params;
    const newuser = await User.deleteOne({ _id: id })
    if (!newuser) {
      return NextResponse.json({ success: false })
    }
    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    return NextResponse.json({ success: false })
  }
}
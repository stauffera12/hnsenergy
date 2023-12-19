// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "@/app/lib/mogoDB";
import UserModel from "../../model/User";
import { NextResponse, NextRequest } from 'next/server';
import bcrypt from "bcrypt";
import User from "@/app/model/User";
export async function GET() {
  await connectMongo();
  try {
    const users = await User.find({});
    if(!users) {
     return NextResponse.json({
          message: "user not found",
          status: 404
        })
  }
  return NextResponse.json({
      data: users,
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
        const {username, email,role, password} = req;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
          return NextResponse.json({
            message: "Email already exists",
            status: 400,
          });
        }
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new UserModel({
          username,
          role,
          email,
          password: passwordHash
        })
        const savedUser = await newUser.save();
        return NextResponse.json({
          data: savedUser,
          message: "Register success",
          status: 200,
        });

      } catch (error:any) {
        return  NextResponse.json({
          message: error.message,
          status: 500,
        });
      }
}
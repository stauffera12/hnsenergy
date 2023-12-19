// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from 'next/server';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectMongo from "@/app/lib/mogoDB";
import UserModel from "@/app/model/User";

export async function POST(request: Request) {
  try {
    await connectMongo();
    const req = await request.json()
    const { email, password } = req;
    const user: any = await UserModel.findOne({ email });


    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "taggo");
    delete user.password;

    return NextResponse.json({ token, user });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}

import mongoose from "mongoose";
import { User } from "../../lib/schema/user";
import { NextResponse } from "next/server";
import { connectionStr } from "../../lib/db";

export async function GET() {
  await mongoose.connect(connectionStr);
  try {
    let data = await User.find();
    return NextResponse.json({ result: data, success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ result: {}, success: false });
  }
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  try {
    const user = new User(payload);
    const result = await user.save(payload);
    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ result: {}, success: false });
  }
}

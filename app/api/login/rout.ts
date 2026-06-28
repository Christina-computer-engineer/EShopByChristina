import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ success: false, message: "Wrong password" });
    }

    // IMPORTANT: only allow admin
    if (user.role !== "admin") {
      return NextResponse.json({
        success: false,
        message: "Access denied: Not admin",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return NextResponse.json({
      success: true,
      token,
      role: user.role,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Login error",
    });
  }
}
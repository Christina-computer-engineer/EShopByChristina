import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    return Response.json({
      success: true,
      message: "MongoDB Connected Successfully 🚀"
    });

  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Database connection failed",
        error: String(error)
      },
      { status: 500 }
    );
  }
}
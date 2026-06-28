import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

// GET all products
export async function GET() {
  try {
    await connectDB();

    const products = await Product.find({});

    return Response.json({
      success: true,
      data: products,
    });
  } catch (error: any) {
    console.log("GET PRODUCTS ERROR:", error);

    return Response.json(
      {
        success: false,
        message: error.message || "Error fetching products",
      },
      { status: 500 }
    );
  }
}

// OPTIONAL: Add product (useful for admin panel later)
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const { name, price, image, description, category, stock } = body;

    const newProduct = await Product.create({
      name,
      price,
      image,
      description,
      category,
      stock,
    });

    return Response.json({
      success: true,
      message: "Product added successfully",
      data: newProduct,
    });
  } catch (error: any) {
    console.log("ADD PRODUCT ERROR:", error);

    return Response.json(
      {
        success: false,
        message: error.message || "Error adding product",
      },
      { status: 500 }
    );
  }
}
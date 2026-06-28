"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { cart } = useCart();
  const router = useRouter();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        E-Shop
      </div>

      {/* Links */}
      <div className="flex gap-6 text-gray-700 font-medium items-center">

        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>

        <Link href="/cart">
          Cart ({cart.length})
        </Link>

        <Link href="/admin">Admin</Link>

        {/* LOGIN BUTTON FIXED */}
        <button
          onClick={() => router.push("/login")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

      </div>

    </nav>
  );
}
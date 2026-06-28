"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: any) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  // 🛡️ SAFE CHECK (IMPORTANT)
  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);

    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col">

      {/* IMAGE */}
      <div className="w-full h-40 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
        <img
          src={product.image || "https://via.placeholder.com/300"}
          alt={product.name || "product"}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/300";
          }}
        />
      </div>

      {/* NAME */}
      <h2 className="mt-3 font-semibold text-lg">
        {product.name}
      </h2>

      {/* PRICE */}
      <p className="text-green-600 font-bold">
        ₹{product.price}
      </p>

      {/* BUTTON */}
      <button
        onClick={handleAddToCart}
        className={`mt-3 w-full py-2 rounded text-white ${
          added ? "bg-green-600" : "bg-blue-600"
        }`}
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>

    </div>
  );
}
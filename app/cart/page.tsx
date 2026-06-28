"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, addToCart, removeFromCart } = useCart();
  const router = useRouter();

  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item: any) => (
            <div
              key={item._id || item.id}
              className="bg-white p-4 mb-3 shadow rounded flex justify-between items-center"
            >
              {/* PRODUCT INFO */}
              <div>
                <h2 className="font-semibold">{item.name}</h2>

                <p className="text-gray-600">
                  ₹{item.price} × {item.qty}
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-2 items-center">

                {/* ADD (+) */}
                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  +
                </button>

                {/* REMOVE (-) */}
                <button
                  onClick={() => removeFromCart(item._id || item.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  -
                </button>

              </div>
            </div>
          ))}

          {/* TOTAL */}
          <h2 className="text-xl font-bold mt-6">
            Total: ₹{total}
          </h2>

          {/* CHECKOUT */}
          <button
            onClick={() => router.push("/checkout")}
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}
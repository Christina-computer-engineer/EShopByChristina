"use client";

import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cart.map((item: any) => (
        <div key={item._id} className="bg-white p-4 mb-3 shadow rounded">
          <h2>{item.name}</h2>
          <p>
            ₹{item.price} × {item.qty}
          </p>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-6">
        Total: ₹{total}
      </h2>

      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">
        Pay Now (Stripe next step)
      </button>
    </div>
  );
}
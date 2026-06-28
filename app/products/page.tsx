"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        setProducts(data.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-gray-100 min-h-screen p-10">

      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-3 mb-6 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* LOADING */}
      {loading ? (
        <p className="text-gray-600">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {filtered.length > 0 ? (
  filtered.map((product) => (
    <ProductCard
      key={product._id || product.id}
      product={product}
    />
  ))
) : (
  <p>No products found</p>
)}
          
        </div>
      )}

    </main>
  );
}
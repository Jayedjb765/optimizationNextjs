import Product from "@/components/products/Product";
import React from "react";

const AllProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div>
      <h1 className="text-center text-3xl">Products</h1>
      <div className="grid grid-cols-3 gap-7 w-[90%] mx-auto">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

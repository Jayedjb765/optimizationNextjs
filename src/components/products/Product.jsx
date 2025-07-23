import Link from "next/link";
import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={product.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <p>Price: ${product.price}</p>
          <div className="flex justify-between">
            <Link
              href={`/product/${product.id}`}
              className="bg-black text-white py-2 px-5 rounded-lg shadow"
            >
              See details
            </Link>
            <button className="bg-black text-white py-2 px-5 rounded-lg  transition-all ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

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
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{product.price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

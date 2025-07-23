import Product from '@/components/products/Product';
import React from 'react';

const Home = async () => {
  const res = await fetch('http://localhost:5000/products', {
    next: {
      revalidate: 5,
    }
  })
  const products = await res.json()

  return (
    <div>
      <h1 className='text-center font-extrabold text-7xl'>Welcome to Home Page</h1>
      <div className='grid grid-cols-3 gap-7 w-[90%] mx-auto'>{products.map(product => <Product key={product.id} product={product}></Product>)}</div>
    </div>
  );
};

export default Home;
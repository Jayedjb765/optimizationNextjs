import React from 'react';

const Home = async () => {
  const res = await fetch('http://localhost:5000/products')
  const products = await res.json()
  console.log(products);
  return (
    <div>
      <h1 className='text-center font-extrabold text-7xl'>Welcome to Home Page</h1>
    </div>
  );
};

export default Home;
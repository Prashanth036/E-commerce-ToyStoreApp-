import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    let navigate=useNavigate()
  return (
    <div className="">
      <header className="bg-orange-200 rounded-lg p-10 text-center">
        <h1 className="text-4xl font-bold text-orange-800 mb-4">Welcome to ToyCar Store</h1>
        <p className="text-lg text-orange-700">Discover the best toy cars for kids of all ages!</p>
        <button onClick={()=>navigate("/products")} className="mt-4 bg-orange-600 text-white py-2 px-6 rounded hover:bg-orange-700">
          Shop Now
        </button>
      </header>

      <section className="mt-10 text-center">
        <h2 className="text-3xl font-semibold text-orange-700 mb-4">About Us</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          At ToyCar Store, we offer a variety of high-quality toy cars for young racers. From classic cars to monster trucks, there's something for everyone!
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-orange-700 text-center mb-6">Featured Categories</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-yellow-100 p-6 w-64 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">Race Cars</h3>
            <p className="text-gray-600">High-speed toys for the little speed demons.</p>
          </div>
          <div className="bg-yellow-100 p-6 w-64 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">Monster Trucks</h3>
            <p className="text-gray-600">Built to take on the toughest playtime terrain.</p>
          </div>
          <div className="bg-yellow-100 p-6 w-64 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">Classic Cars</h3>
            <p className="text-gray-600">Stylish and timeless toy cars for collectors.</p>
          </div>
        </div>
      </section>

      <section className="bg-yellow-300 p-6 rounded-lg text-center mt-10 text-yellow-900 shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Special Offer</h2>
        <p className="text-lg">Get 10% off on your first order! Use code: TOYCAR10</p>
      </section>
    </div>
  );
};

export default HomePage;

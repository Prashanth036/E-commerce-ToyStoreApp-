import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-black p-4  shadow-lg">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-white text-2xl font-bold">ToyCar Store</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/homepage" className="text-white text-lg hover:text-orange-200">Home</Link>
            <Link to="/products" className="text-white text-lg hover:text-orange-200">Shop</Link>
            <Link to="/checkout" className="text-white text-lg hover:text-orange-200">Cart</Link>
            {/* <Link to="/mock_payment" className="text-white text-lg hover:text-orange-200">Payment</Link> */}
          </div>
          <div className="md:hidden">
            <button className="text-white text-2xl">☰</button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-orange-600 text-white p-4 mt-10">
        <div className="max-w-screen-xl mx-auto text-center">
          <p>&copy; 2024 ToyCar Store. All rights reserved.</p>
          <div className="space-x-4">
            <Link to="/privacy" className="text-white hover:text-orange-200">Privacy Policy</Link>
            <Link to="/terms" className="text-white hover:text-orange-200">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

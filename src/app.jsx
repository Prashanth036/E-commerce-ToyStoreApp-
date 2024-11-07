import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import ProductListing from './pages/ProductListing';
// import ProductCart from './pages/ProductCart';
// import MockPaymentPage from './pages/MockPaymentPage';
import { Index } from '.';
import HomePage from './pages/Homepage';
import Layout from './Layout';
import CartPage from './pages/Cart';
import MockPaymentPage from './pages/Payment';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/products" element={<Index />} />
        <Route path="/checkout" element={<CartPage />} />
        <Route path="/mock_payment" element={<MockPaymentPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

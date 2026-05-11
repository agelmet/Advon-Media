import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import GlobalReviews from './GlobalReviews';
import GlobalContact from './GlobalContact';
import Footer from './Footer';
import Background from './Background';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative text-white font-body selection:bg-electric-cyan/30 selection:text-white">
      <Background />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Outlet />
        </main>
        <GlobalReviews />
        <GlobalContact />
        <Footer />
      </div>
    </div>
  );
}

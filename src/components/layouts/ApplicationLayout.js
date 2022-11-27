import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../Header';
import Footer from './../Footer';
const ApplicationLayout = () => {
  return (
    <div className='dark:bg-black dark:text-white min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ApplicationLayout;

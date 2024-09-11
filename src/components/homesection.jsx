import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from '../route/Route';

const HomeSection = ({toggleSidebar}) => {
  return (
    <section className="home-section">
      <div className="home-content" style={{cursor:'pointer' ,color:'black'}}>
        <i className='bx bx-menu' onClick={()=> toggleSidebar()}></i>
        <span className="text">AHMEDNAGAR MUNICIPAL</span>
      </div>
      <RouterProvider router={appRouter} />
    </section>
  );
};

export default HomeSection;

import React from 'react';

const HomeSection = ({toggleSidebar,html}) => {
  return (
    <section className="home-section">
      <div className="home-content" style={{cursor:'pointer' ,color:'black'}}>
        <i className='bx bx-menu' onClick={()=> toggleSidebar()}></i>
        <span className="text">AHMEDNAGAR MUNICIPAL</span>
      </div>
      {html}
    </section>
  );
};

export default HomeSection;

import React, { useState } from 'react';
// import './Sidebar.css'; // Import your CSS file here
import '../css/Sidebar.css'; // Import your CSS file here
import icon from '../image/Courthouse.png'

const Sidebar = ({isClosed}) => {
//   const [isClosed, setIsClosed] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => {
    // setIsClosed(!isClosed);
  };

  const handleArrowClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };
console.log(activeMenu,"activeMenu")
  return (
    <div className={`sidebar ${isClosed ? 'close' : ''}`}>
      <div className="logo-details">
        {/* <i className='bx bxl-c-plus-plus'></i> */}
        <img style={{width: !isClosed ? "15%" : "30%",margin:'30px'}} src={icon} alt="icon" />
        <span className="logo_name">CodingLab</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">
            <i className='bx bx-grid-alt'></i>
            <span className="link_name">Dashboard</span>
          </a>
          <ul className="sub-menu blank">
            <li><a className="link_name" href="#">Dashboard</a></li>
          </ul>
        </li>

        {/* Example of active menu */}
        <li className={activeMenu === 1 ? "active" : ""}>
          <div className="iocn-link">
            <a href="#">
              <i className='bx bx-collection'></i>
              <span className="link_name f-size">Municipal Master</span>
            </a>
            <i className={`bx bxs-chevron-down arrow ${activeMenu === 1 ? "rotate" : ""}`} onClick={() => handleArrowClick(1)}></i>
          </div>
          <ul className={`sub-menu ${activeMenu === 1 ? 'showMenu' : 'sub-menu-hide'}`}>
            <li><a className="link_name" href="#">Municipal Master</a></li>
            <li><a href="#">Municipal Master Form</a></li>
          </ul>
        </li>

        <li className={activeMenu === 2 ? "active" : ""}>
          <div className="iocn-link">
            <a href="#">
              <i className='bx bx-collection'></i>
              <span className="link_name f-size">Property Master</span>
            </a>
            <i className={`bx bxs-chevron-down arrow ${activeMenu === 2 ? "rotate" : ""}`} onClick={() => handleArrowClick(2)}></i>
          </div>
          <ul className={`sub-menu ${activeMenu === 2 ? 'showMenu' : 'sub-menu-hide'}`}>
            <li><a className="link_name" href="#">Property Master</a></li>
            <li><a href="#">Property Tax Rate</a></li>
            <li><a href="#">Road Type Name</a></li>
            <li><a href="#">Zone Data</a></li>
            <li><a href="#">Document Group</a></li>
            <li><a href="#">Property Tax Component List</a></li>
            <li><a href="#">Property Tax Component Name</a></li>
            <li><a href="#">Property Tax Cess Rate List</a></li>
            <li><a href="#">Property Area Range</a></li>
            <li><a href="#">Document Upload</a></li>
            <li><a href="#">Ward Master</a></li>
            <li><a href="#">Property Type Master</a></li>
            <li><a href="#">Property Use Type Master</a></li>
            <li><a href="#">Property Assessment Type Master</a></li>
            <li><a href="#">Ownership Type Master</a></li>
          </ul>
        </li>

        {/* Add more items similarly */}
      </ul>
    </div>
  );
};

export default Sidebar;
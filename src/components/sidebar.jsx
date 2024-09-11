import React, { useState } from 'react';
import '../css/Sidebar.css'; // Import your CSS file here
import icon from '../image/Courthouse.png'
import { Link } from 'react-router-dom';

const Sidebar = ({isClosed}) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const handleArrowClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };
  return (
    <div className={`sidebar ${isClosed ? 'close' : ''}`}>
      <div className="logo-details">
        <img style={{width: !isClosed ? "15%" : "30%",margin:'30px'}} src={icon} alt="icon" />
        <span className="logo_name">CodingLab</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <i className='bx bx-grid-alt'></i>
            <span className="link_name">Dashboard</span>
          </Link>
          <ul className="sub-menu blank">
            <li><Link className="link_name" to="/">Dashboard</Link></li>
          </ul>
        </li>

        {/* Example of active menu */}
        <li className={activeMenu === 1 ? "active" : ""}>
          <div className="iocn-link" onClick={() => handleArrowClick(1)}>
            <a className='cursor-p'>
              <i className='bx bx-collection'></i>
              <span className="link_name f-size">Municipal Master</span>
            </a>
            <i className={`bx bxs-chevron-down arrow ${activeMenu === 1 ? "rotate" : ""}`}></i>
          </div>
          <ul className={`sub-menu ${activeMenu === 1 ? 'showMenu' : 'sub-menu-hide'}`}>
            <li><a className="link_name">Municipal Master</a></li>
            <li><Link to="/municipal-details-list">Municipal Master Form</Link></li>
          </ul>
        </li>
        <li className={activeMenu === 2 ? "active" : ""}>
          <div className="iocn-link" onClick={() => handleArrowClick(2)}>
            <a className='cursor-p'>
              <i className='bx bx-collection'></i>
              <span className="link_name f-size">Property Master</span>
            </a>
            <i className={`bx bxs-chevron-down arrow ${activeMenu === 2 ? "rotate" : ""}`}></i>
          </div>
          <ul className={`sub-menu ${activeMenu === 2 ? 'showMenu' : 'sub-menu-hide'}`}>
            <li><a className="link_name" href="#">Property Master</a></li>
            <li><a href="#">Property Tax Rate</a></li>
            <li><a href="/road-type-name">Road Type Name</a></li>
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

        <li className={activeMenu === 3 ? "active" : ""}>
          <div className="iocn-link" onClick={() => handleArrowClick(3)}>
            <a className='cursor-p'>
              <i className='bx bx-collection'></i>
              <span className="link_name f-size">Water Users Setup</span>
            </a>
            <i className={`bx bxs-chevron-down arrow ${activeMenu === 3 ? "rotate" : ""}`}></i>
          </div>
          <ul className={`sub-menu ${activeMenu === 3 ? 'showMenu' : 'sub-menu-hide'}`}>
            <li><a className="link_name" href="#">Water Users Setup</a></li>
            <li><a href="#">Water Property Type Master</a></li>
            <li><a href="#">Unit Rate Master</a></li>
            <li><a href="#">Unit Master</a></li>
            <li><a href="#">Application Category Master</a></li>
            <li><a href="#">Application Type Master</a></li>
            <li><a href="#">Document Type Master</a></li>
            <li><a href="#">Document Group Master</a></li>
            <li><a href="#">PipeLine Type Master</a></li>
            <li><a href="#">Calculation Type Master</a></li>
            <li><a href="#">Connection Type</a></li>
            <li><a href="#">Consumer Category Master</a></li>
            <li><a href="#">Buildup Area Master</a></li>
            <li><a href="#">Fee Master</a></li>
            <li><a href="#">Additional Fee Master</a></li>
          </ul>
        </li>

        <li className={activeMenu === 4 ? "active" : ""}>
          <div className="iocn-link" onClick={() => handleArrowClick(4)}>
            <a className='cursor-p'>
              <i className='bx bx-collection'></i>
              <span className="link_name f-size">Municipal License</span>
            </a>
            <i className={`bx bxs-chevron-down arrow ${activeMenu === 4 ? "rotate" : ""}`}></i>
          </div>
          <ul className={`sub-menu ${activeMenu === 4 ? 'showMenu' : 'sub-menu-hide'}`}>
            <li><a className="link_name" href="#">Municipal License</a></li>
            <li><a href="#">Trade Application Type Master</a></li>
            <li><a href="#">Trade Type</a></li>
            <li><a href="#">Firm Type</a></li>
            <li><a href="#">Business Nature</a></li>
            <li><a href="#">Business Premises</a></li>
            <li><a href="#">ML Rate Master</a></li>
            <li><a href="#">ML Document Master</a></li>
          </ul>
        </li>

        <li className={activeMenu === 5 ? "active" : ""}>
          <div className="iocn-link" onClick={() => handleArrowClick(5)}>
            <a className='cursor-p'>
              <i className='bx bx-collection'></i>
              <span className="link_name f-size">Property Master Form</span>
            </a>
            <i className={`bx bxs-chevron-down arrow ${activeMenu === 5 ? "rotate" : ""}`}></i>
          </div>
          <ul className={`sub-menu ${activeMenu === 5 ? 'showMenu' : 'sub-menu-hide'}`}>
            <li><a className="link_name" href="#">Property Master Form</a></li>
            <li><Link to="#">Property Assessment Form</Link></li>
            <li><Link to="#">New Water Connection</Link></li>
          </ul>
        </li>

        {/* Add more items similarly */}
      </ul>
    </div>
  );
};

export default Sidebar;
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
            <Link className='cursor-p'>
              <i className='bx bx-collection'></i>
              <span className="link_name f-size">Municipal Master</span>
            </Link>
            <i className={`bx bxs-chevron-down arrow ${activeMenu === 1 ? "rotate" : ""}`}></i>
          </div>
          <ul className={`sub-menu ${activeMenu === 1 ? 'showMenu' : 'sub-menu-hide'}`}>
            <li><Link className="link_name">Municipal Master</Link></li>
            <li><Link to="/municipal-details-list">Municipal Master Form</Link></li>
          </ul>
        </li>
        <li className={activeMenu === 2 ? "active" : ""}>
          <div className="iocn-link" onClick={() => handleArrowClick(2)}>
            <Link className='cursor-p'>
              <i className='bx bx-collection'></i>
              <span className="link_name f-size">Property Master</span>
            </Link>
            <i className={`bx bxs-chevron-down arrow ${activeMenu === 2 ? "rotate" : ""}`}></i>
          </div>
          <ul className={`sub-menu ${activeMenu === 2 ? 'showMenu' : 'sub-menu-hide'}`}>
            <li><Link className="link_name" to="#">Property Master</Link></li>
            {/* <li><Link to="#">Property Tax Rate</Link></li> */}
            <li><Link to="/road-type-name">Road Type Name</Link></li>
            <li><Link to="/zone-data">Zone Data</Link></li>
            {/* <li><Link to="#">Document Group</Link></li> */}
            <li><Link to="/property-tax">Property Tax Component List</Link></li>
            <li><Link to="/master-property-tax-component-name">Property Tax Component Name</Link></li>
            <li><Link to="/state-cess-rate-calculation">Property Tax Cess Rate List</Link></li>
            <li><Link to="/property-area-range-master-list">Property Area Range</Link></li>
            <li><Link to="/ward-master">Ward Master</Link></li>
            <li><Link to="/property-type-master">Property Type Master</Link></li>
            <li><Link to="/property-use-type-master">Property Use Type Master</Link></li>
            <li><Link to="/property-assessment-type-master">Property Assessment Type Master</Link></li>
            <li><Link to="/ownership-type-master">Ownership Type Master</Link></li>
          </ul>
        </li>

        <li className={activeMenu === 3 ? "active" : ""}>
          <div className="iocn-link" onClick={() => handleArrowClick(3)}>
            <Link className='cursor-p'>
              <i className='bx bx-collection'></i>
              <span className="link_name f-size">Water Users Setup</span>
            </Link>
            <i className={`bx bxs-chevron-down arrow ${activeMenu === 3 ? "rotate" : ""}`}></i>
          </div>
          <ul className={`sub-menu ${activeMenu === 3 ? 'showMenu' : 'sub-menu-hide'}`}>
            <li><Link className="link_name" to="#">Water Users Setup</Link></li>
            <li><Link to="/water-property-type-master">Water Property Type Master</Link></li>
            {/* <li><Link to="#">Unit Rate Master</Link></li> */}
            <li><Link to="/unit-master">Unit Master</Link></li>
            <li><Link to="/application-category-master">Application Category Master</Link></li>
            <li><Link to="/application-type-master">Application Type Master</Link></li>
            <li><Link to="/document-type">Document Type Master</Link></li>
            <li><Link to="/document-group-master">Document Group Master</Link></li>
            <li><Link to="/pipeline-type">PipeLine Type Master</Link></li>
            <li><Link to="/calculation-type">Calculation Type Master</Link></li>
            <li><Link to="/connection-type">Connection Type</Link></li>
            <li><Link to="/consumer-category-master">Consumer Category Master</Link></li>
            <li><Link to="/buildup-area">Buildup Area Master</Link></li>
            <li><Link to="/fee-master">Fee Master</Link></li>
            <li><Link to="/additional-fee">Additional Fee Master</Link></li>
          </ul>
        </li>

        <li className={activeMenu === 4 ? "active" : ""}>
          <div className="iocn-link" onClick={() => handleArrowClick(4)}>
            <Link className='cursor-p'>
              <i className='bx bx-collection'></i>
              <span className="link_name f-size">Municipal License</span>
            </Link>
            <i className={`bx bxs-chevron-down arrow ${activeMenu === 4 ? "rotate" : ""}`}></i>
          </div>
          <ul className={`sub-menu ${activeMenu === 4 ? 'showMenu' : 'sub-menu-hide'}`}>
            <li><Link className="link_name" to="#">Municipal License</Link></li>
            <li><Link to="#">Trade Application Type Master</Link></li>
            <li><Link to="#">Trade Type</Link></li>
            <li><Link to="#">Firm Type</Link></li>
            <li><Link to="#">Business Nature</Link></li>
            <li><Link to="#">Business Premises</Link></li>
            <li><Link to="#">ML Rate Master</Link></li>
            <li><Link to="#">ML Document Master</Link></li>
          </ul>
        </li>

        <li className={activeMenu === 5 ? "active" : ""}>
          <div className="iocn-link" onClick={() => handleArrowClick(5)}>
            <Link className='cursor-p'>
              <i className='bx bx-collection'></i>
              <span className="link_name f-size">Property Master Form</span>
            </Link>
            <i className={`bx bxs-chevron-down arrow ${activeMenu === 5 ? "rotate" : ""}`}></i>
          </div>
          <ul className={`sub-menu ${activeMenu === 5 ? 'showMenu' : 'sub-menu-hide'}`}>
            <li><Link className="link_name" to="#">Property Master Form</Link></li>
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
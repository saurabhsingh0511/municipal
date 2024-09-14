import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomeSection = ({ toggleSidebar, html }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('userLogin');
    dispatch({
      type: "ISLOGIN",
      payload: false, 
    });
    navigate("/login");
  }
  return (
    <section className="home-section">
      <div
        className="home-content d-flex justify-content-between"
        style={{ cursor: "pointer", color: "black" }}
      >
        <div className="d-flex align-items-center">
          <i className="bx bx-menu" onClick={() => toggleSidebar()}></i>
          <span className="text">
            AHMEDNAGAR <strong> MUNICIPAL</strong>
          </span>
        </div>
        <div className="logout_btn">
          <img src="/images/avatar.png" alt="User Avatar" />
          <button className="logout_button" onClick={()=> handleLogout()}>Logout</button>
        </div>
      </div>
      {html}
    </section>
  );
};

export default HomeSection;

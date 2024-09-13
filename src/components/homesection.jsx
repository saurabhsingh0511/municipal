import React from "react";

const HomeSection = ({ toggleSidebar, html }) => {
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
          <button className="logout_button">Logout</button>
        </div>
      </div>
      {html}
    </section>
  );
};

export default HomeSection;

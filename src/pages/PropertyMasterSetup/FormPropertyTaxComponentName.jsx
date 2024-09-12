import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";

const FormPropertyTaxComponentName = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed // toggle the current state
  });
  };
  return (
    <>
    <HomeSection toggleSidebar={toggleSidebar} 
    html={
      <div className="container-fluid form_container">
      <h1 className="heading_h1">Master Property Tax Component Name</h1>
      <div className="text-start mb-2">
        <Link to="/master-property-tax-component-name">
          <Button
            type="btn-success"
            buttonName="Back to Master Property Tax Component Name List"
            bootIcon={<i class="bi bi-list"></i>}
          />
        </Link>
      </div>
      <div className="border_box">
        <form>
          <div className="row">
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="componentName">Component Name:</label>
                <input
                  type="text"
                  id="componentName"
                  name="componentName"
                  className="form-control"
                  placeholder="Enter Component Name"
                  required
                />
              </div>
            </div>
            <div className="col-12 text-center my-3 d-flex justify-content-center gap-4">
              <Button type="btn-primary" buttonName="Save" />
              <Button type="btn-danger" buttonName="Reset" />
            </div>
          </div>
        </form>
      </div>
    </div>
    }
     /> 
    </>
  );
};

export default FormPropertyTaxComponentName;

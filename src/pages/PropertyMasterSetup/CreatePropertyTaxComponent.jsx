import React from "react";
// import "./MasterPage.css";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";

const PropertyTaxComponent = () => {
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
      <h1 className="heading_h1">Create Property Tax Component</h1>
      <div className="text-start mb-2">
        <Link to="/property-tax-component-list">
          <Button
            type="btn-success"
            buttonName="Back to Property Tax Component List"
            bootIcon={<i class="bi bi-list"></i>}
          />
        </Link>
      </div>
      <div className="border_box">
        <form>
          <div className="row">
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="municipalCode">Component Name ID:</label>
                <select className="form-control">
                    <option value="">Select Component Name</option>
                    <option value="road-tax">Raod Tax</option>
                    <option value="general-tax">General Tax</option>
                    <option value="fire-fighter-tax">Fire Figher Tax</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="ratevalue">Rate Value:</label>
                <input
                  type="text"
                  id="ratevalue"
                  name="ratevalue"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="calculationValue">Calculation Value:</label>
                <input
                  type="text"
                  id="calculationValue"
                  name="calculationValue"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="state">Financial Year:</label>
                <select id="" className="form-control">
                    <option value="">Select By Year</option>
                    <option value="23-24">Year 2023-2024</option>
                    <option value="24-25">Year 2024-2025</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="effectiveDate">Effective Date:</label>
                <input
                  type="date"
                  id="effectiveDate"
                  name="effectiveDate"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="isRate">Is Rate:</label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="isRate"
                    name="isRate"
                    className="form-check-input mt-2"
                    required
                  />
                  <label htmlFor="active" className="form-check-label">
                    Active
                  </label>
                </div>
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

export default PropertyTaxComponent;

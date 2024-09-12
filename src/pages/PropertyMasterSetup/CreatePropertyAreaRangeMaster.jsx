import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";

const CreatePropertyAreaRangeMaster = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed 
  });
  };
  return (
    <>
    <HomeSection toggleSidebar={toggleSidebar} 
    html={
      <div className="container-fluid form_container">
      <h1 className="heading_h1">Add New Property Area Range Master</h1>
      <div className="text-start mb-2">
        <Link to="/property-area-range-master-list">
          <Button
            type="btn-success"
            buttonName="Back to Property Area Range Master"
            bootIcon={<i class="bi bi-list"></i>}
          />
        </Link>
      </div>
      <div className="border_box">
        <form>
          <div className="row">
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="arearange">Area Range:</label>
                <input
                  type="text"
                  id="arearange"
                  name="arearange"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="financialYear">Financial Year:</label>
                <select className="form-control">
                    <option value="">Select Financial Year</option>
                    <option value="23-24">2023-2024</option>
                    <option value="24-25">2024-2025</option>
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
                <label htmlFor="isRate">Is Active:</label>
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
              <Button type="btn-success" buttonName="Submit" />
              <Button type="btn-warning" buttonName="Reset" />
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

export default CreatePropertyAreaRangeMaster;

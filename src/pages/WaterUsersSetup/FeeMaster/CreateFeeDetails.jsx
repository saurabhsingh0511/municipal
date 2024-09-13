import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";

const CreateFeeDetails = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };
  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid form_container">
            <h1 className="heading_h1">Create New Fee Details</h1>
            <div className="text-start mb-2">
              <Link to="/fee-master">
                <Button
                  type="btn-success"
                  buttonName="Back to Fee Details"
                  bootIcon={<i class="bi bi-list"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <form>
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="rateCode">Enter Rate Code:</label>
                      <input
                        type="text"
                        id="rateCode"
                        name="rateCode"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="selectZone">Application Type:</label>
                      <select className="form-control">
                        <option value="">Select Application Type</option>
                        <option value="newApplication">New Application</option>
                        <option value="regularization">Regularization</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="selectZone">Pipeline Type:</label>
                      <select className="form-control">
                        <option value="">Select Pipeline Type</option>
                        <option value="home">Home</option>
                        <option value="newPipeline">New Pipeline</option>
                        <option value="mainPipeline">Main PipeLine</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="selectZone">Is Regularization:</label>
                      <select className="form-control">
                        <option value="">Select Yes or No</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="selectZone">Is Holding:</label>
                      <select className="form-control">
                        <option value="">Select Yes or No</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="selectZone">BPL APL Type:</label>
                      <select className="form-control">
                        <option value="">Select BPL or APL</option>
                        <option value="yes">APL</option>
                        <option value="no">BPL</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="applicationFee">Enter Application Fee:</label>
                      <input
                        type="number"
                        id="applicationFee"
                        name="applicationFee"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="effectiveDate">Enter Effective Date:</label>
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
                      <label htmlFor="isActive">Is Active:</label>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id="isActive"
                          name="isActive"
                          className="form-check-input mt-2"
                          required
                        />
                        <label htmlFor="isActive" className="form-check-label">
                          Active
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 text-center my-3 d-flex gap-4">
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

export default CreateFeeDetails;

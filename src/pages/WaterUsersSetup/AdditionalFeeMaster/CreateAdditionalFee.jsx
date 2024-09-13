import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";

const CreateAdditionalFee = () => {
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
            <h1 className="heading_h1">Create New Additional Fee Details</h1>
            <div className="text-start mb-2">
              <Link to="/additional-fee">
                <Button
                  type="btn-success"
                  buttonName="Back to Additional Fee Details"
                  bootIcon={<i class="bi bi-list"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <form>
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="feeHeadName">Enter Fee Head Name:</label>
                      <input
                        type="text"
                        id="feeHeadName"
                        name="feeHeadName"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="amount">Enter Amount:</label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
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

export default CreateAdditionalFee;

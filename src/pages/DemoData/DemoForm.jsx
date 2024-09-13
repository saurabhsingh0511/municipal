import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";

const CreateWardDetails = () => {
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
            <h1 className="heading_h1">Heading_Here</h1>
            <div className="text-start mb-2">
              <Link to="TableLink">
                <Button
                  type="btn-success"
                  buttonName="Back to ButtonName"
                  bootIcon={<i class="bi bi-list"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <form>
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="selectZone">Select Zone:</label>
                      <select className="form-control">
                        <option value="">Select Zone</option>
                        <option value="zone-a-east">Zone A - East</option>
                        <option value="zone-b-east">Zone B - West</option>
                        <option value="zone-c-north">Zone C - North</option>
                        <option value="zone-d-south">Zone d - South</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="wardNumber">Enter Ward Number:</label>
                      <input
                        type="number"
                        id="wardNumber"
                        name="wardNumber"
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

export default CreateWardDetails;

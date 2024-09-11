import React from "react";
import "./MasterPage.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

const MasterPage = () => {
  return (
    <div className="container-fluid form_container">
      <div className="border">
        <div className="text-start">
          <Link to="municipal-details-list">
            <Button
              type="btn-success"
              buttonName="Back to Municipal Details List"
              bootIcon={<i class="bi bi-list"></i>}
            />
          </Link>
        </div>
        <form>
          <div className="row">
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="municipalCode">Municipal Code:</label>
                <input
                  type="text"
                  id="municipalCode"
                  name="municipalCode"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="municipalName">Municipal Name:</label>
                <input
                  type="text"
                  id="municipalName"
                  name="municipalName"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="form-group">
                <label htmlFor="addressLine1">Address Line 1:</label>
                <input
                  type="text"
                  id="addressLine1"
                  name="addressLine1"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="form-group">
                <label htmlFor="addressLine2">Address Line 2:</label>
                <input
                  type="text"
                  id="addressLine2"
                  name="addressLine2"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="commissionerName">Commissioner Name:</label>
                <input
                  type="text"
                  id="commissionerName"
                  name="commissionerName"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number:</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="tollFreeNumber">Toll-Free Number:</label>
                <input
                  type="tel"
                  id="tollFreeNumber"
                  name="tollFreeNumber"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="logo">Logo File:</label>
                <input
                  type="file"
                  id="logo"
                  name="logo"
                  className="form-control-file"
                  accept="image/*"
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
  );
};

export default MasterPage;

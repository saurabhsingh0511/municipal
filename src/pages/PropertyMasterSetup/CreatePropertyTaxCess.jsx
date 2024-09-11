import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

const CreatePropertyTaxCess = () => {
  return (
    <div className="container-fluid form_container">
      <div className="text-start mb-2">
        <Link to="/property-tax-cess-rate-list">
          <Button
            type="btn-success"
            buttonName="Back to Property Details List"
            bootIcon={<i class="bi bi-list"></i>}
          />
        </Link>
      </div>
      <div className="border_box">
        <form>
          <div className="row">
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="municipalCode">Area Range Value:</label>
                <select className="form-control">
                    <option value="">Select Area Range Value</option>
                    <option value="road-tax">ALV Value Between 1 to 150</option>
                    <option value="road-tax">ALV Value Between 151 to 300</option>
                    <option value="road-tax">ALV Value Between 301 to 3000</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="municipalCode">Property Type:</label>
                <select className="form-control">
                    <option value="">Select Property Type</option>
                    <option value="road-tax">Super Structure</option>
                    <option value="road-tax">Independent Value</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="municipalCode">Tax Component:</label>
                <select className="form-control">
                    <option value="">Select Tax Component</option>
                    <option value="road-tax">General Tax</option>
                    <option value="road-tax">Road Tax</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="calculationValue">Rate Value:</label>
                <input
                  type="Number"
                  id="calculationValue"
                  name="calculationValue"
                  className="form-control"
                  placeholder="Rate Value"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="effectiveDate">Calculation in Percentage:</label>
                <input
                  type="text"
                  id="effectiveDate"
                  name="effectiveDate"
                  className="form-control"
                  placeholder="Calculation in Percentage"
                  required
                />
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
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="municipalCode">Financial Year:</label>
                <select className="form-control">
                    <option value="">Select Financial Year</option>
                    <option value="23-24">2023-2024</option>
                    <option value="24-25">2024-2025</option>
                </select>
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
  );
};

export default CreatePropertyTaxCess;

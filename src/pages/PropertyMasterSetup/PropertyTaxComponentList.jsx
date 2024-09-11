import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

const PropertyTaxComponentList = () => {
  return (
    <div className="container-fluid">
      <div className="text-start mb-2">
          <Link to="/create-property-tax-component">
            <Button
              type="btn-success"
              buttonName="Add New Property Tax Component"
              bootIcon={<i class="bi bi-plus-lg"></i>}
            />
          </Link>
        </div>
      <div className="border_box">
        <div className="input-group mb-3 search_input">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Component ID"
          />
          <button className="btn btn-success" type="button">
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-striped master_table">
            <thead>
              <tr>
                <th scope="col">Component Name</th>
                <th scope="col">Rate Value</th>
                <th scope="col">Financial Year</th>
                <th scope="col">Effective Date</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>General Tax</td>
                <td>30</td>
                <td>2023-2024</td>
                <td>2024-09-10</td>
                <td>
                  <Button type="btn-info" buttonName="Update" />
                </td>
                <td>
                  <Button type="btn-danger" buttonName="Delete" />
                </td>
              </tr>
              <tr>
                <td>Road Tax</td>
                <td>3</td>
                <td>2023-2024</td>
                <td>2023-04-01</td>
                <td>
                  <Button type="btn-info" buttonName="Update" />
                </td>
                <td>
                  <Button type="btn-danger" buttonName="Delete" />
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropertyTaxComponentList;

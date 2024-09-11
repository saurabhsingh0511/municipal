import React from "react";
import "./MunicipalDetailsList.css";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

const MunicipalDetailsList = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between mb-3">
        <Link to="master-page">
          <button className="btn btn-success master_btn">
            +Add New Municipal
          </button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="input-group mb-3 search_input">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Municipal Name or Commissioner Name"
        />
        <button className="btn btn-success" type="button">
          <i className="bi bi-search"></i>
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped master_table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Municipal Code</th>
              <th scope="col">Municipal Name</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Commissioner Name</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Toll-Free Number</th>
              <th scope="col">Logo</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>MUNI170</td>
              <td>Delhi Municipal Corporation</td>
              <td>New Delhi</td>
              <td>Delhi</td>
              <td>Savit</td>
              <td>+919876543212</td>
              <td>1800123456</td>
              <td>
                <img src="logo.png" alt="logo" width="40" />
              </td>
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
  );
};

export default MunicipalDetailsList;

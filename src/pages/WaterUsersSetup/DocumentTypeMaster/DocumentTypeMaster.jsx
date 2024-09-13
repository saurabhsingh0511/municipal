import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";

const DocumentTypeMaster = () => {
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
      <div className="container-fluid">
      <h1 className="heading_h1">Master Document Type List</h1>
      <div className="text-start mb-2">
          <Link to="/create-document-type">
            <Button
              type="btn-success"
              buttonName="Add New Document Type"
              bootIcon={<i class="bi bi-plus-lg"></i>}
            />
          </Link>
        </div>
      <div className="border_box">
        <div className="input-group mb-3 search_input">
          <input
            type="text"
            className="form-control"
            placeholder="Search By Document Type Name"
          />
          <button className="btn btn-success" type="button">
            <i className="bi bi-search"></i>
          </button>
        </div>      

        <div className="table-responsive">
          <table className="table table-striped master_table">
            <thead>
              <tr>
                <th scope="col">Document Type Name</th>
                <th scope="col">Application Type Name</th>
                <th scope="col">Document Group Name</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Water Connection Form</td>
                <td>New Application</td>
                <td>Identity Proof</td>
                <td>
                  <Button type="btn-info" buttonName="Update" />
                </td>
                <td>
                  <Button type="btn-danger" buttonName="Delete" />
                </td>
              </tr>
              <tr>
                <td>Pan Card</td>
                <td>New Application</td>
                <td>Identity Proof</td>
                <td>
                  <Button type="btn-info" buttonName="Update" />
                </td>
                <td>
                  <Button type="btn-danger" buttonName="Delete" />
                </td>
              </tr>
              <tr>
                <td>Aadhaar Card</td>
                <td>New Application</td>
                <td>Identity Proof</td>
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
    }
    />
    </>
  );
};

export default DocumentTypeMaster; 

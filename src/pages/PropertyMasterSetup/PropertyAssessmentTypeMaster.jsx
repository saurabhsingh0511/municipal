import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";

const PropertyAssessmentTypeMaster = () => {
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
      <h1 className="heading_h1">Property Assessment Type List</h1>
      <div className="text-start mb-2">
          <Link to="/create-property-assessment-type-master">
            <Button
              type="btn-success"
              buttonName="Add New Property Assessment Type"
              bootIcon={<i class="bi bi-plus-lg"></i>}
            />
          </Link>
        </div>
      <div className="border_box">
        <div className="input-group mb-3 search_input">
          <input
            type="text"
            className="form-control"
            placeholder="Search By Name"
          />
          <button className="btn btn-success" type="button">
            <i className="bi bi-search"></i>
          </button>
        </div>      

        <div className="table-responsive">
          <table className="table table-striped master_table">
            <thead>
              <tr>
                <th scope="col">S. No.</th>
                <th scope="col">Property Assessment Type Name</th>
                <th scope="col">Municipal ID</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>New Assessment</td>
                <td>1</td>
                <td>
                  <Button type="btn-info" buttonName="Update" />
                </td>
                <td>
                  <Button type="btn-danger" buttonName="Delete" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Re-Assessment</td>
                <td>1</td>
                <td>
                  <Button type="btn-info" buttonName="Update" />
                </td>
                <td>
                  <Button type="btn-danger" buttonName="Delete" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Amagation of Property</td>
                <td>1</td>
                <td>
                  <Button type="btn-info" buttonName="Update" />
                </td>
                <td>
                  <Button type="btn-danger" buttonName="Delete" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Partition of Property</td>
                <td>1</td>
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

export default PropertyAssessmentTypeMaster; 

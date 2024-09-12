import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";

const PropertyAreaRangeMasterList = () => {
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
      <h1 className="heading_h1">Property Area Range Master List</h1>
      <div className="text-start mb-2">
          <Link to="/create-property-area-range-master">
            <Button
              type="btn-success"
              buttonName="Add New Property Area Range Master"
              bootIcon={<i class="bi bi-plus-lg"></i>}
            />
          </Link>
        </div>
      <div className="border_box">
        <div className="input-group mb-3 search_input">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Master Zone Name"
          />
          <button className="btn btn-success" type="button">
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-striped master_table">
            <thead>
              <tr>
                <th scope="col">Area Range Value</th>
                <th scope="col">Financial Year</th>
                <th scope="col">Active</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ALV Value Between 1 to 150</td>
                <td>2023-2024</td>
                <td>Yes</td>
                <td>
                  <Button type="btn-info" buttonName="Update" />
                </td>
                <td>
                  <Button type="btn-danger" buttonName="Delete" />
                </td>
              </tr>
              <tr>
                <td>ALV Value Between 151 to 300</td>
                <td>2023-2024</td>
                <td>Yes</td>
                <td>
                  <Button type="btn-info" buttonName="Update" />
                </td>
                <td>
                  <Button type="btn-danger" buttonName="Delete" />
                </td>
              </tr>
              <tr>
                <td>ALV Value Between 301 to 3000</td>
                <td>2023-2024</td>
                <td>Yes</td>
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

export default PropertyAreaRangeMasterList; 

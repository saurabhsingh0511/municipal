import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";

const FeeMaster = () => {
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
      <h1 className="heading_h1">Fee List</h1>
      <div className="text-start mb-2">
          <Link to="/create-fee-details">
            <Button
              type="btn-success"
              buttonName="Add New Fee Details"
              bootIcon={<i class="bi bi-plus-lg"></i>}
            />
          </Link>
        </div>
      <div className="border_box">
        <div className="input-group mb-3 w-50 search_input">
          <input
            type="text"
            className="form-control"
            placeholder="Search By Rate Code"
          />
          <button className="btn btn-success" type="button">
            <i className="bi bi-search"></i>
          </button>
        </div>      

        <div className="table-responsive">
          <table className="table table-striped master_table">
            <thead>
              <tr>
                <th scope="col">S No.</th>
                <th scope="col">Rate Code</th>
                <th scope="col">Application Type</th>
                <th scope="col">Pipeline Type</th>
                <th scope="col">Is Regularization</th>
                <th scope="col">Is Holding</th>
                <th scope="col">BPL/APL</th>
                <th scope="col">Application Fee</th>
                <th scope="col">Regularization Fee</th>
                <th scope="col">Effected Date</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>RamBabu updated</td>
                <td>new23</td>
                <td>home</td>
                <td>No</td>
                <td>No</td>
                <td>APL</td>
                <td>0</td>
                <td>0</td>
                <td>13/09/2024</td>
                <td>
                  <Button type="btn-info" buttonName="Update" />
                </td>
                <td>
                  <Button type="btn-danger" buttonName="Delete" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Arjun updated</td>
                <td>new232</td>
                <td>Office</td>
                <td>Yes</td>
                <td>No</td>
                <td>BPL</td>
                <td>0</td>
                <td>0</td>
                <td>13/09/2024</td>
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

export default FeeMaster; 

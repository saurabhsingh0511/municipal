import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";
import axios from "axios";
import siteConfig from "../../../siteConfig";

const AdditionalFee = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [additionalFee, setAdditionalFee] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(additionalFee);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed 
  });
  };

  const fetchAdditionalFee = async () => {
     try {
      const response = await axios.get(`${siteConfig.API_BASE_URL}/${siteConfig.GET_ADDITIONAL_FEE_BY_MUNIID}`);
      //Filtered pipeline types
      const filteredAdditionalFee = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setAdditionalFee(filteredAdditionalFee);
      console.log("Filtered Additional Fee: ", filteredAdditionalFee);
      console.log("Additional Fee: ", response.data);
     } catch (error) {
      console.log("Failed to fetch data: ", error);
     }
  };

  useEffect(() => {
    fetchAdditionalFee();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = additionalFee.filter((data) =>
      data.feeHeadName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : additionalFee;

  return (
    <>
    <HomeSection toggleSidebar={toggleSidebar} 
    html={
      <div className="container-fluid">
      <h1 className="heading_h1">Additional Fee List</h1>
      <div className="text-start mb-2">
          <Link to="/create-additional-fee">
            <Button
              type="btn-success"
              buttonName="Add New Additional Fee List"
              bootIcon={<i class="bi bi-plus-lg"></i>}
            />
          </Link>
        </div>
      <div className="border_box">
        <div className="input-group mb-3 w-50 search_input">
          <input
            type="text"
            className="form-control"
            placeholder="Search By Fee Head Name"
            value={searchTerm}
            onChange={(e) => handleSearch(e)}
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
                <th scope="col">Fee Head Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Effected Date</th>
                <th scope="col">Is Active</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {dataToDisplay.length > 0 ? (
                <>
                  {Array.isArray(additionalFee) && dataToDisplay.map((fee, index) => {
                    return (
                      <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{fee.feeHeadName}</td>
                      <td>{fee.amount}</td>
                      <td>{fee.effectedDate}</td>
                      <td>{fee.active ? 'Yes' : 'No'}</td>
                      <td>
                        <Button type="btn-info" buttonName="Update" />
                      </td>
                      <td>
                        <Button type="btn-danger" buttonName="Delete" />
                      </td>
                    </tr>
                    )
                  })}
                </>
              ) : (
                <p>No results found</p>
              )}
             
              <tr>
                <td>2</td>
                <td>fees</td>
                <td>550</td>
                <td>13/09/2024</td>
                <td>No</td>
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

export default AdditionalFee; 

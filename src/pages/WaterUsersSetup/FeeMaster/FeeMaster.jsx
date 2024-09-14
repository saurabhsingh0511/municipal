import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";
import axios from "axios";
import siteConfig from "../../../siteConfig";

const FeeMaster = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [fees, setFees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(fees);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };

  const fetchFees = async () => {
    try {
      const response = await axios.get(
        `${siteConfig.API_BASE_URL}/${siteConfig.GET_FEE_BY_MUNIID}`
      );
      const filteredFees = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setFees(filteredFees);
      console.log("Filtered Fees: ", filteredFees);
      console.log("Fees: ", response.data);
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  };

  useEffect(() => {
    fetchFees();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = fees.filter((data) =>
      data.rateCode.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : fees;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
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
                    {dataToDisplay.length > 0 ? (
                       <>
                         {Array.isArray(fees) && dataToDisplay.map((fee, index) => {
                          return (
                            <tr key={index}> 
                      <td>{index + 1}</td>
                      <td>{fee.rateCode}</td>
                      <td>{fee.applicationTypeList.applicationTypeName}</td>
                      <td>{fee.pipelineTypeList.pipelineTypeName}</td>
                      <td>{fee.isRegularization ? 'Yes' : 'No'}</td>
                      <td>{fee.isHolding ? 'Yes' : 'No'}</td>
                      <td>{fee.bplAplType ? 'BPL' : 'APL'}</td>
                      <td>{fee.applicationFee}</td>
                      <td>{fee.regularizationFee}</td>
                      <td>{fee.effectedDate}</td>
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

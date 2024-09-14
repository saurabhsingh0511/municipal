import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";
import siteConfig from "../../../siteConfig";
import axios from "axios";

const CalculationTypeList = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [calculationtype, setCalculationType] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(calculationtype);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };

  const fetchCalculationType = async () => {
    try {
      const response = await axios.get(
        `${siteConfig.API_BASE_URL}/${siteConfig.FETCH_ALL_CALCULATION_TYPE}`
      );
      const filteredCalculationType = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setCalculationType(filteredCalculationType);
      console.log("Filtered calculation Type: ", filteredCalculationType);
      console.log("Calculation Type: ", response.data);
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  };

  useEffect(() => {
    fetchCalculationType();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = calculationtype.filter((data) =>
      data.calculationTypeName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : calculationtype;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid">
            <h1 className="heading_h1">Master Calculation Type List</h1>
            <div className="text-start mb-2">
              <Link to="/create-calculation-type">
                <Button
                  type="btn-success"
                  buttonName="Add New Calculation Type"
                  bootIcon={<i class="bi bi-plus-lg"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <div className="input-group mb-3 search_input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search By Calculation Type Name or Municipale ID"
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
                      <th scope="col">Calculation Type Name</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataToDisplay.length > 0 ? (
                      <>
                        {Array.isArray(calculationtype) &&
                          dataToDisplay.map((calcType, index) => {
                            return (
                              <tr key={index}>
                                <td>{calcType.calculationTypeName}</td>
                                <td>
                                  <Button type="btn-info" buttonName="Update" />
                                </td>
                                <td>
                                  <Button
                                    type="btn-danger"
                                    buttonName="Delete"
                                  />
                                </td>
                              </tr>
                            );
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

export default CalculationTypeList;

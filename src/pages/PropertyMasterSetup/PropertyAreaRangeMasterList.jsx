import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";
import axios from "axios";
import siteConfig from "../../siteConfig";

const PropertyAreaRangeMasterList = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [propertyAreaRange, setPropertyAreaRange] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(propertyAreaRange);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };

  const fetchPropertyAreaRange = async () => {
    try {
      const response = await axios.get(
        `${siteConfig.BASE_URL}/${siteConfig.GET_ALL_PROPERTY_AREA_RANGE_MASTER}`
      );
      //filtered with suspended status 0 (active)
      const filteredRange = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setPropertyAreaRange(filteredRange);
      console.log("Area Range: ", filteredRange);
    } catch (error) {
      console.log("Failed to fetch data...", error);
    }
  };

  useEffect(() => {
    fetchPropertyAreaRange();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = propertyAreaRange.filter((data) =>
      data.propertyAgeRangeName
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : propertyAreaRange;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
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
                      <th scope="col">Area Range Value</th>
                      <th scope="col">Financial Year</th>
                      <th scope="col">Active</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataToDisplay.length > 0 ? (
                      <>
                        {Array.isArray(propertyAreaRange) &&
                          dataToDisplay.map((areaRange, index) => {
                            return (
                              <tr key={index}>
                                <td>{areaRange.propertyAgeRangeName}</td>
                                <td>{areaRange.financialYearMaster}</td>
                                <td>{areaRange.active ? "Yes" : "No"}</td>
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

export default PropertyAreaRangeMasterList;

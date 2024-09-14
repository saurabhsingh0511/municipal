import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";
import axios from "axios";
import siteConfig from "../../../siteConfig";

const BuildUpArea = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [buildupArea, setBuildupArea] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(buildupArea);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };

  const fetchBuildupArea = async () => {
    try {
      const response = await axios.get(
        `${siteConfig.API_BASE_URL}/${siteConfig.GET_BUILDUP_AREA_BY_MUNIID}`
      );
      const filteredBuildupArea = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setBuildupArea(filteredBuildupArea);
      console.log("Filtered Buildup Area: ", filteredBuildupArea);
      console.log("Buildup Area: ", response.data);
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  };

  useEffect(() => {
    fetchBuildupArea();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = buildupArea.filter((data) =>
      data.buildupArea.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : buildupArea;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid">
            <h1 className="heading_h1">Buildup Area Master List</h1>
            <div className="text-start mb-2">
              <Link to="/create-buildup-area">
                <Button
                  type="btn-success"
                  buttonName="Add New Buildup Area"
                  bootIcon={<i class="bi bi-plus-lg"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <div className="input-group mb-3 w-50 search_input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search By Buildup Area"
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
                      <th scope="col">Buildup Area</th>
                      <th scope="col">Municipal ID</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataToDisplay.length > 0 ? (
                      <>
                        {Array.isArray(buildupArea) &&
                          dataToDisplay.map((area, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{area.buildupArea}</td>
                                <td>{area.municipalId}</td>
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

export default BuildUpArea;

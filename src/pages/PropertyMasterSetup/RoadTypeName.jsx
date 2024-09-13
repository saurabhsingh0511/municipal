import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";
import axios from "axios";
import siteConfig from "../../siteConfig";

const RoadTypeName = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [roadTypes, setRoadTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(roadTypes);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed, // toggle the current state
    });
  };

  const fetchRoadType = async () => {
    try {
      const response = await axios.get(
        `${siteConfig.BASE_URL}/${siteConfig.GET_ALL_ROAD_TYPE}`
      );
      setRoadTypes(response.data);
      console.log("Road Data: ", response.data);
    } catch (error) {
      console.log("Faitched data failed: ", error);
    }
  };

  useEffect(() => {
    fetchRoadType();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = roadTypes.filter(
      (data) =>
        data.roadTypeName.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.municipalMasterId.toString().includes(searchValue.toLowerCase()) // Convert number to string
    );

    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : roadTypes;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid">
            <h1 className="heading_h1">Master Road Type List</h1>
            <div className="text-start mb-2">
              <Link to="/create-road-type">
                <Button
                  type="btn-success"
                  buttonName="Add New Road Type"
                  bootIcon={<i class="bi bi-plus-lg"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <div className="input-group mb-3 search_input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Municipal Type ID or Road Type ID"
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
                      <th scope="col">Road Type Name</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {dataToDisplay.length > 0 ? (
                      <>
                        {Array.isArray(roadTypes) &&
                      dataToDisplay.map((road, index) => {
                        return (
                          <tr key={index}>
                            <td>{road.roadTypeName}</td>
                            <td>
                              <Button type="btn-info" buttonName="Update" />
                            </td>
                            <td>
                              <Button type="btn-danger" buttonName="Delete" />
                            </td>
                          </tr>
                        );
                      })}
                      </>
                    ) : (
                      <p>No results found</p>
                    )
                  }
                    
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

export default RoadTypeName;

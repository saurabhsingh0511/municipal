import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";
import axios from "axios";
import siteConfig from "../../siteConfig";

const PropertyUseTypeMaster = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [propertyUseType, setPropertyUseType] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(propertyUseType);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };

  const fetchPropertyUseType = async () => {
    try {
      const response = await axios.get(
        `${siteConfig.BASE_URL}/${siteConfig.PROPERTY_USE_TYPE_BY_MUNIID}`
      );
      //filtered with suspended status 0 (active)
      const filteredUseType = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setPropertyUseType(filteredUseType);
      console.log("Property Use type: ", filteredUseType);
    } catch (error) {
      console.log("Failed to fetch data...", error);
    }
  };

  useEffect(() => {
    fetchPropertyUseType();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = propertyUseType.filter((data) =>
      data.categoryUsesTypeName
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : propertyUseType;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid">
            <h1 className="heading_h1">Property Use Type List</h1>
            <div className="text-start mb-2">
              <Link to="/create-property-use-type-master">
                <Button
                  type="btn-success"
                  buttonName="Add New Property Use Type"
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
                      <th scope="col">S. No.</th>
                      <th scope="col">Property Use Type Name</th>
                      <th scope="col">Municipal ID</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataToDisplay.length > 0 ? (
                      <>
                        {Array.isArray(propertyUseType) &&
                          dataToDisplay.map((propertyUse, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{propertyUse.categoryUsesTypeName}</td>
                                <td>{propertyUse.municipalId}</td>
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

export default PropertyUseTypeMaster;

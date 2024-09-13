import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";
import axios from "axios";
import siteConfig from "../../siteConfig";

const PropertyAssessmentTypeMaster = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [propertyAssesssment, setPropertyAssessment] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(propertyAssesssment);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };

  const fetchPropertyAssessment = async () => {
    try {
      const response = await axios.get(
        `${siteConfig.BASE_URL}/${siteConfig.GET_ACTIVE_PROPERTY_ASSESSMENT_TYPE}`
      );
      //filtered with suspended status 0 (active)
      const filteredAssessment = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setPropertyAssessment(filteredAssessment);
      console.log("Property Assessment: ", filteredAssessment);
    } catch (error) {
      console.log("Failed to fetch data...", error);
    }
  };

  useEffect(() => {
    fetchPropertyAssessment();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = propertyAssesssment.filter((data) =>
      data.propertyAssismentTypeName
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : propertyAssesssment;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
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
                      <th scope="col">Property Assessment Type Name</th>
                      <th scope="col">Municipal ID</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataToDisplay.length > 0 ? (
                      <>
                        {Array.isArray(propertyAssesssment) &&
                          dataToDisplay.map((assessment, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{assessment.propertyAssismentTypeName}</td>
                                <td>{assessment.municipalId}</td>
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

export default PropertyAssessmentTypeMaster;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";
import axios from "axios";
import siteConfig from "../../../siteConfig";

const ApplicationTypeMaster = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [applicationType, setApplicationType] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(applicationType);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };

  const fetchApplications = async () => {
    try {
      const response = await axios.get(`${siteConfig.API_BASE_URL}/${siteConfig.FETCH_ALL_APPLICATIONS_TYPE_WATER}`);
       //filtered with suspended status 0 (active)
       const filteredApplications = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setApplicationType(filteredApplications);
      console.log("Active Applications: ", filteredApplications)
      console.log("Applications: ", response.data)
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  }

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = applicationType.filter((data) =>
      data.applicationTypeName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : applicationType;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid">
            <h1 className="heading_h1">Master Application List</h1>
            <div className="text-start mb-2">
              <Link to="/create-application-type">
                <Button
                  type="btn-success"
                  buttonName="Add New Application Type"
                  bootIcon={<i class="bi bi-plus-lg"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <div className="input-group mb-3 search_input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search By Application Type Name or ID"
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
                      <th scope="col">Application ID</th>
                      <th scope="col">Application Type Name</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataToDisplay.length > 0 ? (
                       <>
                         {Array.isArray(applicationType) && dataToDisplay.map((application, index) => {
                          return (
                            <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{application.id}</td>
                            <td>{application.applicationTypeName}</td>
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

export default ApplicationTypeMaster;

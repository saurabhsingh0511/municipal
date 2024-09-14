import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";
import siteConfig from "../../../siteConfig";
import axios from "axios";

const ApplicationCategoryMaster = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [appCategories, setAppCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(appCategories);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };

  const fetchAppCategories = async () => {
    try {
      const response = await axios.get(
        `${siteConfig.API_BASE_URL}/${siteConfig.FETCH_ALL_APPLICATIONS}`
      );
      //filtered with suspended status 0 (active)
      const filteredAppCategory = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setAppCategories(filteredAppCategory);
      console.log("Filtered Application cat: ", filteredAppCategory);
      console.log("Application cat: ", response.data);
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  };

  useEffect(() => {
    fetchAppCategories();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = appCategories.filter((data) =>
      data.applicationCategoryName
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : appCategories;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid">
            <h1 className="heading_h1">Master Application Category List</h1>
            <div className="text-start mb-2">
              <Link to="/create-application">
                <Button
                  type="btn-success"
                  buttonName="Add New Application Category"
                  bootIcon={<i class="bi bi-plus-lg"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <div className="input-group mb-3 search_input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search By Application Category Name"
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
                      <th scope="col">Application Category Name</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataToDisplay.length > 0 ? (
                      <>
                        {Array.isArray(appCategories) &&
                          dataToDisplay.map((application, index) => {
                            return (
                              <tr key={index}>
                                <td>{application.applicationCategoryName}</td>
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

                    <tr>
                      <td>APL</td>
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

export default ApplicationCategoryMaster;

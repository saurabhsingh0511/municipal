import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";
import axios from "axios";
import siteConfig from "../../../siteConfig";

const ConsumerCategory = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [consumerCat, setConsumerCat] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(consumerCat);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };

  const fetchConsumerCat = async () => {
    try {
      const response = await axios.get(
        `${siteConfig.API_BASE_URL}/${siteConfig.GET_ALL_CONSUMER_CATEGORY}`
      );
      const filteredConsumerCat = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setConsumerCat(filteredConsumerCat);
      console.log("Filtered consumer Type: ", filteredConsumerCat);
      console.log("consumer Type: ", response.data);
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  };

  useEffect(() => {
    fetchConsumerCat();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = consumerCat.filter((data) =>
      data.applicationCategoryName
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : consumerCat;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid">
            <h1 className="heading_h1">Consumer Category Master List</h1>
            <div className="text-start mb-2">
              <Link to="/create-consumer-category">
                <Button
                  type="btn-success"
                  buttonName="Add New Consumer Category Details"
                  bootIcon={<i class="bi bi-plus-lg"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <div className="input-group mb-3 w-50 search_input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search By Consumer Category Name"
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
                      <th scope="col">Consumer Category Name</th>
                      <th scope="col">Municipal ID</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataToDisplay.length > 0 ? (
                      <>
                        {Array.isArray(consumerCat) &&
                          dataToDisplay.map((consumer, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{consumer.applicationCategoryName}</td>
                                <td>{consumer.municipalId}</td>
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

export default ConsumerCategory;

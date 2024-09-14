import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";
import axios from "axios";
import siteConfig from "../../../siteConfig";

const ConnectionType = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [ConnectionType, setConnectionType] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(ConnectionType);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };

  const fetchConnectionType = async () => {
    try {
      const response = await axios.get(
        `${siteConfig.API_BASE_URL}/${siteConfig.FETCH_ALL_CONNECTION_TYPE}`
      );
      const filteredConnectionType = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setConnectionType(filteredConnectionType);
      console.log("Filtered connection Type: ", filteredConnectionType);
      console.log("connection Type: ", response.data);
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  };

  useEffect(() => {
    fetchConnectionType();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = ConnectionType.filter((data) =>
      data.connectionTypeName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : ConnectionType;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid">
            <h1 className="heading_h1">Master Connection List</h1>
            <div className="text-start mb-2">
              <Link to="/create-connection">
                <Button
                  type="btn-success"
                  buttonName="Add New Connection"
                  bootIcon={<i class="bi bi-plus-lg"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <div className="input-group mb-3 w-50 search_input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search By Connection Name"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e)}
                />
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder="Search By Municipale ID"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e)}
                /> */}
                <button className="btn btn-success" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>

              <div className="table-responsive">
                <table className="table table-striped master_table">
                  <thead>
                    <tr>
                      <th scope="col">Connection Type name</th>
                      <th scope="col">Municipal ID</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataToDisplay.length > 0 ? (
                      <>
                        {Array.isArray(ConnectionType) &&
                          dataToDisplay.map((connection, index) => {
                            return (
                              <tr key={index}>
                                <td>{connection.connectionTypeName}</td>
                                <td>{connection.municipalId}</td>
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

export default ConnectionType;

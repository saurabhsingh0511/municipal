import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";
import axios from "axios";
import siteConfig from "../../siteConfig";

const WardMaster = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [wards, setWards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(wards);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };

  const fetchWards = async () => {
    try {
      const response = await axios.get(
        `${siteConfig.BASE_URL}/${siteConfig.GET_WARD_BY_MUNICIPALID}`
      );
      //filtered with suspended status 0 (active)
      const filteredData = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setWards(filteredData);
      console.log("Wards: ", filteredData);
    } catch (error) {
      console.log("Failed to fetch data...", error);
    }
  };

  useEffect(() => {
    fetchWards();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = wards.filter(
      (data) =>
        data.wardNo.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.zone.zoneName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : wards;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid">
            <h1 className="heading_h1">Ward List</h1>
            <div className="text-start mb-2">
              <Link to="/create-waard-details">
                <Button
                  type="btn-success"
                  buttonName="Add New Ward Details"
                  bootIcon={<i class="bi bi-plus-lg"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <div className="input-group mb-3 search_input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Ward"
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
                      <th scope="col">Ward Number</th>
                      <th scope="col">Zone</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataToDisplay.length > 0 ? (
                      <>
                        {Array.isArray(wards) &&
                          dataToDisplay.map((ward, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ward.wardNo}</td>
                                <td>{ward.zone.zoneName}</td>
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

export default WardMaster;

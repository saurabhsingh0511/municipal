import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";
import axios from "axios";
import siteConfig from "../../../siteConfig";

const UnitMaster = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [units, setUnits] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(units);


  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };

  const fetchUnits = async () => {
    try {
      const response = await axios.get(`${siteConfig.API_BASE_URL}/${siteConfig.UNIT_MASTER_BY_MUNIID}`);
      //filtered with suspended status 0 (active)
      const filteredUnits = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setUnits(filteredUnits);
      console.log("Filtered Units: ", filteredUnits);
      console.log("Units: ", response.data);
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  }

  useEffect(() => {
    fetchUnits();
  }, [])

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = units.filter((data) =>
      data.unitName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : units;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid">
            <h1 className="heading_h1">Unit Master List</h1>
            <div className="text-start mb-2">
              <Link to="/create-new-unit-master">
                <Button
                  type="btn-success"
                  buttonName="Add New Unit Details"
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
                      <th scope="col">Unit Name</th>
                      <th scope="col">Abbreviation</th>
                      <th scope="col">Description</th>
                      <th scope="col">Conversion Factor</th>
                      <th scope="col">Municipal Id</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataToDisplay.length > 0 ? (
                      <>
                       {Array.isArray(units) && dataToDisplay.map((unit, index) => {
                        return (
                          <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{unit.unitName}</td>
                          <td>{unit.abbreviation}</td>
                          <td>{unit.description}</td>
                          <td>{unit.conversionFactorToBaseUnit}</td>
                          <td>{unit.municipalId}</td>
                          <td>
                            <Button type="btn-info" buttonName="Update" />
                          </td>
                          <td>
                            <Button type="btn-danger" buttonName="Suspend" />
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

export default UnitMaster;

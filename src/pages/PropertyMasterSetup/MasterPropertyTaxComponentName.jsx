import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";
import axios from "axios";
import siteConfig from "../../siteConfig";

const MasterPropertyTaxComponentName = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [componentName, setComponentName] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(componentName);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed // toggle the current state
  });
  };

  const fetchComponent = async () => {
      try {
        const response = await axios.get(`${siteConfig.BASE_URL}/${siteConfig.GET_ALL_PROPERTY_TAX_COMPONENT_NAME_MASTER}`)
        setComponentName(response.data)
        console.log("component Name: ", response.data)
      } catch (error) {
        console.log("Failed to fetch Data", error)
      }
  }

  useEffect(()=>{
    fetchComponent();
  }, [])

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = componentName.filter((data) =>
      data.componentName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : componentName;

  return (
    <>
    <HomeSection toggleSidebar={toggleSidebar} 
    html={
      <div className="container-fluid">
      <h1 className="heading_h1">Master Property Tax Component Name List</h1>
      <div className="text-start mb-2">
          <Link to="/form-property-tax-component-name">
            <Button
              type="btn-success"
              buttonName="Add New Property Tax Component Name"
              bootIcon={<i class="bi bi-plus-lg"></i>}
            />
          </Link>
        </div>
      <div className="border_box">
        <div className="input-group mb-3 search_input">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Property Tax Component Name"
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
                <th scope="col">Component Name</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {dataToDisplay.length > 0 ? (
                <>
                  {Array.isArray(componentName) && componentName.map((component, index)=> {
                    return (
                      <tr key={index}>
                <td>{component.componentName}</td>
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

export default MasterPropertyTaxComponentName;

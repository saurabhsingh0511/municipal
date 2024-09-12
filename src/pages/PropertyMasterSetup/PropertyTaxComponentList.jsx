import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";
import axios from "axios";
import siteConfig from "../../siteConfig";

const PropertyTaxComponentList = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed, // toggle the current state
    });
  };

  const [propertyTaxComponent, setPropertyTaxComponent] = useState([]);

  const fetchPropertyTaxComponent = async () => {
    try {
      const response = await axios.get(
        `${siteConfig.BASE_URL}/${siteConfig.GET_ALL_PROPERTY_TAX_COMPONENT}`
      );
      setPropertyTaxComponent(response.data);
      console.log("fffffffff: ", response.data);
    } catch (error) {
      console.log("Failed to fetch Data", error);
    }
  };

  useEffect(() => {
    fetchPropertyTaxComponent();
  }, []);

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid">
            <div className="text-start mb-2">
              <Link to="/create-property-tax-component">
                <Button
                  type="btn-success"
                  buttonName="Add New Property Tax Component"
                  bootIcon={<i class="bi bi-plus-lg"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <div className="input-group mb-3 search_input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Component ID"
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
                      <th scope="col">Rate Value</th>
                      <th scope="col">Financial Year</th>
                      <th scope="col">Effective Date</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(propertyTaxComponent) &&
                      propertyTaxComponent.map((propertyTax, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              {propertyTax.propertyTaxComponent.componentName}
                            </td>
                            <td>{propertyTax.rateValue}</td>
                            <td>{propertyTax.financialYearMaster.fyYear}</td>
                            <td>{propertyTax.effectiveDate}</td>
                            <td>
                              <Button type="btn-info" buttonName="Update" />
                            </td>
                            <td>
                              <Button type="btn-danger" buttonName="Delete" />
                            </td>
                          </tr>
                        );
                      })}
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

export default PropertyTaxComponentList;

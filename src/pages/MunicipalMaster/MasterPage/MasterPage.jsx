import React, { useState } from "react";
import "./MasterPage.css";
import Button from "../../../components/button/Button";
import { Link } from "react-router-dom";
import HomeSection from "../../../components/homesection";
import { useDispatch, useSelector } from "react-redux";

const MasterPage = () => {

  const isClosed = useSelector((state) => state.myReducer.isClosed);

  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed // toggle the current state
  });
  };
  const [formData, setFormData] = useState({
    municipalCode: '',
    municipalName: '',
    city: '',
    state: '',
    addressLine1: '',
    addressLine2: '',
    commissionerName: '',
    contactNumber: '',
    tollFreeNumber: '',
    logoFile: null,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
    setFormData({
      ...formData,
      logoFile: file
    });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
       const dataToSend = new FormData();
      dataToSend.append("muniCode", formData.municipalCode);
      dataToSend.append("muniName", formData.municipalName);
      dataToSend.append("city", formData.city);
      dataToSend.append("state", formData.state);
      dataToSend.append("addressLine1", formData.addressLine1);
      dataToSend.append("addressLine2", formData.addressLine2);
      dataToSend.append("commissionerName", formData.commissionerName);
      dataToSend.append("contactNumber", formData.contactNumber);
      dataToSend.append("tollFreeNumber", formData.tollFreeNumber);
      dataToSend.append("logoFile", formData.logoFile);
    console.log(formData,"iiiiiiiiiiiiiiiiiiiiiiiiiiii")
      
  }

  return (
    <>
    <HomeSection toggleSidebar={toggleSidebar} 
    html={
      <div className="container-fluid form_container">
      <div className="text-start mb-2">
        <Link to="/municipal-details-list">
          <Button
            type="btn-success"
            buttonName="Back to Municipal Details List"
            bootIcon={<i class="bi bi-list"></i>}
          />
        </Link>
      </div>
      <div className="border_box">
        <form>
          <div className="row">
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="municipalCode">Municipal Code:</label>
                <input
                  type="text"
                  id="municipalCode"
                  name="municipalCode"
                  value={formData.municipalCode}
                  className="form-control"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="municipalName">Municipal Name:</label>
                <input
                  type="text"
                  id="municipalName"
                  name="municipalName"
                  value={formData.municipalName}
                  className="form-control"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  className="form-control"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  className="form-control"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="form-group">
                <label htmlFor="addressLine1">Address Line 1:</label>
                <input
                  type="text"
                  id="addressLine1"
                  name="addressLine1"
                  value={formData.addressLine1}
                  className="form-control"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="form-group">
                <label htmlFor="addressLine2">Address Line 2:</label>
                <input
                  type="text"
                  id="addressLine2"
                  name="addressLine2"
                  value={formData.addressLine2}
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="commissionerName">Commissioner Name:</label>
                <input
                  type="text"
                  id="commissionerName"
                  name="commissionerName"
                  value={formData.commissionerName}
                  className="form-control"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number:</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  className="form-control"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="tollFreeNumber">Toll-Free Number:</label>
                <input
                  type="tel"
                  id="tollFreeNumber"
                  name="tollFreeNumber"
                  value={formData.tollFreeNumber}
                  className="form-control"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="logoFile">Logo File:</label>
                <input
                  type="file"
                  id="logoFile"
                  name="logoFile"
                  value={formData.logoFile}
                  className="form-control-file"
                  onChange={handleFileChange}
                  accept="image/*"
                />{console.log("file", formData.logoFile)}
              </div>
            </div>
            <div className="col-12 text-center my-3 d-flex justify-content-center gap-4">
              <Button type="btn-primary" buttonName="Save" onClick={handleSubmit} ariaLabel="Save the form" htmlType="button" />
              <Button type="btn-danger" buttonName="Reset"  ariaLabel="Reset the form" htmlType="button" />
            </div>
          </div>
        </form>
      </div>
    </div>
    }
    />
    </>
  );
};

export default MasterPage;

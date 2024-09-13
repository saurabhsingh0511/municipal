import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import { Link, useLocation } from "react-router-dom";
import HomeSection from "../../components/homesection";
import { useDispatch, useSelector } from "react-redux";
import siteConfig from "../../siteConfig";
import axios from "axios";

const MasterPage = () => {

  const isClosed = useSelector((state) => state.myReducer.isClosed);

  const dispatch = useDispatch();
  const location = useLocation();

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
    commisName: '',
    contactNumber: '',
    tollFreeNumber: '',
    logoFile: "",
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


  const postMasterFormData = async (dataToPost) => {
    try {
      const response = await axios.post(
        `${siteConfig.BASE_URL}/${siteConfig.CREATE_MASTER_FORM}`, 
        dataToPost
      );
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Error while posting data:", error);
    }
  };


  const updateMasterFormData = async (dataToPost) => {
    try {
      const response = await axios.post(
        `${siteConfig.BASE_URL}/${siteConfig.UPDATE_RECORD}`, 
        dataToPost
      );
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Error while posting data:", error);
    }
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
    dataToSend.append("commisName", formData.commisName);
    dataToSend.append("contactNumber", formData.contactNumber);
    dataToSend.append("tollFreeNumber", formData.tollFreeNumber);
    dataToSend.append("logoFile", formData.logoFile);
    if(municipalData){
      updateMasterFormData(dataToSend);
    }else{
      postMasterFormData(dataToSend);
    }
  }

  const { municipalData } = location?.state || {};

  useEffect(() => {
    if (municipalData) {
      setFormData({
        ...formData,
        municipalCode: municipalData?.muniCode || '',
        municipalName: municipalData?.muniName || '',
        city: municipalData?.city || '',
        state: municipalData?.state || '',
        addressLine1: municipalData?.addressLine1 || '',
        addressLine2: municipalData?.addressLine2 || '',
        commisName: municipalData?.commisName || '',
        contactNumber: municipalData?.contactNumber || '',
        tollFreeNumber: municipalData?.tollFreeNumber || '',
        logoFile: municipalData?.logoFile || '', 
      });
    }
  }, [municipalData]);

  return (
    <>
      <HomeSection toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid form_container">
            <h1 className="heading_h1">Municipal Master</h1>
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
                    <div className="form-group text-start">
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
                    <div className="form-group text-start">
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
                    <div className="form-group text-start">
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
                    <div className="form-group text-start">
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
                    <div className="form-group text-start">
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
                    <div className="form-group text-start">
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
                    <div className="form-group text-start">
                      <label htmlFor="commisName">Commissioner Name:</label>
                      <input
                        type="text"
                        id="commisName"
                        name="commisName"
                        value={formData.commisName}
                        className="form-control"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-group text-start">
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
                    <div className="form-group text-start">
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
                    <div className="form-group text-start">
                      <label htmlFor="logoFile" className="m-4">Logo File:</label>
                      <input
                        type="file"
                        id="logoFile"
                        name="logoFile"
                        // value={formData.logoFile}
                        className="form-control-file"
                        onChange={(e)=> handleFileChange(e)}
                        accept="image/*"
                      />
                    </div>
                  </div>
                  <div className="col-12 text-center my-3 d-flex justify-content-center gap-4">
                    <Button type="btn-primary" buttonName="Save" onClick={handleSubmit} ariaLabel="Save the form" htmlType="button" />
                    <Button type="btn-danger" buttonName="Reset" ariaLabel="Reset the form" htmlType="button" />
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

import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";

const CreatePropertyAssessmentType = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed 
  });
  };
  return (
    <>
    <HomeSection toggleSidebar={toggleSidebar} 
    html={
      <div className="container-fluid form_container">
      <h1 className="heading_h1">Create New Property Assessment Type</h1>
      <div className="text-start mb-2">
        <Link to="/property-assessment-type-master">
          <Button
            type="btn-success"
            buttonName="Back to Property Assessment Type Details"
            bootIcon={<i class="bi bi-list"></i>}
          />
        </Link>
      </div>
      <div className="border_box">
        <form>
          <div className="row justify-content-center">
            <div className="col-md-6 ">
              <div className="form-group">
                <label htmlFor="propertyAssessmentTypeName">Property Assessment Type Name:</label>
                <input
                  type="text"
                  id="propertyAssessmentTypeName"
                  name="propertyAssessmentTypeName"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-12 text-center my-3 d-flex justify-content-center gap-4">
              <Button type="btn-success" buttonName="Submit" />
              <Button type="btn-warning" buttonName="Reset" />
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

export default CreatePropertyAssessmentType;

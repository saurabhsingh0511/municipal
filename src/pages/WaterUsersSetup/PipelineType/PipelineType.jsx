import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";
import axios from "axios";
import siteConfig from "../../../siteConfig";

const PipelineType = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [pipelineType, setPipelineType] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(pipelineType);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };

  const fetchPipelineType = async () => {
    try {
      const response = await axios.get(
        `${siteConfig.API_BASE_URL}/${siteConfig.PIPELINE_TYPE_BY_MUNIID}`
      );
      //Filtered pipeline types
      const filteredPipelineType = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setPipelineType(filteredPipelineType);
      console.log("Filtered Pipeline Type: ", filteredPipelineType);
      console.log("Pipeline Type: ", response.data);
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  };

  useEffect(() => {
    fetchPipelineType();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = pipelineType.filter((data) =>
      data.pipelineTypeName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : pipelineType;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid">
            <h1 className="heading_h1">Master Pipeline Type List</h1>
            <div className="text-start mb-2">
              <Link to="/create-pipeline-type">
                <Button
                  type="btn-success"
                  buttonName="Add New Pipeline Type"
                  bootIcon={<i class="bi bi-plus-lg"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <div className="input-group mb-3 search_input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search By Pipeline Type Name"
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
                      <th scope="col">Pipeline Type Name</th>
                      <th scope="col">Min Value</th>
                      <th scope="col">Max Value</th>
                      <th scope="col">Build Up Area</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataToDisplay.length > 0 ? (
                      <>
                        {Array.isArray(pipelineType) &&
                          dataToDisplay.map((pipeline, index) => {
                            return (
                              <tr key={index}>
                                <td>{pipeline.pipelineTypeName}</td>
                                <td>{pipeline.minValue}</td>
                                <td>{pipeline.maxValue}</td>
                                <td>
                                  {pipeline.buildupAreaMastersId.buildupArea}
                                </td>
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

export default PipelineType;

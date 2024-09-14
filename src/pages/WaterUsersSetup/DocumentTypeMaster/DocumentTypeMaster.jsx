import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";
import axios from "axios";
import siteConfig from "../../../siteConfig";

const DocumentTypeMaster = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [documentsType, setDocumentsType] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(documentsType);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };

  const fetchDocumentsType = async () => {
    try {
      const response = await axios.get(
        `${siteConfig.API_BASE_URL}/${siteConfig.FETCH_ALL_DOCUMENT_TYPE}`
      );
      const filteredDocumentsType = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setDocumentsType(filteredDocumentsType);
      console.log("Filtered Documents Type: ", filteredDocumentsType);
      console.log("Documents Type: ", response.data);
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  };

  useEffect(() => {
    fetchDocumentsType();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = documentsType.filter((data) =>
      data.documentTypeName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : documentsType;

  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid">
            <h1 className="heading_h1">Master Document Type List</h1>
            <div className="text-start mb-2">
              <Link to="/create-document-type">
                <Button
                  type="btn-success"
                  buttonName="Add New Document Type"
                  bootIcon={<i class="bi bi-plus-lg"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <div className="input-group mb-3 search_input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search By Document Type Name"
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
                      <th scope="col">Document Type Name</th>
                      <th scope="col">Application Type Name</th>
                      <th scope="col">Document Group Name</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataToDisplay.length > 0 ? (
                      <>
                        {Array.isArray(documentsType) &&
                          dataToDisplay.map((docType, index) => {
                            return (
                              <tr key={index}>
                                <td>{docType.documentTypeName}</td>
                                <td>
                                  {
                                    docType.applicationTypeId
                                      .applicationTypeName
                                  }
                                </td>
                                <td>{docType.documentGroupID.documentGroup}</td>
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

export default DocumentTypeMaster;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";
import axios from "axios";
import siteConfig from "../../../siteConfig";

const DocumentGroupMaster = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [documentGroup, setDocumentGroup] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(documentGroup);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed 
  });
  };

  const fetchDocuments = async () => {
    try {
      const response = await axios.get(`${siteConfig.API_BASE_URL}/${siteConfig.DOCUMENT_GROUP_BY_MUNIID}`);
      //filtered with suspended status 0 (active)
      const filteredDocuments = response.data.filter(
        (item) => item.suspendedStatus === 0
      );
      setDocumentGroup(filteredDocuments);
      console.log("Filtered Document: ", filteredDocuments);
      console.log("Documents: ", response.data);
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  }
  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = documentGroup.filter((data) =>
      data.documentGroup.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const dataToDisplay = searchTerm ? filteredData : documentGroup;

  return (
    <>
    <HomeSection toggleSidebar={toggleSidebar} 
    html={
      <div className="container-fluid">
      <h1 className="heading_h1">Document Group List</h1>
      <div className="text-start mb-2">
          <Link to="/create-document-group">
            <Button
              type="btn-success"
              buttonName="Add New Document Group"
              bootIcon={<i class="bi bi-plus-lg"></i>}
            />
          </Link>
        </div>
      <div className="border_box">
        <div className="input-group mb-3 search_input">
          <input
            type="text"
            className="form-control"
            placeholder="Search By Document Group Name"
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
                <th scope="col">S No.</th>
                <th scope="col">Document Group Name</th>
                <th scope="col">Municipal Id</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {dataToDisplay.length > 0 ? (
                <>
                {Array.isArray(documentGroup) && dataToDisplay.map((document, index) => {
                  return (
                    <tr key={index}>
                <td>{index + 1}</td>
                <td>{document.documentGroup}</td>
                <td>{document.municipalId}</td>
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

export default DocumentGroupMaster; 

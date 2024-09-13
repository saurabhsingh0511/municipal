import React, { useEffect, useState } from "react";
import '../../css/TableForm.css'
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";
import siteConfig from "../../siteConfig";
import axios from "axios";

const MunicipalDetailsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const [municipalData, setMunicipalData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(municipalData);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed // toggle the current state
    });
  };

  const fetchMasterFormData = async () => {
    const response = await axios.get(`${siteConfig.BASE_URL}/${siteConfig.FETCH_MASTER_FORM}`);
     //filtered with suspended status 0 (active)
     const filteredMunicipal = response.data.filter(
      (item) => item.suspendedStatus === 0
    );
    console.log("iiiiiiiiiiiiiiiiii,", response.data)
    setMunicipalData(filteredMunicipal);
  }

  useEffect(() => {
    fetchMasterFormData();
  }, [])

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const filtered = municipalData.filter((data) =>
      data.commisName.toLowerCase().includes(searchValue.toLowerCase()) ||
      data.muniName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const dataToDisplay = searchTerm ? filteredData : municipalData;

  const handleEdit = (data) =>{
    console.log("edit button clicked",data)
    navigate("/master-page", { 
      state:{ municipalData : data },
    });
  }

  const updateSuspendedStatus = async (id, newStatus) => {
    try {
      const response = await axios.patch(
        `${siteConfig.BASE_URL}/${siteConfig.UPDATE_SUSPENDED_STATUS}/${id}?suspendedStatus=${newStatus}`
      );
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Error while updating suspended status:", error);
    }
  };

  return (
    <>
      <HomeSection toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid">
            <div className="text-start mb-2">
              <Link to="/master-page">
                <Button
                  type="btn-success"
                  buttonName="Add New Municipal"
                  bootIcon={<i class="bi bi-list"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              {/* Search Bar */}
              <div className="input-group mb-3 search_input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Municipal Name or Commissioner Name"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e)}
                />
                {/* <button className="btn btn-success" type="button">
                  <i className="bi bi-search"></i>
                </button> */}
              </div>

              <div className="table-responsive">
                <table className="table table-striped master_table">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Municipal Code</th>
                      <th scope="col">Municipal Name</th>
                      <th scope="col">City</th>
                      <th scope="col">State</th>
                      <th scope="col">Commissioner Name</th>
                      <th scope="col">Contact Number</th>
                      <th scope="col">Toll-Free Number</th>
                      <th scope="col">Logo</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  {dataToDisplay.length > 0 ? (
                    <>
                      {Array.isArray(dataToDisplay) && dataToDisplay.map((data, index) => {
                        return (
                          <tbody key={index}>
                            <tr>
                              <td>{index + 1}</td>
                              <td>{data?.muniCode}</td>
                              <td>{data?.muniName}</td>
                              <td>{data?.city}</td>
                              <td>{data?.state}</td>
                              <td>{data?.commisName}</td>
                              <td>{data?.contactNumber}</td>
                              <td>{data?.tollFreeNumber}</td>
                              <td>
                                <img src={`${siteConfig.BASE_URL}/${siteConfig.LOGO_SRC}/${data?.id}`} alt="logo" width="40" />
                              </td>
                              <td>
                                <Button type="btn-info" buttonName="Update" onClick={()=> handleEdit(data)} />
                              </td>
                              <td>
                                <Button type="btn-danger" buttonName="Delete" onClick={()=> updateSuspendedStatus(data?.id,1)} />
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </>
                  )
                    : (
                      <p>No results found</p>
                    )
                  }
                </table>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default MunicipalDetailsList;

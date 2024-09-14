import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import CreateTradeApplication from "./pages/MunicipalLicenseSetup/TradeApplication/CreateTradeApplication";
import TradeApplication from "./pages/MunicipalLicenseSetup/TradeApplication/TradeApplication";
import MasterPage from "./pages/MunicipalMaster/MasterPage";
import MunicipalDetailsList from "./pages/MunicipalMaster/MunicipalDetailsList";
import CreateOwnershipTypeMaster from "./pages/PropertyMasterSetup/CreateOwnershipTypeMaster";
import CreatePropertyAreaRangeMaster from "./pages/PropertyMasterSetup/CreatePropertyAreaRangeMaster";
import CreatePropertyAssessmentType from "./pages/PropertyMasterSetup/CreatePropertyAssessmentType";
import CreatePropertyTaxCess from "./pages/PropertyMasterSetup/CreatePropertyTaxCessRateList";
import PropertyTaxComponent from "./pages/PropertyMasterSetup/CreatePropertyTaxComponent";
import CreatePropertyTypeMasterForm from "./pages/PropertyMasterSetup/CreatePropertyTypeMasterForm";
import CreatePropertyUseTypeMater from "./pages/PropertyMasterSetup/CreatePropertyUseTypeMater";
import CreateRoadType from "./pages/PropertyMasterSetup/CreateRoadType";
import CreateWardDetails from "./pages/PropertyMasterSetup/CreateWardDetails";
import CreateZoneData from "./pages/PropertyMasterSetup/CreateZoneData";
import FormPropertyTaxComponentName from "./pages/PropertyMasterSetup/FormPropertyTaxComponentName";
import PropertyTaxCessRateList from "./pages/PropertyMasterSetup/MasterPropertyTaxCessRateList";
import MasterPropertyTaxComponentName from "./pages/PropertyMasterSetup/MasterPropertyTaxComponentName";
import OwnershipTypeMaster from "./pages/PropertyMasterSetup/OwnershipTypeMaster";
import PropertyAreaRangeMasterList from "./pages/PropertyMasterSetup/PropertyAreaRangeMasterList";
import PropertyAssessmentTypeMaster from "./pages/PropertyMasterSetup/PropertyAssessmentTypeMaster";
import PropertyTaxComponentList from "./pages/PropertyMasterSetup/PropertyTaxComponentList";
import PropertyTypeMaster from "./pages/PropertyMasterSetup/PropertyTypeMaster";
import PropertyUseTypeMaster from "./pages/PropertyMasterSetup/PropertyUseTypeMaster";
import RoadTypeName from "./pages/PropertyMasterSetup/RoadTypeName";
import WardMaster from "./pages/PropertyMasterSetup/WardMaster";
import ZoneData from "./pages/PropertyMasterSetup/ZoneData";
import AdditionalFee from "./pages/WaterUsersSetup/AdditionalFeeMaster/AdditionalFee";
import CreateAdditionalFee from "./pages/WaterUsersSetup/AdditionalFeeMaster/CreateAdditionalFee";
import ApplicationCategoryMaster from "./pages/WaterUsersSetup/ApplicationCategoryMaster/ApplicationCategoryMaster";
import CreateApplication from "./pages/WaterUsersSetup/ApplicationCategoryMaster/CreateApplication";
import ApplicationTypeMaster from "./pages/WaterUsersSetup/ApplicationTypeMaster/ApplicationTypeMaster";
import CreateApplicationType from "./pages/WaterUsersSetup/ApplicationTypeMaster/CreateApplicationType";
import BuildUpArea from "./pages/WaterUsersSetup/BuildUpAreaMaster/BuildUpArea";
import CreateBuildUpArea from "./pages/WaterUsersSetup/BuildUpAreaMaster/CreateBuildUpArea";
import CalculationTypeList from "./pages/WaterUsersSetup/CalculationTypeMaster/CalculationTypeList";
import CreateCalculationType from "./pages/WaterUsersSetup/CalculationTypeMaster/CreateCalculationType";
import ConnectionType from "./pages/WaterUsersSetup/ConnectionType/ConnectionType";
import CreateConnection from "./pages/WaterUsersSetup/ConnectionType/CreateConnection";
import ConsumerCategory from "./pages/WaterUsersSetup/ConsumerCategoryMaster/ConsumerCategory";
import CreateConsumerCategory from "./pages/WaterUsersSetup/ConsumerCategoryMaster/CreateConsumerCategory";
import CreateNewDocumentGroup from "./pages/WaterUsersSetup/DocumentGroupMaster/CreateNewDocumentGroup";
import DocumentGroupMaster from "./pages/WaterUsersSetup/DocumentGroupMaster/DocumentGroupMaster";
import CreateDocumentType from "./pages/WaterUsersSetup/DocumentTypeMaster/CreateDocumentType";
import DocumentTypeMaster from "./pages/WaterUsersSetup/DocumentTypeMaster/DocumentTypeMaster";
import CreateFeeDetails from "./pages/WaterUsersSetup/FeeMaster/CreateFeeDetails";
import FeeMaster from "./pages/WaterUsersSetup/FeeMaster/FeeMaster";
import CreatePipelineType from "./pages/WaterUsersSetup/PipelineType/CreatePipelineType";
import PipelineType from "./pages/WaterUsersSetup/PipelineType/PipelineType";
import CreateNewUnitMaster from "./pages/WaterUsersSetup/UnitMaster/CreateNewUnitMaster";
import UnitMaster from "./pages/WaterUsersSetup/UnitMaster/UnitMaster";
import CreateWaterPropertyType from "./pages/WaterUsersSetup/WaterPropertyTypeMaster/CreateWaterPropertyType";
import WaterPropertyTypeMaster from "./pages/WaterUsersSetup/WaterPropertyTypeMaster/WaterPropertyTypeMaster";

function App() {
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const isLogin = useSelector((state) => state.myReducer.isLogin);
  const [userLogin, setUserLogin] = useState(false);

  const ROUTES = {
    LOGIN: "/login",
    DASHBOARD: "/dashboard",
    MUNICIPAL_DETAILS_LIST: "/municipal-details-list",
    DEFAULT: "*",
  };

  const renderProtectedRoute = (element) =>
    userLogin ? (
      <div className="App">
        <Sidebar isClosed={isClosed} />
        {element}
      </div>
    ) : (
      <Navigate to={ROUTES.LOGIN} />
    );

  useEffect(() => {
    let userLogin = localStorage.getItem("userLogin");
    if (isLogin) {
      setUserLogin(userLogin);
    } else {
      setUserLogin(userLogin);
    }
  }, [isLogin]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path={ROUTES.LOGIN}
            element={userLogin ? <Navigate to={ROUTES.DASHBOARD} /> : <Login />}
          />

          {/* Protected routes */}
          <Route
            path={ROUTES.DASHBOARD}
            element={renderProtectedRoute(<Dashboard />)}
          />
          <Route
            path={ROUTES.MUNICIPAL_DETAILS_LIST}
            element={renderProtectedRoute(<MunicipalDetailsList />)}
          />
          <Route
            path="/master-page"
            element={renderProtectedRoute(<MasterPage />)}
          />
          <Route
            path="/road-type-name"
            element={renderProtectedRoute(<RoadTypeName />)}
          />
          <Route
            path="/create-road-type"
            element={renderProtectedRoute(<CreateRoadType />)}
          />
          <Route
            path="/zone-data"
            element={renderProtectedRoute(<ZoneData />)}
          />
          <Route
            path="/create-zone-data"
            element={renderProtectedRoute(<CreateZoneData />)}
          />
          <Route
            path="/property-tax"
            element={renderProtectedRoute(<PropertyTaxComponentList />)}
          />
          <Route
            path="/property-tax-calculation"
            element={renderProtectedRoute(<PropertyTaxComponent />)}
          />
          <Route
            path="/state-cess-rate-calculation"
            element={renderProtectedRoute(<PropertyTaxCessRateList />)}
          />
          <Route
            path="/create-property-tax-cess-rate"
            element={renderProtectedRoute(<CreatePropertyTaxCess />)}
          />
          <Route
            path="/master-property-tax-component-name"
            element={renderProtectedRoute(<MasterPropertyTaxComponentName />)}
          />
          <Route
            path="/form-property-tax-component-name"
            element={renderProtectedRoute(<FormPropertyTaxComponentName />)}
          />
          <Route
            path="/property-area-range-master-list"
            element={renderProtectedRoute(<PropertyAreaRangeMasterList />)}
          />
          <Route
            path="/create-property-area-range-master"
            element={renderProtectedRoute(<CreatePropertyAreaRangeMaster />)}
          />
          <Route
            path="/ward-master"
            element={renderProtectedRoute(<WardMaster />)}
          />
          <Route
            path="/create-waard-details"
            element={renderProtectedRoute(<CreateWardDetails />)}
          />
          <Route
            path="/property-type-master"
            element={renderProtectedRoute(<PropertyTypeMaster />)}
          />
          <Route
            path="/create-property-type-master-form"
            element={renderProtectedRoute(<CreatePropertyTypeMasterForm />)}
          />
          <Route
            path="/property-use-type-master"
            element={renderProtectedRoute(<PropertyUseTypeMaster />)}
          />
          <Route
            path="/create-property-use-type-master"
            element={renderProtectedRoute(<CreatePropertyUseTypeMater />)}
          />
          <Route
            path="/property-assessment-type-master"
            element={renderProtectedRoute(<PropertyAssessmentTypeMaster />)}
          />
          <Route
            path="/create-property-assessment-type-master"
            element={renderProtectedRoute(<CreatePropertyAssessmentType />)}
          />
          <Route
            path="/ownership-type-master"
            element={renderProtectedRoute(<OwnershipTypeMaster />)}
          />
          <Route
            path="/create-ownership-type-master"
            element={renderProtectedRoute(<CreateOwnershipTypeMaster />)}
          />
          <Route
            path="/water-property-type-master"
            element={renderProtectedRoute(<WaterPropertyTypeMaster />)}
          />
          <Route
            path="/create-water-property-type"
            element={renderProtectedRoute(<CreateWaterPropertyType />)}
          />
          <Route
            path="/unit-master"
            element={renderProtectedRoute(<UnitMaster />)}
          />
          <Route
            path="/create-new-unit-master"
            element={renderProtectedRoute(<CreateNewUnitMaster />)}
          />
          <Route
            path="/application-category-master"
            element={renderProtectedRoute(<ApplicationCategoryMaster />)}
          />
          <Route
            path="/create-application"
            element={renderProtectedRoute(<CreateApplication />)}
          />
          <Route
            path="/application-type-master"
            element={renderProtectedRoute(<ApplicationTypeMaster />)}
          />
          <Route
            path="/create-application-type"
            element={renderProtectedRoute(<CreateApplicationType />)}
          />
          <Route
            path="/document-type"
            element={renderProtectedRoute(<DocumentTypeMaster />)}
          />
          <Route
            path="/create-document-type"
            element={renderProtectedRoute(<CreateDocumentType />)}
          />
          <Route
            path="/document-group-master"
            element={renderProtectedRoute(<DocumentGroupMaster />)}
          />
          <Route
            path="/create-document-group"
            element={renderProtectedRoute(<CreateNewDocumentGroup />)}
          />
          <Route
            path="/pipeline-type"
            element={renderProtectedRoute(<PipelineType />)}
          />
          <Route
            path="/create-pipeline-type"
            element={renderProtectedRoute(<CreatePipelineType />)}
          />
          <Route
            path="/calculation-type"
            element={renderProtectedRoute(<CalculationTypeList />)}
          />
          <Route
            path="/create-calculation-type"
            element={renderProtectedRoute(<CreateCalculationType />)}
          />
          <Route
            path="/connection-type"
            element={renderProtectedRoute(<ConnectionType />)}
          />
          <Route
            path="/create-connection"
            element={renderProtectedRoute(<CreateConnection />)}
          />
          <Route
            path="/consumer-category-master"
            element={renderProtectedRoute(<ConsumerCategory />)}
          />
          <Route
            path="/create-consumer-category"
            element={renderProtectedRoute(<CreateConsumerCategory />)}
          />
          <Route
            path="/buildup-area"
            element={renderProtectedRoute(<BuildUpArea />)}
          />
          <Route
            path="/create-buildup-area"
            element={renderProtectedRoute(<CreateBuildUpArea />)}
          />
          <Route
            path="/fee-master"
            element={renderProtectedRoute(<FeeMaster />)}
          />
          <Route
            path="/create-fee-details"
            element={renderProtectedRoute(<CreateFeeDetails />)}
          />
          <Route
            path="/additional-fee"
            element={renderProtectedRoute(<AdditionalFee />)}
          />
          <Route
            path="/create-additional-fee"
            element={renderProtectedRoute(<CreateAdditionalFee />)}
          />
          <Route
            path="/trade-application"
            element={renderProtectedRoute(<TradeApplication />)}
          />
          <Route
            path="/create-trade-application"
            element={renderProtectedRoute(<CreateTradeApplication />)}
          />
          {/* Catch-all route for redirecting to login if no match is found */}
          <Route
            path={ROUTES.DEFAULT}
            element={
              <Navigate to={userLogin ? ROUTES.DASHBOARD : ROUTES.LOGIN} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

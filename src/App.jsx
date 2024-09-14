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
import TradeApplication from "./pages/MunicipalLicenseSetup/TradeApplication/TradeApplication";
import CreateTradeApplication from "./pages/MunicipalLicenseSetup/TradeApplication/CreateTradeApplication";

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
        {userLogin ? <Sidebar isClosed={isClosed} /> : null}
        <Routes>
          <Route
            path={ROUTES.LOGIN}
            element={userLogin ? <Navigate to={ROUTES.DASHBOARD} /> : <Login />}
          />

          {/* Protected routes */}
          <Route
            path={ROUTES.DASHBOARD}
            element={userLogin ? <Dashboard /> : <Navigate to={ROUTES.LOGIN} />}
          />
          <Route
            path={ROUTES.MUNICIPAL_DETAILS_LIST}
            element={<MunicipalDetailsList />}
          />
          <Route
            path="/master-page"
            element={
              userLogin ? <MasterPage /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/road-type-name"
            element={
              userLogin ? <RoadTypeName /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/create-road-type"
            element={
              userLogin ? <CreateRoadType /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/zone-data"
            element={userLogin ? <ZoneData /> : <Navigate to={ROUTES.LOGIN} />}
          />
          <Route
            path="/create-zone-data"
            element={
              userLogin ? <CreateZoneData /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/property-tax"
            element={
              userLogin ? (
                <PropertyTaxComponentList />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/property-tax-calculation"
            element={
              userLogin ? (
                <PropertyTaxComponent />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/state-cess-rate-calculation"
            element={
              userLogin ? (
                <PropertyTaxCessRateList />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/create-property-tax-cess-rate"
            element={
              userLogin ? (
                <CreatePropertyTaxCess />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/master-property-tax-component-name"
            element={
              userLogin ? (
                <MasterPropertyTaxComponentName />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/form-property-tax-component-name"
            element={
              userLogin ? (
                <FormPropertyTaxComponentName />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/property-area-range-master-list"
            element={
              userLogin ? (
                <PropertyAreaRangeMasterList />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/create-property-area-range-master"
            element={
              userLogin ? (
                <CreatePropertyAreaRangeMaster />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/ward-master"
            element={
              userLogin ? <WardMaster /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/create-waard-details"
            element={
              userLogin ? <CreateWardDetails /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/property-type-master"
            element={
              userLogin ? (
                <PropertyTypeMaster />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/create-property-type-master-form"
            element={
              userLogin ? (
                <CreatePropertyTypeMasterForm />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/property-use-type-master"
            element={
              userLogin ? (
                <PropertyUseTypeMaster />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/create-property-use-type-master"
            element={
              userLogin ? (
                <CreatePropertyUseTypeMater />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/property-assessment-type-master"
            element={
              userLogin ? (
                <PropertyAssessmentTypeMaster />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/create-property-assessment-type-master"
            element={
              userLogin ? (
                <CreatePropertyAssessmentType />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/ownership-type-master"
            element={
              userLogin ? (
                <OwnershipTypeMaster />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/create-ownership-type-master"
            element={
              userLogin ? (
                <CreateOwnershipTypeMaster />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/water-property-type-master"
            element={
              userLogin ? (
                <WaterPropertyTypeMaster />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/create-water-property-type"
            element={
              userLogin ? (
                <CreateWaterPropertyType />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/unit-master"
            element={
              userLogin ? <UnitMaster /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/create-new-unit-master"
            element={
              userLogin ? (
                <CreateNewUnitMaster />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/application-category-master"
            element={
              userLogin ? (
                <ApplicationCategoryMaster />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/create-application"
            element={
              userLogin ? <CreateApplication /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/application-type-master"
            element={
              userLogin ? (
                <ApplicationTypeMaster />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/create-application-type"
            element={
              userLogin ? (
                <CreateApplicationType />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/document-type"
            element={
              userLogin ? (
                <DocumentTypeMaster />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/create-document-type"
            element={
              userLogin ? (
                <CreateDocumentType />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/document-group-master"
            element={
              userLogin ? (
                <DocumentGroupMaster />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/create-document-group"
            element={
              userLogin ? (
                <CreateNewDocumentGroup />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/pipeline-type"
            element={
              userLogin ? <PipelineType /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/create-pipeline-type"
            element={
              userLogin ? (
                <CreatePipelineType />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/calculation-type"
            element={
              userLogin ? (
                <CalculationTypeList />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/create-calculation-type"
            element={
              userLogin ? (
                <CreateCalculationType />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/connection-type"
            element={
              userLogin ? <ConnectionType /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/create-connection"
            element={
              userLogin ? <CreateConnection /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/consumer-category-master"
            element={
              userLogin ? <ConsumerCategory /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/create-consumer-category"
            element={
              userLogin ? (
                <CreateConsumerCategory />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/buildup-area"
            element={
              userLogin ? <BuildUpArea /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/create-buildup-area"
            element={
              userLogin ? <CreateBuildUpArea /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/fee-master"
            element={userLogin ? <FeeMaster /> : <Navigate to={ROUTES.LOGIN} />}
          />
          <Route
            path="/create-fee-details"
            element={
              userLogin ? <CreateFeeDetails /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/additional-fee"
            element={
              userLogin ? <AdditionalFee /> : <Navigate to={ROUTES.LOGIN} />
            }
          />
          <Route
            path="/create-additional-fee"
            element={
              userLogin ? (
                <CreateAdditionalFee />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/trade-application"
            element={
              userLogin ? (
                <TradeApplication />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
          <Route
            path="/create-trade-application"
            element={
              userLogin ? (
                <CreateTradeApplication />
              ) : (
                <Navigate to={ROUTES.LOGIN} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import Sidebar from "./components/sidebar";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MunicipalDetailsList from "./pages/MunicipalMaster/MunicipalDetailsList";
import MasterPage from "./pages/MunicipalMaster/MasterPage";
import RoadTypeName from "./pages/PropertyMasterSetup/RoadTypeName";
import PropertyTaxComponentList from "./pages/PropertyMasterSetup/PropertyTaxComponentList";
import PropertyTaxComponent from "./pages/PropertyMasterSetup/CreatePropertyTaxComponent";
import ZoneData from "./pages/PropertyMasterSetup/ZoneData";
import PropertyTaxCessRateList from "./pages/PropertyMasterSetup/MasterPropertyTaxCessRateList";
import CreatePropertyTaxCess from "./pages/PropertyMasterSetup/CreatePropertyTaxCessRateList";
import MasterPropertyTaxComponentName from "./pages/PropertyMasterSetup/MasterPropertyTaxComponentName";
import FormPropertyTaxComponentName from "./pages/PropertyMasterSetup/FormPropertyTaxComponentName";
import PropertyAreaRangeMasterList from "./pages/PropertyMasterSetup/PropertyAreaRangeMasterList";
import CreatePropertyAreaRangeMaster from "./pages/PropertyMasterSetup/CreatePropertyAreaRangeMaster";
import WardMaster from "./pages/PropertyMasterSetup/WardMaster";
import CreateWardDetails from "./pages/PropertyMasterSetup/CreateWardDetails";
import PropertyTypeMaster from "./pages/PropertyMasterSetup/PropertyTypeMaster";
import CreatePropertyTypeMasterForm from "./pages/PropertyMasterSetup/CreatePropertyTypeMasterForm";
import PropertyUseTypeMaster from "./pages/PropertyMasterSetup/PropertyUseTypeMaster";
import CreatePropertyUseTypeMater from "./pages/PropertyMasterSetup/CreatePropertyUseTypeMater";
import PropertyAssessmentTypeMaster from "./pages/PropertyMasterSetup/PropertyAssessmentTypeMaster";
import CreatePropertyAssessmentType from "./pages/PropertyMasterSetup/CreatePropertyAssessmentType";
import OwnershipTypeMaster from "./pages/PropertyMasterSetup/OwnershipTypeMaster";
import CreateOwnershipTypeMaster from "./pages/PropertyMasterSetup/CreateOwnershipTypeMaster";
import CreateRoadType from "./pages/PropertyMasterSetup/CreateRoadType";
import CreateZoneData from "./pages/PropertyMasterSetup/CreateZoneData";
import WaterPropertyTypeMaster from "./pages/WaterUsersSetup/WaterPropertyTypeMaster/WaterPropertyTypeMaster";
import CreateWaterPropertyType from "./pages/WaterUsersSetup/WaterPropertyTypeMaster/CreateWaterPropertyType";
import CreateNewUnitMaster from "./pages/WaterUsersSetup/UnitMaster/CreateNewUnitMaster";
import UnitMaster from "./pages/WaterUsersSetup/UnitMaster/UnitMaster";
import ApplicationCategoryMaster from "./pages/WaterUsersSetup/ApplicationCategoryMaster/ApplicationCategoryMaster";
import CreateApplication from "./pages/WaterUsersSetup/ApplicationCategoryMaster/CreateApplication";
import ApplicationTypeMaster from "./pages/WaterUsersSetup/ApplicationTypeMaster/ApplicationTypeMaster";
import CreateApplicationType from "./pages/WaterUsersSetup/ApplicationTypeMaster/CreateApplicationType";
import DocumentTypeMaster from "./pages/WaterUsersSetup/DocumentTypeMaster/DocumentTypeMaster";
import CreateDocumentType from "./pages/WaterUsersSetup/DocumentTypeMaster/CreateDocumentType";
import DocumentGroupMaster from "./pages/WaterUsersSetup/DocumentGroupMaster/DocumentGroupMaster";
import CreateNewDocumentGroup from "./pages/WaterUsersSetup/DocumentGroupMaster/CreateNewDocumentGroup";
import PipelineType from "./pages/WaterUsersSetup/PipelineType/PipelineType";
import CreatePipelineType from "./pages/WaterUsersSetup/PipelineType/CreatePipelineType";
import CalculationTypeList from "./pages/WaterUsersSetup/CalculationTypeMaster/CalculationTypeList";
import CreateCalculationType from "./pages/WaterUsersSetup/CalculationTypeMaster/CreateCalculationType";
import ConnectionType from "./pages/WaterUsersSetup/ConnectionType/ConnectionType";
import CreateConnection from "./pages/WaterUsersSetup/ConnectionType/CreateConnection";
import ConsumerCategory from "./pages/WaterUsersSetup/ConsumerCategoryMaster/ConsumerCategory";
import CreateConsumerCategory from "./pages/WaterUsersSetup/ConsumerCategoryMaster/CreateConsumerCategory";
import BuildUpArea from "./pages/WaterUsersSetup/BuildUpAreaMaster/BuildUpArea";
import CreateBuildUpArea from "./pages/WaterUsersSetup/BuildUpAreaMaster/CreateBuildUpArea";
import FeeMaster from "./pages/WaterUsersSetup/FeeMaster/FeeMaster";
import CreateFeeDetails from "./pages/WaterUsersSetup/FeeMaster/CreateFeeDetails";
import AdditionalFee from "./pages/WaterUsersSetup/AdditionalFeeMaster/AdditionalFee";
import CreateAdditionalFee from "./pages/WaterUsersSetup/AdditionalFeeMaster/CreateAdditionalFee";
import  Login  from "./pages/Login/Login";

function App() {
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  const isLogin = useSelector((state) => state.myReducer.isLogin);
  return (
    <Router>
     {isLogin ? 
      <div className="App">
        <Sidebar isClosed={isClosed} />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/municipal-details-list"
            element={<MunicipalDetailsList />}
          />
          <Route path="/master-page" element={<MasterPage />} />
          <Route path="/road-type-name" element={<RoadTypeName />} />
          <Route path="/create-road-type" element={<CreateRoadType />} />
          <Route path="/zone-data" element={<ZoneData />} />
          <Route path="/create-zone-data" element={<CreateZoneData />} />
          <Route
            path="/property-tax"
            element={<PropertyTaxComponentList />}
          />
          <Route
            path="/property-tax-calculation"
            element={<PropertyTaxComponent />}
          />
          <Route
            path="/state-cess-rate-calculation"
            element={<PropertyTaxCessRateList />}
          />
          <Route
            path="/create-property-tax-cess-rate"
            element={<CreatePropertyTaxCess />}
          />
          <Route
            path="/master-property-tax-component-name"
            element={<MasterPropertyTaxComponentName />}
          />
          <Route
            path="/form-property-tax-component-name"
            element={<FormPropertyTaxComponentName />}
          />
          <Route
            path="/property-area-range-master-list"
            element={<PropertyAreaRangeMasterList />}
          />
          <Route
            path="/create-property-area-range-master"
            element={<CreatePropertyAreaRangeMaster />}
          />
          <Route
            path="/ward-master"
            element={<WardMaster />}
          />
          <Route
            path="/create-waard-details"
            element={<CreateWardDetails />}
          />
          <Route
            path="/property-type-master"
            element={<PropertyTypeMaster />}
          />
          <Route
            path="/create-property-type-master-form"
            element={<CreatePropertyTypeMasterForm />}
          />
          <Route
            path="/property-use-type-master"
            element={<PropertyUseTypeMaster />}
          />
          <Route
            path="/create-property-use-type-master"
            element={<CreatePropertyUseTypeMater />}
          />
          <Route
            path="/property-assessment-type-master"
            element={<PropertyAssessmentTypeMaster />}
          />
          <Route
            path="/create-property-assessment-type-master"
            element={<CreatePropertyAssessmentType />}
          />
          <Route
            path="/ownership-type-master"
            element={<OwnershipTypeMaster />}
          />
          <Route
            path="/create-ownership-type-master"
            element={<CreateOwnershipTypeMaster />}
          />
          <Route
            path="/water-property-type-master"
            element={<WaterPropertyTypeMaster />}
          />
          <Route
            path="/create-water-property-type"
            element={<CreateWaterPropertyType />}
          />
          <Route
            path="/unit-master"
            element={<UnitMaster />}
          />
          <Route
            path="/create-new-unit-master"
            element={<CreateNewUnitMaster />}
          />
          <Route
            path="/application-category-master"
            element={<ApplicationCategoryMaster />}
          />
          <Route
            path="/create-application"
            element={<CreateApplication />}
          />
          <Route
            path="/application-type-master"
            element={<ApplicationTypeMaster />}
          />
          <Route
            path="/create-application-type"
            element={<CreateApplicationType />}
          />
          <Route
            path="/document-type"
            element={<DocumentTypeMaster />}
          />
          <Route
            path="/create-document-type"
            element={<CreateDocumentType />}
          />
          <Route
            path="/document-group-master"
            element={<DocumentGroupMaster />}
          />
          <Route
            path="/create-document-group"
            element={<CreateNewDocumentGroup />}
          />
          <Route
            path="/pipeline-type"
            element={<PipelineType />}
          />
          <Route
            path="/create-pipeline-type"
            element={<CreatePipelineType />}
          />
          <Route
            path="/calculation-type"
            element={<CalculationTypeList />}
          />
          <Route
            path="/create-calculation-type"
            element={<CreateCalculationType />}
          />
          <Route
            path="/connection-type"
            element={<ConnectionType />}
          />
          <Route
            path="/create-connection"
            element={<CreateConnection />}
          />
          <Route
            path="/consumer-category-master"
            element={<ConsumerCategory />}
          />
          <Route
            path="/create-consumer-category"
            element={<CreateConsumerCategory />}
          />
          <Route
            path="/buildup-area"
            element={<BuildUpArea />}
          />
          <Route
            path="/create-buildup-area"
            element={<CreateBuildUpArea />}
          />
          <Route
            path="/fee-master"
            element={<FeeMaster />}
          />
          <Route
            path="/create-fee-details"
            element={<CreateFeeDetails />}
          />
          <Route
            path="/additional-fee"
            element={<AdditionalFee />}
          />
          <Route
            path="/create-additional-fee"
            element={<CreateAdditionalFee />}
          />
        </Routes>
      </div> :
      <Login />
       }
    </Router>
  );
}

export default App;

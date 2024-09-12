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
import UnitRateMaster from "./pages/WaterUsersSetup/UnitRateMaster/UnitRateMaster";
import CreateNewUnitRate from "./pages/WaterUsersSetup/UnitRateMaster/CreateNewUnitRate";

function App() {
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  return (
    <Router>
      <div className="App">
        <Sidebar isClosed={isClosed} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
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
            path="/property-tax-component-list"
            element={<PropertyTaxComponentList />}
          />
          <Route
            path="/create-property-tax-component"
            element={<PropertyTaxComponent />}
          />
          <Route
            path="/property-tax-cess-rate-list"
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
            path="/unit-rate-master"
            element={<UnitRateMaster />}
          />
          <Route
            path="/create-new-unit-rate"
            element={<CreateNewUnitRate />}
          />



        </Routes>
      </div>
    </Router>
  );
}

export default App;

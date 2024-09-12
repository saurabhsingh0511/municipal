import "./App.css";
import Sidebar from "./components/sidebar";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MunicipalDetailsList from "./pages/MunicipalMaster/MunicipalDetailsList/MunicipalDetailsList";
import MasterPage from "./pages/MunicipalMaster/MasterPage/MasterPage";
import RoadTypeName from "./pages/PropertyMasterSetup/RoadTypeName";
import PropertyTaxComponentList from "./pages/PropertyMasterSetup/PropertyTaxComponentList";
import PropertyTaxComponent from "./pages/PropertyMasterSetup/PropertyTaxComponent";
import ZoneData from "./pages/PropertyMasterSetup/ZoneData";
import PropertyTaxCessRateList from "./pages/PropertyMasterSetup/MasterPropertyTaxCessRateList";
import CreatePropertyTaxCess from "./pages/PropertyMasterSetup/CreatePropertyTaxCess";
import MasterPropertyTaxComponentName from "./pages/PropertyMasterSetup/MasterPropertyTaxComponentName";
import FormPropertyTaxComponentName from "./pages/PropertyMasterSetup/FormPropertyTaxComponentName";

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
          <Route path="/zone-data" element={<ZoneData />} />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;

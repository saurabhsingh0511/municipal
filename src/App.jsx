import "./App.css";
import Sidebar from "./components/sidebar";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard/Dashboard";
import MunicipalDetailsList from "./pages/MunicipalMaster/MunicipalDetailsList/MunicipalDetailsList";
import MasterPage from "./pages/MunicipalMaster/MasterPage/MasterPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const isClosed = useSelector((state) => state.myReducer.isClosed);
  return (
    <Router>
      <div className="App">
      <Sidebar isClosed={isClosed} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/municipal-details-list" element={<MunicipalDetailsList />} />
          <Route path="/master-page" element={<MasterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import Sidebar from "./components/sidebar";
import HomeSection from "./components/homesection";
import { useState } from "react";

function App() {
  const [isClosed, setIsClosed] = useState(false);

  const toggleSidebar = () => {
    setIsClosed(!isClosed);
  };
  return (
    <div>
      <div className="App">
        <Sidebar isClosed={isClosed} />
        <HomeSection toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
}

export default App;

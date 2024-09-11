import "./App.css";
import Sidebar from "./components/sidebar";
import HomeSection from "./components/homesection";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const isClosed = useSelector((state) => state.myReducer.isClosed);

  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed // toggle the current state
  });
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

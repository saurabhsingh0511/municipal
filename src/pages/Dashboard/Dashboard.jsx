import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";
import "./Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed, // toggle the current state
    });
  };
  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="dashboard-container">
            <header className="dashboard-header">
              <h1 className="heading_h1">Welcome to Dashboard</h1>
            </header>
            <div className="">
              <div className="row justify-content-center my-4">
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="card">
                    <h2>Overview</h2>
                    <p>Get insights at a glance.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="card">
                    <h2>Statistics</h2>
                    <p>View your performance metrics.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="card">
                    <h2>Notifications</h2>
                    <p>Check the latest updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default Dashboard;

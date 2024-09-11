import { useDispatch, useSelector } from 'react-redux';
import HomeSection from '../../components/homesection';
import './Dashboard.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed // toggle the current state
  });
  };
  return (
    <>
    <HomeSection toggleSidebar={toggleSidebar} 
    html={<div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <div className="card">
          <h2>Overview</h2>
          <p>Get insights at a glance.</p>
        </div>
        <div className="card">
          <h2>Statistics</h2>
          <p>View your performance metrics.</p>
        </div>
        <div className="card">
          <h2>Notifications</h2>
          <p>Check the latest updates.</p>
        </div>
      </div>
    </div>}
    />
    </>
  );    
};

export default Dashboard;

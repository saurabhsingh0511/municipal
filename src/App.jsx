import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Sidebar from './components/sidebar';
import HomeSection from './components/homesection';
import { useState } from 'react';

function App() {
  const counter = useSelector((state) => state.myReducer.myVariable);
  const test = useSelector((state) => state.myReducer.test);
  const dispatch = useDispatch();
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

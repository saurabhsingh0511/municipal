import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, testtttt } from './dataStore/actions';

function App() {
  const counter = useSelector((state) => state.myReducer.myVariable);
  const test = useSelector((state) => state.myReducer.test);
  const dispatch = useDispatch();
  return (
    <div>
      
    </div>
  );
}

export default App;

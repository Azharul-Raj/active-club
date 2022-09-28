import logo from './logo.svg';
import './App.css';
import Workouts from './Components/Workouts/Workouts';
import Question from './Components/Question/Question';

function App() {
  return (
    <div className="App">
      <Workouts />
      <Question/>
    </div>
  );
}

export default App;

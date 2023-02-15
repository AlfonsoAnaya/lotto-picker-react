import './App.css';
import PickNumbers from './components/PickNumbers.js';

let numberOfRows = 10;

function App() {
  return (
    <div className="App">
      <h1>Your numbers are:</h1>
      {Array(numberOfRows).fill(<PickNumbers />)}
    </div>
  );
}


export default App;

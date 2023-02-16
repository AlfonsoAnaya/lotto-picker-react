import './App.css';
import PickNumbers from './components/PickNumbers.js';
import Footer from "./components/Footer"

let numberOfRows = 10;

function App() {
  return (
    <div className="App">
      <h1>Your numbers are:</h1>
      {Array(numberOfRows).fill(<PickNumbers />)}
      <Footer />
    </div>
  );
}


export default App;

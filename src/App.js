import './App.css';
import {useState} from "react"
import Form from "./components/Form.js"
import PickNumbers from './components/PickNumbers.js';
import Footer from "./components/Footer"


function App() {
  const [picks, setPicks] = useState(7);
  const [extension, setExtension] = useState(36);

  function handlePicksChange(e) {
    setPicks(e.target.value)
  }
  
  function handleExtensionChange(e) {
    setExtension(e.target.value)
  }


  let rows = 10;
  return (
    <div className="App">
      <Form         
        picks={picks}
        setPicks={handlePicksChange}
        extension={extension}
        setExtension={handleExtensionChange}/>
      <h1>Your numbers are:</h1>
      {Array(rows).fill(<PickNumbers 
        picks={picks}
        extension={extension}/>)}
      <Footer />
    </div>
  );
}


export default App;

import './App.css';
import {useState} from "react"
import Form from "./components/Form.js"
import Rows from './components/Rows.js';
import Footer from "./components/Footer"


function App() {
  const [picks, setPicks] = useState(7);
  const [extension, setExtension] = useState(36);
  const [rows, setRows] = useState(20);

  function handlePicksChange(e) {
    setPicks(e.target.value)
  }
  
  function handleExtensionChange(e) {
    setExtension(e.target.value)
  }

  function handleRowsChange(e) {
    setRows(e.target.value)
}

  return (
    <div className="App">
      <Form         
        picks={picks}
        setPicks={handlePicksChange}
        extension={extension}
        setExtension={handleExtensionChange}
        rows={rows}
        setRows={handleRowsChange}/>
      <h1>Your numbers are:</h1>
      <Rows 
        picks={picks}
        extension={extension}/>
      <Footer />
    </div>
  );
}


export default App;

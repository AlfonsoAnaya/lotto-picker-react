import './App.css';
import {useState} from "react"
import Header from "./components/Header.js"
import Form from "./components/Form.js"
import Rows from './components/Rows.js'
import Footer from "./components/Footer"


function App() {
  const [picks, setPicks] = useState(7);
  const [extension, setExtension] = useState(36);
  const [rows, setRows] = useState(10);

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
      <Header />
      <Form         
        picks={picks}
        setPicks={handlePicksChange}
        extension={extension}
        setExtension={handleExtensionChange}
        rows={rows}
        setRows={handleRowsChange}/>
      <Rows 
        picks={picks}
        extension={extension}
        rows={rows}/>
      <Footer />
    </div>
  );
}


export default App;

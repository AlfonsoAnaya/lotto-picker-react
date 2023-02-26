import {useState} from "react"

function Form() {
    const [extension, setExtension] = useState(0);
    const [picks, setPicks] = useState(0);
    const [rows, setRows] = useState(0);

    function handleExtensionChange(e) {
        setExtension(e.target.value)
    }
    function handlePicksChange(e) {
        setPicks(e.target.value)
    }
    function handleRowsChange(e) {
        setRows(e.target.value)
    }

    return (
        <>
            <label>
                Select Extension of Lottery<input name="extension" onChange={handleExtensionChange}/>
            </label>
            <label>
                Select Number of Picks<input name="picks" onChange={handlePicksChange}/>
            </label>
            <label>
                Select Number of Rows<input name="rows" onChange={handleRowsChange}/>
            </label>
            <button>
                Get Rows
            </button>
            <p>extension {extension}, picks {picks}, rows {rows}</p>
        </>
    )
}

export default Form
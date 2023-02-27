import {useState} from "react"

function Form({picks, setPicks}) {
    const [extension, setExtension] = useState(39);
    const [rows, setRows] = useState(10);

    function handleExtensionChange(e) {
        setExtension(e.target.value)
    }

    function handleRowsChange(e) {
        setRows(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form className="user-input-form" onSubmit={handleSubmit}>
            <label>
                Select Extension of Lottery<input placeholder='39' name="extension" onChange={handleExtensionChange}/>
            </label>
            <label>
                Select Number of Picks<input placeholder="7" name="picks" onChange={setPicks}/>
            </label>
            <label>
                Select Number of Rows<input placeholder="10" name="rows" onChange={handleRowsChange}/>
            </label>
            <button type="submit">
                Get Rows
            </button>
            <p>extension {extension}, picks {picks}, rows {rows}</p>
        </form>
    )
}

export default Form
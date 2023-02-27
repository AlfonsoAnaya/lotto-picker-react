import {useState} from "react"

function Form({
        picks, setPicks,
        extension, setExtension
    }) {
    
    const [rows, setRows] = useState(10);

    function handleRowsChange(e) {
        setRows(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form className="user-input-form" onSubmit={handleSubmit}>
            <label>
                Select Extension of Lottery<input placeholder={extension} name="extension" onChange={setExtension}/>
            </label>
            <label>
                Select Number of Picks<input placeholder={picks} name="picks" onChange={setPicks}/>
            </label>
            <label>
                Select Number of Rows<input placeholder={rows} name="rows" onChange={handleRowsChange}/>
            </label>
            <button type="submit">
                Get Rows
            </button>
            <p>extension {extension}, picks {picks}, rows {rows}</p>
        </form>
    )
}

export default Form
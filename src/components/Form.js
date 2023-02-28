function Form({
        picks, setPicks,
        extension, setExtension,
        rows, setRows
    }) {
    
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
                Select Number of Rows<input placeholder={rows} name="rows" onChange={setRows}/>
            </label>
            <button type="submit">
                Get Rows
            </button>
            <p>extension {extension}, picks {picks}, rows {rows}</p>
        </form>
    )
}

export default Form
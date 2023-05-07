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
                Lottery-size: <input className="form-input" type="number" placeholder={extension} name="extension" onChange={setExtension}/>
            </label>
            <label>
                Number of Picks: <input className="form-input" type="number" placeholder={picks} name="picks" onChange={setPicks}/>
            </label>
            <label>
                Number of Bets: <input className="form-input" type="number" placeholder={rows} name="rows" onChange={setRows}/>
            </label>
        </form>
    )
}

export default Form
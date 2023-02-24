import {useState} from "React"

function Form() {
    const [input, setInput] = useState({
        "extension": 0,
        "picks": 0,
        "rows": 0,
    })

    function onChange() {
        setInput(input.this.name = "")
    }

    return (
        <>
            <label>
                Select Extension of Lottery<input name="extension"/>
            </label>
            <label>
                Select Number of Picks<input name="picks" />
            </label>
            <label>
                Select Number of Rows<input name="rows" />
            </label>
            <button>
                Get Rows
            </button>
        </>
    )
}

export default Form
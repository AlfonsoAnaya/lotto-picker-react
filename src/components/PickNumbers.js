import generateSheet from '../utils/generateSheet.js'

function PickNumbers({picks}) {
    let sheet = generateSheet();
    let result = [];
    for (let j=0; j<picks; j++) {
      let randomIndex = Math.floor(((Math.random())*(36-j)));
      result.push(sheet[randomIndex]);
      sheet.splice(randomIndex, 1);
    }
    const numbersList = result.map((number, index) => 
      <li 
        key={index}
        className="numberItemList"
        
        >
          {number}
      </li>
    )
    return(
      <ul className="numberList">
        {numbersList}
      </ul>
    )
  }

export default PickNumbers
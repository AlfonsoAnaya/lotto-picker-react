import generateSheet from '../utils/generateSheet.js'

function PickNumbers({picks, extension}) {
    let sheet = generateSheet(extension);
    let result = [];
    for (let j=0; j<picks; j++) {
      let randomIndex = Math.floor(((Math.random())*(extension-j)));
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
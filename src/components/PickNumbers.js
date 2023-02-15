import generateSheet from '../utils/generateSheet.js'

let picks = 7;



function PickNumbers() {
    let sheet = generateSheet();
    let result = [];
    for (let j=0; j<picks; j++) {
      let randomIndex = Math.floor(((Math.random())*(36-j)));
      result.push(sheet[randomIndex]);
      sheet.splice(randomIndex, 1);
    }
    return(
      <ul className="numberList">
        {result.map(number => (
          <li 
            key = {result(number)}
            className="numberItemList">
              {number}
          </li>
        ))}
      </ul>
    )
  }

export default PickNumbers
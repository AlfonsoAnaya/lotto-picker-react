import generateSheet from '../utils/generateSheet.js'

function Rows({ picks, extension, rows }) {
  let rowsArray = [];
  let row = [];
  //a loop that adds rows
  for (let i = 0; i < rows; i++) {
    
    //a loop that adds numbers to the row
    for (let j = 0; j < picks; j++) {
      let sheet = generateSheet(extension);
      let randomIndex = Math.floor(((Math.random()) * (extension - j)));
      row.push(sheet[randomIndex]);
      sheet.splice(randomIndex, 1);
    }
  }
  rowsArray.push(row);
  const resultingRows = rowsArray.map((rowArr, index) => 
    <ul
      key={index}
      className="numbersList"
    >
      {rowArr.map((number, newIndex) =>
        <li
          key={index}
          className="numberItemList"

        >
          {number}
        </li>
      )}

    </ul>
  )

  return (
    <ul>
      {resultingRows}
    </ul>
  )
}

export default Rows
import generateSheet from '../utils/generateSheet.js'

function Rows({ picks, extension, rows }) {
  console.log("deploying functin!")
  let rowsArray = [];
  
  //a loop that adds rows
  for (let i = 0; i < rows; i++) {
    let row = [];
    //a loop that adds numbers to the row
    for (let j = 0; j < picks; j++) {
      let sheet = generateSheet(extension);
      let randomIndex = Math.floor(((Math.random()) * (extension - j)));
      row.push(sheet[randomIndex]);
      sheet.splice(randomIndex, 1);
    }
    console.log(i,row);
    rowsArray.push(row);
  }
  
  const resultingRows = rowsArray.map((rowArr, index) => 
    <ul
      key={index}
      className="row"
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
    <ul className="rowsList">
      {resultingRows}
    </ul>
  )
}

export default Rows
import generateSheet from '../utils/generateSheet.js'

function Rows({ picks, extension, rows }) {
  let rowsArray = [];

  //a loop that adds rows
  for (let i = 0; i < rows; i++) {
    let row = [];
    let sheet = generateSheet(extension);
    //a loop that adds numbers to the row
    for (let j = 0; j < picks; j++) {
      let randomIndex = Math.floor(((Math.random()) * (extension - j)));
      row.push(sheet[randomIndex]);
      sheet.splice(randomIndex, 1);
    }
    rowsArray.push(row);
  }

  const resultingRows = rowsArray.map((rowArr, index) =>
    <ul
      key={index}
      className="row"
    >
      {rowArr.map((number, newIndex) =>
        <li
          key={newIndex}
          className="numberItemList"
        >
          {number}
        </li>
      )}

    </ul>
  )

  return (
    <>
      <h2>Your numbers are:</h2>
      <ul className="rowsList">
        {resultingRows}
      </ul>
    </>
  )
}

export default Rows
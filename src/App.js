import './App.css';

let numberOfRows = 10;
let gameLength = 36;
let picks = 7;

function generateSheet() {
    let sheet = [];
    for (let i=0; i<gameLength; i++) {
        sheet.push(i+1);
    }
    return sheet;
}

function PickNumbers(picks) {
  let sheet = generateSheet();
  let playNumbers = []
  for (let i=0; i<picks; i++) {
    let randomIndex = Math.floor(((Math.random())*(36-i)));
    playNumbers.push(sheet[randomIndex]);
    sheet.splice(randomIndex, 1);
  }
  return (
    <p>{playNumbers}</p>
  )
}




function App() {
  return (
    <div className="App">
      <h1>Your numbers are:</h1>
      <PickNumbers />
    </div>
  );
}

export default App;

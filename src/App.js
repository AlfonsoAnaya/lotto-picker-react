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

function pickNumbers(n) {
  let sheet = generateSheet();
  let playNumbers = []
  for (let i=0; i<n; i++) {
    let randomIndex = Math.floor(((Math.random())*(36-i)));
    playNumbers.push(sheet[randomIndex]);
    sheet.splice(randomIndex, 1);
  }
  console.log(playNumbers)
  return playNumbers
}


function PickNumbers() {
  return (
    <p>{pickNumbers(picks)}</p>
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

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

function pickNumbers(picks) {
  let sheet = generateSheet();
  let playNumbers = []
  for (let i=0; i<picks; i++) {
    let randomIndex = Math.floor(((Math.random())*(36-i)));
    playNumbers.push(sheet[randomIndex]);
    sheet.splice(randomIndex, 1);
  }
  console.log(playNumbers)
  return playNumbers
}

pickNumbers();

function PickNumbers() {
  console.log(pickNumbers())
  return (
    <p>{pickNumbers()}</p>
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

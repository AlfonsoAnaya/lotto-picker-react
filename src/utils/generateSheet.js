let gameLength = 36;

function generateSheet() {
    let sheet = [];
    for (let i=0; i<gameLength; i++) {
        sheet.push(i+1);
    }
    return sheet;
}

export default generateSheet;
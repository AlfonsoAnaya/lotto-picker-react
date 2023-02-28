function generateSheet(extension) {
    let sheet = [];
    for (let k=0; k<extension; k++) {
        sheet.push(k+1);
    }
    return sheet;
}

export default generateSheet;
function generateSheet(extension) {
    let sheet = [];
    for (let i=0; i<extension; i++) {
        sheet.push(i+1);
    }
    return sheet;
}

export default generateSheet;
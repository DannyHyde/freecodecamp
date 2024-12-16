/********************************************************
 *  This is the final script for the project copied out *
 *      of 'script.js.txt' as I'm weird and kept all    *
 *      code and steps for reference as I learn. I have *
 *      NO idea how I'm to use it, but there we go      *
 ********************************************************/

const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount){
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

let result = "";
for (const row of rows) {
    result = result + row + "\n";
}
console.log(result);
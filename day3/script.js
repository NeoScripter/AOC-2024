const path = require("path");
const fs = require("fs");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

// Helpers

function extractAllMatches(string) {
    const regex = /mul\(\d+,\d+\)/g;
    return string.match(regex);
}

function convertExpressionToDigits(expression) {
    return expression.match(/\d+/g).map(Number);
}

function takeValidSlicesOfInput(string) {
    const startPattern = "don't()";
    const endPattern = "do()";
    let result = string;

    while (true) {
        const start = result.indexOf(startPattern);
        if (start === -1) break;

        const end = result.indexOf(endPattern, start + startPattern.length);
        if (end === -1) break;

        const leftSlice = result.slice(0, start);
        const rightSlice = result.slice(end + endPattern.length);

        result = leftSlice + rightSlice;
    }

    return result;
}

// Main Function

function part1(input) {
    const allMatches = extractAllMatches(input);
    return allMatches.reduce((acc, expression) => {
        const [digit1, digit2] = convertExpressionToDigits(expression);
        return acc += digit1 * digit2;
    }, 0)
}
function part2(input) {
    const validString = takeValidSlicesOfInput(input);
    const allMatches = extractAllMatches(validString);
    return allMatches.reduce((acc, expression) => {
        const [digit1, digit2] = convertExpressionToDigits(expression);
        return acc += digit1 * digit2;
    }, 0)
}
console.log(part2(input));

module.exports = { part2 };

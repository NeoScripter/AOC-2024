const path = require("path");
const fs = require("fs");

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

// Helpers

function breakIntoDigits(line) {
    return line.split(" ").map(Number);
}

function areStrictlyAscending(numberArray) {
    return numberArray.every((num, index) => index === 0 || num > numberArray[index - 1]);
}

function areStrictlyDescending(numberArray) {
    return numberArray.every((num, index) => index === 0 || num < numberArray[index - 1]);
}

function hasValidAdjacentDifferences(numberArray) {
    return numberArray.every((num, index) => {
        if (index === 0) return true;
        const difference = Math.abs(num - numberArray[index - 1]);
        return difference >= 1 && difference <= 3;
    });
}

function generatePossibleNumberArrays(initialNumberArray) {
	const possibleArrays = [];

	for (let i = 0; i < initialNumberArray.length; i++) {
        possibleArrays.push(initialNumberArray.toSpliced(i, 1));
    }

	return possibleArrays;
}

function checkArray(array) {
	if ((areStrictlyDescending(array) || areStrictlyAscending(array)) && hasValidAdjacentDifferences(array)) return true;

	return false;
}

function part1(line) {
    const nums = breakIntoDigits(line);

	return checkArray(nums);
}

function part2(line) {
    const nums = breakIntoDigits(line);
	const possibleArrays = generatePossibleNumberArrays(nums);

	// If every array returns false, the every method will return true, so we are checking if at least one of the arrays returns true
	return !possibleArrays.every(array => !checkArray(array))
}

// Main Function

function main(input) {
    return input
        .trim()
        .split("\r\n")
        .reduce((acc, line) => (acc += part1(line) ? 1 : 0), 0);
}

module.exports = { main };

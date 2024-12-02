const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

function part2(input) {
    const lines = input.trim().split('\r\n');

    const list1 = [];
    const list2 = [];

    lines.forEach((line, index) => {
        const columns = line.trim().split(/\s+/);
        list1.push(columns[0]);
        list2.push(columns[1]);
    });

    list1.sort();
    list2.sort();
    let sum = 0;

    for (let i = 0; i < list1.length; i++) {
        sum += Math.abs(list1[i] - list2[i]);
    }

    console.log(sum);
}

part2(input);

module.exports = { part2 };
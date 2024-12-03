const { part2 } = require('./script');

const path = require("path");
const fs = require("fs");

const input = fs
	.readFileSync(path.join(__dirname, 'test.txt'), 'utf8');


test('Part 1 test', () => {
    expect(part2(input)).toBe(48);
})

/* test('check line 1', () => {
    expect(checkLine('7 6 4 2 1')).toBe(true);
})

test('check line 2', () => {
    expect(checkLine('1 2 7 8 9')).toBe(false);
})

test('check line 3', () => {
    expect(checkLine('9 7 6 2 1')).toBe(false);
})

test('check line 4', () => {
    expect(checkLine('1 3 2 4 5')).toBe(true);
})

test('check line 5', () => {
    expect(checkLine('8 6 4 4 1')).toBe(true);
})

test('check line 6', () => {
    expect(checkLine('1 3 6 7 9')).toBe(true);
}) */
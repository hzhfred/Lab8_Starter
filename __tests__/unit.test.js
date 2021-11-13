// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor


test('isPhoneNumber false1', () => {
    expect(functions.isPhoneNumber('858-250-96133')).toBe(false);
});
test('isPhoneNumber false2', () => {
    expect(functions.isPhoneNumber('858-250-9613-3')).toBe(false);
});
test('isPhoneNumber true1', () => {
    expect(functions.isPhoneNumber('858-250-9613')).toBe(true);
});
test('isPhoneNumber true2', () => {
    expect(functions.isPhoneNumber('8582509613')).toBe(true);
});


test('isEmail false1', () => {
    expect(functions.isEmail('z8huang@@ucd.edu')).toBe(false);
});
test('isEmail false2', () => {
    expect(functions.isEmail('z8huang@@ucd..edu')).toBe(false);
});
test('isEmail true1', () => {
    expect(functions.isEmail('z8huang@ucd.edu')).toBe(true);
});
test('isEmail true2', () => {
    expect(functions.isEmail('z8huang@gmail.com')).toBe(true);
});



test('isStrongPassword false1', () => {
    expect(functions.isStrongPassword('2222')).toBe(false);
});
test('isStrongPassword false2', () => {
    expect(functions.isStrongPassword('1111')).toBe(false);
});
test('isStrongPassword true1', () => {
    expect(functions.isStrongPassword('z8huangucdedu')).toBe(true);
});
test('isStrongPassword true2', () => {
    expect(functions.isStrongPassword('z8huanggmailcom')).toBe(true);
});



test('isDate false1', () => {
    expect(functions.isDate('011 / 02 / 2020')).toBe(false);
});
test('isDate false2', () => {
    expect(functions.isDate('01 / 02 / 20201')).toBe(false);
});
test('isDate true1', () => {
    expect(functions.isDate('11 / 02 / 2020')).toBe(true);
});
test('isDate true2', () => {
    expect(functions.isDate('1 / 2 / 2020')).toBe(true);
});




test('isHexColor false1', () => {
    expect(functions.isHexColor('#FFCC00#FFCC00')).toBe(false);
});
test('isHexColor false2', () => {
    expect(functions.isHexColor('FFCC00')).toBe(false);
});
test('isHexColor true1', () => {
    expect(functions.isHexColor('#FFCC00')).toBe(true);
});
test('isHexColor true2', () => {
    expect(functions.isHexColor('#FC0')).toBe(true);
});
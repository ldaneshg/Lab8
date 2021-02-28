
const icon = require('../assets/scripts/main');

describe('icon 0 tests', () => {
    test('volumeLevel 0 has icon 0', () => {
        expect(icon(0)).toMatch(/volume-level-0/);
    });
});

describe('icon 1 tests', () => {
    test('volumeLevel 10 has icon 1', () => {
        expect(icon(10)).toMatch(/volume-level-1/);
    });

    test('volumeLevel 33 has icon 1', () => {
        expect(icon(33)).toMatch(/volume-level-1/);
    });
});


describe('icon 2 tests', () => {
    test('volumeLevel 40 has icon 2', () => {
        expect(icon(40)).toMatch(/volume-level-2/);
    });

    test('volumeLevel 66 has icon 2', () => {
        expect(icon(66)).toMatch(/volume-level-2/);
    });
});


describe('icon 2 tests', () => {
    test('volumeLevel 80 has icon 3', () => {
        expect(icon(80)).toMatch(/volume-level-3/);
    });
});
// Write your tests here!
const {expect} = require("chai");
const caesar = require("../src/caesar");



describe("caesaer encryption", () => {
    it ("should handle shifts that go past the end of the alphabet.", () => {
            const testWord = "zebramagazine";
            const shift = 3;
            const actual = caesar(testWord,shift);
            const expected = `cheudpdjdclqh`;

            console.log(actual);
            expect(actual).to.eql(expected);
    });

    it ("should maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding. ", () => {
        const testWord = "the good-man";
        const actual = caesar(testWord,3);
        const expected = `wkh jrrg-pdq`;

        expect(actual).to.eql(expected);
    });

     it ("should ignore capital letters. (For example, the results of A Message and a message should be the same.) ", () => {
            const testWords = ["KING me", "king me"];
            const shiftvalue = 3;
            const actual = [caesar(testWords[0],shiftvalue), caesar(testWords[1],shiftvalue)];
            const expected = [`nlqj ph`, `nlqj ph`];
    
            expect(actual).to.eql(expected);
    });

    it ("It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
        const testWord = `who knew`;
        const shifValues = [0,-28,29];
        const actual = [caesar(testWord,shifValues[0]), caesar(testWord, shifValues[1]), caesar(testWord,shifValues[2])];
        const expected = [false, false, false];

        expect(actual).to.eql(expected);
});

it ("It should allow for negative shift values that shift to the left ", () => {
    const testWord = `who anew`;
    const shiftValue = -2;
    const actual = caesar(testWord, shiftValue);
    const expected = `ufm ylcu`;

    expect(actual).to.eql(expected);
});

it ("should allow for decoding when encode set to false. ", () => {
    const testWord = "wkh jrrg-pdq";
    const actual = caesar(testWord,3, false);
    const expected = `the good-man`;

    expect(actual).to.eql(expected);
});

});
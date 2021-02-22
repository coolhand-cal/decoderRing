// Write your tests here!
const {expect} = require("chai");
const polybius = require("../src/polybius");




describe("polybius encryption", () => {
    it ("should return an encoded message when passed a string", () => {
            const testWord = "all";
            const actual = polybius(testWord,true);
            const expected = `111313`;

            expect(actual).to.eql(expected);
    });

    it ("should translate the letters i and j to 42", () => {
        const testWords = ["i", "j"];
        const actual = [polybius(testWords[0],true), polybius(testWords[1], true)];
        const expected = [`42`,`42`];

        expect(actual).to.eql(expected);
});

    it ("should ignore capital letters ", () => {
        const testWords = ["IMeAnit", "imeanit"];
        const actual =[ polybius(testWords[0],true), polybius(testWords[1],true)];
        const expected = [`42235111334244`, `42235111334244`];

        expect(actual).to.eql(expected);
    });

     it ("should maintain spaces when encoding or decoding ", () => {
            const testWords = ["KING me", `22434341 231133`];
            const actual = [polybius(testWords[0],true), polybius(testWords[1],false)];
            const expected = [`52423322 2351`, `good man`];
    
            expect(actual).to.eql(expected);
    });

    it ("should translate 42 to (i/j) When decoding. ", () => {
        testWord = `52423322 2351`;
        const actual = polybius(testWord,false);
        const expected = `k(i/j)ng me`;

        expect(actual).to.eql(expected);
});
});
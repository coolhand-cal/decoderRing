// Write your tests here!
const {expect} = require("chai");
const substitution = require("../src/substitution");

describe("substitution encryption", () => {
    it ("should return false if given alphabet is not 26 chatacters long", () => {
            const message = `love`;
            const code = `alfad`;
            const actual = substitution(message,code);
            const expected = false;

            expect(actual).to.eql(expected);
    });

    it ("should correctly translates the given phrase", () => {
        const message = `message`;
        const code = `plmoknijbuhvygctfxrdzeswaq`;
        const actual = substitution(message,code);
        const expected = `ykrrpik`;

        expect(actual).to.eql(expected);
    });

    it ("should return false if there are duplicate letters in code", () => {
        const message = `message`;
        const code = `plcoknijbuhvygctfxrdzecwaq`;
        const actual = substitution(message,code);
        const expected = false;

        expect(actual).to.eql(expected);
    });

    it ("should ignore capital letters", () => {
        const messages = [`message`, `MeSsAgE`];
        const code = `plmoknijbuhvygctfxrdzeswaq`;
        const actual = [substitution(messages[0],code), substitution(messages[1], code)];
        const expected = [`ykrrpik`,`ykrrpik`];

        expect(actual).to.eql(expected);
    });

    it ("should handle spaces", () => {
        const message = `mess age`;
        const code = `plmoknijbuhvygctfxrdzeswaq`;
        const actual = substitution(message,code);
        const expected = `ykrr pik`;

        expect(actual).to.eql(expected);
    });

    it ("should decode a message when encode is set to false", () => {
        const message = `ykrrpik`;
        const code = `plmoknijbuhvygctfxrdzeswaq`;
        const actual = substitution(message,code,false);
        const expected = `message`;

        expect(actual).to.eql(expected);
    });

    it ("should decode if code has unique characters", () => {
        const message = `!?rrpi?`;
        const code = `plmo?nijbuhv!gctfxrdzeswaq`;
        const actual = substitution(message,code,false);
        const expected = `message`;

        expect(actual).to.eql(expected);
    });

    it ("should handle spaces when decoding", () => {
        const message = `ykrr pik`;
        const code = `plmoknijbuhvygctfxrdzeswaq`;
        const actual = substitution(message,code, false);
        const expected = `mess age`;

        expect(actual).to.eql(expected);
    });
});
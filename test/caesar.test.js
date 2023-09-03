const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
    it("should return false if shift amount is 0", () => {
     const actual = caesar('thinkful', 0);
     expect(actual).to.be.false;
    });

    it("should return false if shift > 25", () => {
        const actual = caesar('thinkful', 26);
        expect(actual).to.be.false;
    });

    it("should return false if shift < -25", () => {
        const actual = caesar('thinkful', -26);
        expect(actual).to.be.false;
    });

    it("should ignore capital letters, spaces and non-alphabet characters", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.equal(expected);
    });

    it("should wrap alphabet back to the beginning with a positive shift", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!";
  
        expect(actual).to.equal(expected);
    });
  
    it("should wrap alphabet backwards with a negative shift", () => {
        const actual = caesar("This is a secret message!", -23);
        const expected = "wklv lv d vhfuhw phvvdjh!";
  
        expect(actual).to.equal(expected);
      }); 
});



 
  
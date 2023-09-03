const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  it("should be a function", () => {
    expect(substitution).to.be.a("function");
  });

  describe("error handling", () => {
    it("should return false if alphabet paramater is missing", () => {
      let alphabet = undefined;
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    it("should return false if alphabet paramater is not 26 characters", () => {
      let alphabet = "qwertyuiop";
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    it("should return false if alphabet paramater has repeating characters", () => {
      let alphabet = "kittykittykitty";
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      let alphabet = "mnbvcxzlkjhgfdsapoiuytrewq";
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("ulkdhxyg");
    });
    it("should work with unique characters", () => {
      let alphabet = "!@#$%^&*()qwertyuiopasdfgh";
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("p*(rq^aw");
    });
    it("should preserve spaces", () => {
      let alphabet = "mnbvcxzlkjhgfdsapoiuytrewq";
      let input = "katie gray";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("hmukc zomw");
    });
    it("should ignore capital letters", () => {
      let alphabet = "mnbvcxzlkjhgfdsapoiuytrewq";
      let input = "Thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("ulkdhxyg");
    });
  });

  describe("decoding", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      let alphabet = "mnbvcxzlkjhgfdsapoiuytrewq";
      let input = "ulkdhxyg";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("thinkful");
    });
    it("should work with unique characters", () => {
      let alphabet = "!@#$%^&*()qwertyuiopasdfgh";
      let input = "p*(rq^aw";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("thinkful");
    });
    it("should preserve spaces", () => {
      let alphabet = "mnbvcxzlkjhgfdsapoiuytrewq";
      let input = "hmukc zomw";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("katie gray");
    });
    it("should ignore capital letters", () => {
      let alphabet = "mnbvcxzlkjhgfdsapoiuytrewq";
      let input = "ulKdhxYg";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("thinkful");
    });
  });
});

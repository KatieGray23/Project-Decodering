const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius()", () => {
  describe("encoding", () => {
    it("should translate the letters 'i' and 'j' to '42'", () => {
      expect(polybius("ij")).to.equal("4242");
    });

    it("should maintain spaces", () => {
      expect(polybius("katie gray")).to.equal("5211444251 22241145");
    });
    it("should ignore capital letters", () => {
      expect(polybius("Thinkful")).to.equal("4432423352125413");
    });
  });
  describe("decoding", () => {
    it("should decode 42 to i/j", () => {
      expect(polybius("42", false)).to.eql("i/j");
    });

    it("should ignore capital letters", () => {
      expect(polybius("5211444251", false)).to.eql(
        "kati/je"
      );
    });
    it("should maintain spaces", () => {
      expect(polybius("5211444251 22241145", false)).to.eql("kati/je gray");
    });
    it("should return false if the length of all numbers is odd", () => {
      expect(polybius("245", false)).to.be.false;
    });
  });
});

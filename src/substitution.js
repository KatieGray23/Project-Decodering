const substitutionModule = (function () {
  const decodeABC = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    const inputSplit = input.toLowerCase().split("");
    const alphabetCode = alphabet.toLowerCase().split("");
    const uniqueChars = alphabetCode.filter(
      (item, index, self) => self.indexOf(item) === index
    );

    if (uniqueChars.length !== alphabet.length) return false;

    if (encode) {
      let result = [];
      const encode = (char) => {
        const charIndex = decodeABC.indexOf(char);
        const encodedChar = alphabetCode[charIndex];
        result.push(encodedChar);
      };
      inputSplit.forEach((char) => {
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    } else if (!encode) {
      let result = [];
      const decode = (char) => {
        const charIndex = alphabetCode.indexOf(char);
        const decodedChar = decodeABC[charIndex];
        result.push(decodedChar);
      };
      inputSplit.forEach((char) => {
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

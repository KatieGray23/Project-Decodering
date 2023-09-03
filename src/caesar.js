// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }

    const lowercaseStr = input.toLowerCase();
    let newStr = "";
    for (let i = 0; i < lowercaseStr.length; i++) {
      const unicode = lowercaseStr.charCodeAt(i);
      if (unicode >= 97 && unicode <= 122) {
        let shiftedUnicode = unicode;
        if (encode) {
          shiftedUnicode += shift;
        } else {
          shiftedUnicode -= shift;
        }
        if (shiftedUnicode < 97) {
          shiftedUnicode += 26;
        } else if (shiftedUnicode > 122) {
          shiftedUnicode -= 26;
        }
        const newChar = String.fromCharCode(shiftedUnicode);
        newStr += newChar;
      } else {
        newStr += lowercaseStr[i];
      }
    }
    return newStr;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

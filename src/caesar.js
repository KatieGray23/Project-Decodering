const caesarModule = (function () {
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

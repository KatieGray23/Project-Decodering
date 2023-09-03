const polybiusModule = (function () {
  const encodeValues = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };
  const decodeValues = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "i/j",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function polybius(input, encode = true) {
    let encodedArr = [];
    if (encode) {
      const lowercaseStr = input.toLowerCase().split("");

      for (let i = 0; i < lowercaseStr.length; i++) {
        let letter = lowercaseStr[i];
        let encodedLetter = encodeValues[letter];
        if (letter === " ") {
          encodedLetter = letter;
        }
        encodedArr.push(encodedLetter);
      }
      return encodedArr.join("");
    } else if (!encode) {
      let numStr = input.replace(" ", 99);
      for (let i = 0; i < numStr.length; i++) {
        if (numStr.length % 2 !== 0) {
          return false;
        } else {
          numStrSplit = numStr.toString().match(/.{1,2}/g);
          let number = numStrSplit[i];
          if (number === "99") {
            number = " ";
          }
          let decodedLetter = decodeValues[number];
          if (number === " ") {
            decodedLetter = number;
          }
          encodedArr.push(decodedLetter);
        }
      }
      return encodedArr.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

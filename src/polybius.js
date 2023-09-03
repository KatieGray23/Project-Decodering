/* 



5. The `encodeFunc` function is defined to encode letters into numbers. 
It iterates through the input string and checks if each character is a 
letter or not. If it's not a letter, it directly adds it to the `result`.
If it's a letter, it matches the letter with the values in the `grid` 
and adds the corresponding key to the `result`.

6. The `decodeFunc` function is defined to decode numbers into letters. 
It iterates through the input string and checks if each character is a 
space or not. If it's a space, it adds it to the `result`. If not, it 
combines two characters to form a number (except for 'i/j', which is 
handled separately) and then matches the number with the keys in the 
`grid` to get the corresponding value and adds it to the `result`.

7. The `isEven` function is defined to check if the input length is 
even (used for decoding). It counts the number of non-space characters 
and checks if the count is even or not.

*/

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
    // modulus / remainder ;; 1112131 = return false on decode
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

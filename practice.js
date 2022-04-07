export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

/**
 *
 * @param {string} str
 */
export function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

/**
 *
 * @param {string} str
 * @param {Number} offset
 */
export const caesarCipher = (str, offset) => {
  const lowstr = "abcdefghijklmnopqrstuvwxyz";
  const upstr = lowstr.toUpperCase();
  let newstr = "";

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (lowstr.includes(ch)) {
      newstr += lowstr[(lowstr.indexOf(ch) + offset) % 26];
    } else if (upstr.includes(ch)) {
      newstr += upstr[(upstr.indexOf(ch) + offset) % 26];
    } else {
      newstr += ch;
    }
  }

  return newstr;
};

/**
 *
 * @param {Array} arr
 */
export function analizeArray(arr) {
  const length = arr.length;
  let total = 0;
  arr.forEach((val) => {
    total += val;
  });
  const average = Math.round(total / length);
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    length,
    min,
    max,
  };
}

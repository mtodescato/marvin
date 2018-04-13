/*
 * file: global.js
 * version: 0.1
 * type: javascript module
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings: global utils func
 * changes:
 * * Denis Mazzucato    | 2018/04/13 | file creation
 */

/* function that convert a string from UPPER_CASE to camelCase
 * example: WORD_WORD => wordWord
 */
const toCamelCase = (string) => {
  let out = '';
  for (let x = 0; x < string.length; x += 1) {
    const c = string.charAt(x);
    if (c === '_') {
      out = out.concat(string.charAt(x + 1));
      x += 1;
    } else {
      out = out.concat(c.toLowerCase());
    }
  }
  return out;
};

export { toCamelCase };

export default toCamelCase; // TODO: remove when a new func is added

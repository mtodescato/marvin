/*
 * file: global.js
 * version: 0.1
 * type: javascript module
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings: global utils func
 * changes:
 * * Denis Mazzucato    | 2018/04/13 | file creation
 * * Denis Mazzucato    | 2018/04/24 | added toCamelCase and toUpperCase
 * * Denis Mazzucato    | 2018/04/26 | added validator
 * * Denis Mazzucato    | 2018/04/28 | added reduce
 */

/* function that convert a string from UPPER_CASE to camelCase
 * example: WORD_WORD => wordWord
 */
export const toCamelCase = (string) => {
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

/* function that convert a string from camelCase to UPPER_CASE
 * example: wordWord => WORD_WORD
 */
export const toUpperCase = (string) => {
  let out = '';
  for (let x = 0; x < string.length; x += 1) {
    const c = string.charAt(x);
    if (c === c.toUpperCase()) out = out.concat('_');
    out = out.concat(c.toUpperCase());
  }
  return out;
};

export const throwError = (message = '') => {
  throw new Error(message);
};

/* validator class
 */
class Validator {
  constructor() {
    this.validators = [
      init => init,
    ];
  }

  // require new validator
  addValidator(func) {
    if (func instanceof Function) {
      this.validators.push(func);
    } else {
      throwError('funtion passed to validator is not a function');
    }
    return this;
  }

  validate(init) {
    return this.validators.reduce((accumulator, validator) => validator(accumulator), init);
  }
}
export const validator = () => new Validator();

/* function that reduce a transformation
 * reduce({ a: 1, b: 2, c: 3 }, ['b']) => { b: 2 }
 */
export const reduce = (obj, params, defaultValue = {}) =>
  params.reduce((accumulator, param) => ({
    ...accumulator,
    [param]: obj[param] || defaultValue,
  }), {});

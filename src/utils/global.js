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

export const validateAddress = (address, error = 'Address must be valid') => {
  if (address && address.length === 42 && address[0] === '0' && address[1] === 'x') return address;
  throw new Error(error);
};

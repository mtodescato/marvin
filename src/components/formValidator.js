/**
 * Checks if the given string is valid
 *
 * @method stringFormValidation
 * @param {String} string the given HEX adress
 * @return {String}
*/export function stringFormValidation(string) {
  if (string.length < 3) {
    return 'name too short(min. 3 characters)';
  } else
  if (!string.match(/^[A-Za-z]+$/)) {
    return 'only letters allowed';
  }
  return 'isValid';
}

/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {String}
*/
export function addressValidation(address) {
  if (address.length === 42 && address[0] === '0' && address[1] === 'x') {
    return 'isValid';
  } return 'invalid address';
}


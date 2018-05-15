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
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return 'invalid address';
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return 'invalid address';
  }
  return 'isValid';
}


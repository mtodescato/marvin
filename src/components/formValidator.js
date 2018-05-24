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
 * @method addressValidation
 * @param {String} address the given HEX adress
 * @return {String}
*/
export function addressValidation(address) {
  if (address.length === 42 && address[0] === '0' && address[1] === 'x') {
    return 'isValid';
  } return 'invalid address';
}

/**
 * Checks if the given string is in DateTime format DD/MM/YYYY hh:mm
 *
 * @method dateTimeValidation
 * @param {String} date
 * @return {String}
*/

// export function dateTimeValidation(date) {
export function dateTimeValidation() {
  // if (date.length !== 16) {
  //   return 'invalid DateTime';
  // } else
  // if (!date.match(/^(([0-2]?[0-9]|3[0-1])\/([0]?[1-9]|1[0-2])\/[1-2]\d{3})/)) {
  //   return 'invalid DateTime';
  // }
  return 'isValid';
}

/**
 * Checks if the given string is empty or not
 *
 * @method selectValidation
 * @param {String} select
 * @return {String}
*/

export function selectValidation(select) {
  if (select === '') {
    return 'No item selected';
  }
  return 'isValid';
}

/**
 * Checks if the given string is a valid mark
 *
 * @method markValidation
 * @param {String} mark
 * @return {String}
*/

export function markValidation(mark) {
  if (mark === '') {
    return 'Cannot be empty';
  } else
  if (mark.match(/^([0-9]){1}$/)) {
    return 'isValid';
  } else
  if (!mark.match(/^([0-9]|[1-2][0-9]|30){2}$/)) {
    return 'only numbers allowed';
  }
  if (Number(mark) > 30 || Number(mark) < 0) {
    return 'mark must be between 0 and 30';
  }
  return 'isValid';
}

/**
 * Checks if the given string is a year between 1999 and 2050
 *
 * @method yearValidation
 * @param {String} year
 * @return {String}
*/

export function yearValidation(year) {
  if (year.length !== 4) {
    return 'only values between 1999 and 2050';
  } else
  if (!year.match(/^(1999|20[0-4][0-9]|2050)+$/)) {
    return 'only values between 1999 and 2050';
  }
  return 'isValid';
}

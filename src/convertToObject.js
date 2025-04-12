'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssDeclarations = sourceString.split(';');
  let obj = {};

  for (const declaration of cssDeclarations) {
    const colon = declaration.indexOf(':');

    if (colon === 0) continue;

    const property = declaration.substring(0, colon).trim();
    const value = declaration.substring(colon + 1).trim();

    // check if entry is not just whitespace
    if (property !== '' && value !== '') {
      obj[property] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;

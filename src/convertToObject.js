'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration)
    .reduce((result, declaration) => {
      const colonPos = declaration.indexOf(':');
      // move to the next declaration
      if (colonPos === -1) return result;

      const property = declaration.substring(0, colonPos).trim();
      const value = declaration.substring(colonPos + 1).trim();

      if (property && value) {
        result[property] = value;
      }

      return result;
    }, {});
}

module.exports = convertToObject;

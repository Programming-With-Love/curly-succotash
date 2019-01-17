/**
 * Input validator - ensure input is not empty.
 *
 * @param {string} name
 * @return {boolean|string}
 */
const inputRequired = name => {
  return value => (/.+/.test(value) ? true : `${name} is required`)
}

module.exports = { inputRequired }

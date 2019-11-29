/**
 * @param {object[]} errors – validation errors
 * @returns {object[] | string} – formatted validation errors
 */
export const formatErrors = errors => {
    const formattedErrors = {}
    let isAnyOf = false
    errors.forEach(e => {
      e.name === 'anyOf' && (isAnyOf = true)
    })
    if (isAnyOf) {
      return 'At least Has Boys or Has girls or Has coed fields is required'
      // @TODO add dynamic validation with fields
    }
    for (const error of errors) {
      const name = error.property.split('.').pop()
      formattedErrors[name] = getPropertySafely(error, 'schema', 'message', error.name) || error.stack.split('.').pop()
    }
    return formattedErrors
  }
  
  /**
   * @param {object} obj – obj to get properties from
   * @param {string} prop – property on object we need to access
   * @param {string[]} targets – properties array from which we will take the first element
   *                             to work with as a prop on the next recursive fn call
   * @returns {string|undefined} – target field
   */
  function getPropertySafely (obj, prop, ...targets) {
    if (obj[prop] && targets.length) {
      return getPropertySafely(obj[prop], targets.shift(), ...targets)
    }
    return obj[prop]
  }
  
  /**
   * @param {string} authorization – authorization header value
   * @returns {string} – user token
   */
  export const getToken = ({ headers: { authorization } }) => {
    return authorization && authorization.replace('Bearer ', '')
  }
  
  /**
   * @param {string} string - any string
   * @returns {string} - updated string
   * */
  export const toSnakeCase = string => { // mv to utils todo
    string = string.substr(0, 1).toLowerCase() + string.slice(1)
    return string.replace(/[A-Z0-9]*/g, s => s ? `_${s.toLowerCase()}` : s)
  }
  
  /**
   * @description compose passed fns from right to left (composeRight)
   * @param {function[]} fns – array of functions to execute on x
   * @param {any} x – fns argument
   * @returns {any}
   */
  export const compose = (...fns) => x => {
    if (!fns.length) {
      return x
    }
    const last = fns.length - 1
    let res = x
    for (let i = last; i >= 0; i--) {
      res = fns[i](res)
    }
    return res
  }
  
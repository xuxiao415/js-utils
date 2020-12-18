import Ajv from 'ajv'

export default {
/**
 * 根据JSON schema校验json数据
 * @param {JSON Schema}} schema 
 * @param {待校验数据} data 
 */
  validateJsonSchema(schema, data) {
    if (!schema) {
      return true
    }
    const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
    const validate = ajv.compile(schema)
    const valid = validate(data)
    if (valid) {
      return true
    } else {
      console.log(validate.errors)
      return false
    }
  },

  /**
   * 判断字符串是否是json字符串
   * @param {字符串}} str 
   */
  isJsonString(str) {
    try {
      JSON.parse(str)
    } catch (e) {
      return false
    }
    return true
  },

  /**
   * 无异常解析
   * @param {字符串}} str 
   */
  parse(str) {
    try {
      return JSON.parse(str)
    } catch (e) {
      console.error('JSON解析异常')
      if (!str) {
        return str
      }
      return str
    }
  },

  /**
   * object转字符串
   * @param {object} object 
   */
  stringify(object) {
    if (typeof object === 'object') {
      return JSON.stringify(object)
    } else {
      return object
    }
  }
}

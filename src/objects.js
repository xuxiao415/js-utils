/**
 * 在对象指定位置加入属性
 * @param {对象} obj 
 * @param {key} key 
 * @param {value} value 
 * @param {位置} index 
 */
export function addToObject(obj, key, value, index) {
    // Create a temp object and index variable
    const temp = {}
    let i = 0
  
    // Loop through the original object
    for (const prop in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(prop)) {
        // If the indexes match, add the new item
        if (i === index && key && value) {
          temp[key] = value
        }
  
        // Add the current item in the loop to the temp obj
        temp[prop] = obj[prop]
  
        // Increase the count
        i++
      }
    }
  
    // If no index, add to the end
    if (!index && key && value) {
      temp[key] = value
    }
  
    return temp
  }
  
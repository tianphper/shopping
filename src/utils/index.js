// getType函数对元素进行类型判断
export function getType(obj){
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object',
        '[object Array]': 'array',
        '[object Function]': 'function',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp'
    };
    if(obj instanceof Element){return 'element'}
    return map[toString.call(obj)]
}
// 深拷贝
export function deepClone(data){
    var type = getType(data), obj;
    if(type === 'array'){
        obj = []
        for(var i = 0, len = data.length; i<len; i++){
            obj.push(deepClone(data[i]))
            // obj[i] = deepCopy(data[i])
        }
    } else if(type === 'object'){
        obj = {}
        for(var key in data){
            obj[key] = deepClone(data[key])
        }
    } else {
        return data;
    }
    return obj;
}
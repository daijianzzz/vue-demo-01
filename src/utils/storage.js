/*
 * @Descripttion: 本地存储模块
 * @Author: dj
 * @Date: 2020-06-26 17:31:46
 */ 

 export const setStorage = (key, val) => {
     if (typeof(val) === 'object') {
        val = JSON.stringify(val)
     }
     window.localStorage.setItem(key, val)
 }

 export const getStorage = key => {
    const data = window.localStorage.getItem(key)
    try {
        return JSON.parse(data)
    } catch (error) {
        return data
    }
}

export const removeStorage = key => {
    window.localStorage.removeItem(key)
}

export const clearStorage = () => {
    window.localStorage.clear()
}
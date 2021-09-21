import axios from 'axios';

axios.defaults.timeout = 10000;
// axios.defaults.baseURL ='http://192.168.1.164:99/api/';
// axios.interceptors.request.use(function (config) {

//     return config;

// }, function (error) {
//     return Promise.reject(error);
// });


export function get(url, params = {}){
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            console.log(err)
            reject(err.data)
        })
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err =>{
                reject(err.data)
            })
    });
}
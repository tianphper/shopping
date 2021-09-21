import { post } from "./request";

// 登录
const login = (params) => post('/login', params)

export {
    login
}

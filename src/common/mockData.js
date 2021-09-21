const Mock = require('mockjs')
// 成功mock数据
const success = (data) => ({
    errCode: 200,
    success: true,
    results: Mock.mock(data)
})
// 失败mock数据
const error = (data, errCode = -1) => ({
    errCode,
    success: false,
    results: Mock.mock(data)
})

export {
    success,
    error
}
import * as mockData from '../common/mockData'

let users = [
    {
        id: '@guid',
        name: '@cname',
        userName: 'admin',
        passWord: '123456',
        'age|20-30': 23,
        'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师'],
        'jobLevel': 0,
        'premisstionList': []
    },
    {
        id: '@guid',
        name: '@cname',
        userName: 'admin1',
        passWord: '123456',
        'age|20-30': 23,
        'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师'],
        'jobLevel': 1,
        'premisstionList': ['dashboard:read', 'user:read', 'user:add', 'role:read'],
    }
]
let usersList = {
    total: 100,
    'rows': [...users]
}

export default {
    'post|/login': (options) => {
        let { userName, passWord } = JSON.parse(options.body)
        if (userName && passWord) {
            let user = users.find(item => item.userName === userName && item.passWord === passWord);
            if(user) {
                return mockData.success(user)
            }
            return mockData.error('账号密码错误！')
        }
        return mockData.error('输入账号密码！')
    },
    'get|/user/list':  () => {
        return mockData.success(usersList)
    }
}

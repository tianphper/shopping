export default{
    routes: [
        {
            //用户管理
            path: "/user",
            name: 'user',
            component: resolve => void (require(['@/pages/user/user.vue'], resolve))
        },
        {
            //用户管理-新增编辑
            path: "/user/add",
            name: 'user-add',
            component: resolve => void (require(['@/pages/user/userAdd.vue'], resolve))
        }
    ]
}
export default{
    routes: [
        {
            //岗位管理
            path: "/role",
            name: 'role',
            component: resolve => void (require(['@/pages/role/role.vue'], resolve))
        },
        {
            //岗位管理-新增编辑
            path: "/role/add",
            name: 'role-add',
            component: resolve => void (require(['@/pages/role/roleAdd.vue'], resolve))
        }
    ]
}
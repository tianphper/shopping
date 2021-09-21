export default{
    routes: [
        {
            //权限管理
            path: "/premisstion",
            name: 'premisstion',
            component: resolve => void (require(['@/pages/premisstion/premisstion.vue'], resolve))
        },
        {
            //权限管理-新增编辑
            path: "/premisstion/add",
            name: 'premisstion-add',
            component: resolve => void (require(['@/pages/premisstion/premisstionAdd.vue'], resolve))
        }
    ]
}
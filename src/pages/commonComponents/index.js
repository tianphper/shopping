export default{
    routes: [
        {
            // 三级联动
            path: "/areaCrop",
            name: 'areaCrop',
            component: resolve => void (require(['@/pages/commonComponents/areaCrop.vue'], resolve))
        }
    ]
}
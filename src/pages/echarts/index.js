export default{
    routes: [
        {
            // 饼状图
            path: "/echarts/pie",
            name: 'echarts-pie',
            component: resolve => void (require(['@/pages/echarts/pie.vue'], resolve))
        },
        {
            // 折线图
            path: "/echarts/line",
            name: 'echarts-line',
            component: resolve => void (require(['@/pages/echarts/line.vue'], resolve))
        },
        {
            // 柱状图
            path: "/echarts/bar",
            name: 'echarts-bar',
            component: resolve => void (require(['@/pages/echarts/bar.vue'], resolve))
        },
        {
            // 可视化
            path: "/echarts/screen",
            name: 'echarts-screen',
            component: resolve => void (require(['@/pages/echarts/screen.vue'], resolve))
        }
    ]
}
<template>
    <div>
        <div class="header-name">
            饼状图
        </div>
        <el-card>
            <el-col :span="12" id="myChart1" style="height: 400px;"></el-col>
            <el-col :span="12" id="myChart2" style="height: 400px;"></el-col>
        </el-card>
    </div>
</template>

<script>
    import * as echarts from 'echarts';

    export default {
        components: { },
        data() {
            return {
                activeNames: ['1']
            }
        },
        mounted() {
            this.drawLine1()
            this.drawLine2()
        },
        methods:{
            drawLine1(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('myChart1'))
                let option = {
                    title: {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '50%',
                            data: [
                                {value: 1048, name: '搜索引擎'},
                                {value: 735, name: '直接访问'},
                                {value: 580, name: '邮件营销'},
                                {value: 484, name: '联盟广告'},
                                {value: 300, name: '视频广告'}
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            drawLine2(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('myChart2'))
                let option = {
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        top: '5%',
                        left: 'center'
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '40',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 1048, name: '搜索引擎'},
                                {value: 735, name: '直接访问'},
                                {value: 580, name: '邮件营销'},
                                {value: 484, name: '联盟广告'},
                                {value: 300, name: '视频广告'}
                            ]
                        }
                    ]
                }
                // 绘制图表
                myChart.setOption(option);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
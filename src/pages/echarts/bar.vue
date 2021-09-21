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
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // Use axis to trigger tooltip
                            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
                        }
                    },
                    legend: {
                        data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    series: [
                        {
                            name: 'Direct',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [320, 302, 301, 334, 390, 330, 320]
                        },
                        {
                            name: 'Mail Ad',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: 'Affiliate Ad',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: 'Video Ad',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [150, 212, 201, 154, 190, 330, 410]
                        },
                        {
                            name: 'Search Engine',
                            type: 'bar',
                            stack: 'total',
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: 'series'
                            },
                            data: [820, 832, 901, 934, 1290, 1330, 1320]
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
                    legend: {},
                    tooltip: {},
                    dataset: {
                        source: [
                            ['product', '2015', '2016', '2017'],
                            ['Matcha Latte', 43.3, 85.8, 93.7],
                            ['Milk Tea', 83.1, 73.4, 55.1],
                            ['Cheese Cocoa', 86.4, 65.2, 82.5],
                            ['Walnut Brownie', 72.4, 53.9, 39.1]
                        ]
                    },
                    xAxis: {type: 'category'},
                    yAxis: {},
                    // Declare several bar series, each will be mapped
                    // to a column of dataset.source by default.
                    series: [
                        {type: 'bar'},
                        {type: 'bar'},
                        {type: 'bar'}
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
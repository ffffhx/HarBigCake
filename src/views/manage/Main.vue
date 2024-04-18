<template>
    <div class="mainContainer">
        <p>首页 </p>
        <div class="top">
            <div class="totalOrder">
                <p>总点单量:</p>
                <p>114514单</p>
            </div>
            <div class="todayDeal">
                <p>今日成交额:</p>
                <p>114514元</p>
            </div>
            <div class="materialCost" id="materialCost">
                <p>季度物料成本</p>
                <p>114514元</p>
            </div>
            <div class="averageGet" id="averageGet">
                <p>季度平均利率:</p>
                <p>114514%</p>
            </div>
            <div class="timeStatistics" id="timeStatistics">
                <p>月度工时统计</p>
                <p>114514h</p>
            </div>
        </div>
        <div class="center">
            <div class="materialManage" :style="{ width: '600px', height: '200px' }"></div>
            <div class="latestForm">
                <p>最新表单列表:</p>
                <table>
                    <tr>
                        <td>第三季度财报</td>
                    </tr>
                    <tr>
                        <td>物料采购清单</td>
                    </tr>
                    <tr>
                        <td>员工绩效考核报表</td>
                    </tr>
                    <tr>
                        <td>产品调研报告</td>
                    </tr>
                    <tr>
                        <td>市场分析与风险评估报告</td>
                    </tr>
                    <tr>
                        <td>重点信息和情况纪要</td>
                    </tr>
                </table>
            </div>
            <div class="workingPeople">
                <p>正在工作员工</p>
                <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <div class="soldStatistics" :style="{ width: '500px', height: '200px' }"></div>
            <div class="costAndGet">
                <div class="costAndGetLeft" :style="{ width: '300px', height: 'auto' }"></div>
                <div class="costAndGetRight" :style="{ width: '400px', height: 'auto' }"></div>
            </div>
        </div>



    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, ref, onUpdated } from 'vue';
import { RouterLink, RouterView, createRouter, createWebHistory, useRouter } from 'vue-router'
let internalInstance = getCurrentInstance();
let echarts: typeof import('echarts');
if (internalInstance) {
    echarts = internalInstance.appContext.config.globalProperties.$echarts;
}
let chart: echarts.ECharts | undefined;
onMounted(() => {
    const dom = document.querySelector<HTMLElement>('.materialManage');
    if (dom) {
        chart = echarts.init(dom);
    } else {
        console.error('找不到节点 .materialManage');
    }
    console.log('123456');

    // console.log(myChart);
    const option = {
        title: {
            text: 'World Population'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        series: [
            {
                name: '2011',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
                name: '2012',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ]
    };
    chart.setOption(option);
    document.querySelector<HTMLElement>('.materialManage').setAttribute('_echarts_instance_', '');
});

onUpdated(() => {
    if (chart) {
        chart.resize();
    }
});


onMounted(() => {
    const dom = document.querySelector('.soldStatistics')
    const myChart = echarts.init(dom); // 初始化echarts实例
    // console.log(myChart);
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    };
    myChart.setOption(option);
});
onMounted(() => {
    const dom = document.querySelector('.costAndGetLeft')
    const myChart = echarts.init(dom); // 初始化echarts实例
    // console.log(myChart);
    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: 'Access From',
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
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }
        ]
    };

    myChart.setOption(option);
});

onMounted(() => {
    const dom = document.querySelector('.costAndGetRight')
    const myChart = echarts.init(dom); // 初始化echarts实例
    // console.log(myChart);
    const option = {
        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [50, 250],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    { value: 40, name: 'rose 1' },
                    { value: 38, name: 'rose 2' },
                    { value: 32, name: 'rose 3' },
                    { value: 30, name: 'rose 4' },
                    { value: 28, name: 'rose 5' },
                    { value: 26, name: 'rose 6' },
                    { value: 22, name: 'rose 7' },
                    { value: 18, name: 'rose 8' }
                ]
            }
        ]
    };
    myChart.setOption(option);
});
</script>




<style scoped lang="less">
.latestForm{
    border: 2px solid gray;
    border-radius: 10%;
}
.workingPeople{
    border: 2px solid gray;
    border-radius: 10%;
}
.materialManage {
    border: 2px solid gray;
    border-radius: 10%;
}
.soldStatistics{
    border: 2px solid gray;
    border-radius: 10%;
}
.costAndGetLeft{
    border: 2px solid gray;
    border-radius: 10%;
}
.costAndGetRight{
    border: 2px solid gray;
    border-radius: 10%;
}
.mainContainer {
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
}

.costAndGet {
    display: flex;
}

.top {
    display: flex;
}

.top div {
    background-color: #fff;
    border-radius: 10%;
    margin-right: 10px;
    margin-left: 10px;
    width: 200px;
    border: 2px solid gray;
    border-radius: 10%;
}

.center {
    display: flex;
}

.bottom {
    display: flex;
}

template {
    margin: 0;
    padding: 0;
}
</style>
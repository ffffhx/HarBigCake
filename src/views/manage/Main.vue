<!--
 * @Author: ffffhx 17862926305@163.com
 * @Date: 2024-04-19 12:56:09
 * @LastEditors: ffffhx 17862926305@163.com
 * @LastEditTime: 2024-04-28 10:39:40
 * @FilePath: \HarBigCake\src\views\manage\Main.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: ffffhx 17862926305@163.com
 * @Date: 2024-04-19 12:56:09
 * @LastEditors: ffffhx 17862926305@163.com
 * @LastEditTime: 2024-04-23 11:31:16
 * @FilePath: \HarBigCake\src\views\manage\Main.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: ffffhx 17862926305@163.com
 * @Date: 2024-04-19 12:56:09
 * @LastEditors: ffffhx 17862926305@163.com
 * @LastEditTime: 2024-04-23 11:26:46
 * @FilePath: \HarBigCake\src\views\manage\Main.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="mainContainer">
        <div class="title">
            <div class="home">首页</div>
            <div class="info">
                <div class="infoIcon">
                    <upLoad></upLoad>
                </div>
                <div class="infoText">
                    <p>管理员昵称</p>
                    <p>部门/权限等级</p>
                </div>
                <el-button @click="fullScreen">全屏模式</el-button>
            </div>
        </div>
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
            <div class="materialManage" :style="{ width: '450px', height: '220px' }"></div>
            <div class="latestForm">
                <p>最新表单列表:</p>
                <!-- <tableele></tableele> -->
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
                <p>正在作业员工</p>
                <ul>
                    <li>
                        <div class="worker">
                            <div class="workerIcon">
                                <el-icon :size="45" color="white" class="is-loading">
                                    <Stamp />
                                </el-icon>
                            </div>
                            <div class="workerName">
                                牛马A
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="worker">
                            <div class="workerIcon">
                                <el-icon :size="45" color="white" class="is-loading">
                                    <Stamp />
                                </el-icon>
                            </div>
                            <div class="workerName">
                                牛马B
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="worker">
                            <div class="workerIcon">
                                <el-icon :size="45" color="white" class="is-loading">
                                    <Stamp />
                                </el-icon>
                            </div>
                            <div class="workerName">
                                牛马C
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
        <div class="bottom">
            <div class="soldStatistics" :style="{ width: '430px', height: '220px' }"></div>
            <div class="costAndGet">
                <div class="costAndGetLeft" :style="{ width: '350px', height: '220px' }"></div>
                <div style="height:200px;border-left: 3px solid #ccc;"></div>
                <div class="costAndGetRight" :style="{ width: '350px', height: '220px' }"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, ref, onUpdated } from 'vue';
import { RouterLink, RouterView, createRouter, createWebHistory, useRouter } from 'vue-router'
import upLoad from '@/components/el-components/upLoad.vue';
import tableele from '@/components/el-components/tableele.vue';
// import homeless from '@/components/el-components/leftover.vue';
let internalInstance = getCurrentInstance();
let echarts: typeof import('echarts');
function fullScreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    else {
        document.documentElement.requestFullscreen();
    }
}
if (internalInstance) {
    echarts = internalInstance.appContext.config.globalProperties.$echarts;
}
let chart: echarts.ECharts | undefined;
onMounted(() => {
    const dom = document.querySelector<HTMLElement>('.materialManage');
    chart = echarts.init(dom);
    // console.log(myChart);
    const option = {
        // style="width: 400px;",
        title: {
            text: '物料管理'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            top: 'bottom',
            textStyle: {
                color: 'red' // 设置图例文字颜色为红色
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['咖啡豆', '牛年', '糖浆', '纸杯', '吸管', '包装袋']
        },
        series: [
            {
                name: '仓位值',
                type: 'bar',
                data: [18, 23, 29, 104, 15, 98]
            },
            {
                name: '警戒值',
                type: 'bar',
                data: [19, 23, 31, 119, 51, 65]
            }
        ]
    };
    chart.setOption(option);
    if (dom) {
        dom.setAttribute('_echarts_instance_', '');
    }
});
onMounted(() => {
    const dom = document.querySelector<HTMLElement>('.soldStatistics')
    const myChart = echarts.init(dom); // 初始化echarts实例
    // console.log(myChart);
    const option = {
        title: {
            text: '销量统计'
        },
        xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月 ', '五月', '六月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [15, 43, 52, 61, 13, 54, 26],
                type: 'line'
            }
        ]
    };
    myChart.setOption(option);
    if (dom) {
        dom.setAttribute('_echarts_instance_', '');
    }
});
onMounted(() => {
    const dom = document.querySelector<HTMLElement>('.costAndGetLeft')
    const myChart = echarts.init(dom); // 初始化echarts实例
    // console.log(myChart);
    const option = {
        title: {
            text: '开支和收入情况占比'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '80%',
            left: 'center'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '60%'],
                center: ['50%', '40%'],
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
                    show: true
                },
                data: [
                    { value: 1048, name: '员工薪资' },
                    { value: 735, name: '设备维护' },
                    { value: 580, name: '物料采购' },
                    { value: 484, name: '场地租金' },
                    { value: 300, name: '折损消耗' }
                ]
            }
        ]
    };

    myChart.setOption(option);
    if (dom) {
        dom.setAttribute('_echarts_instance_', '');
    }
});

onMounted(() => {
    const dom = document.querySelector<HTMLElement>('.costAndGetRight')
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
                radius: [20, 80],
                //radius的第一个数据为饼的直径，第二个为图表的大小
                center: ['50%', '40%'],
                //center的第一个数据代表左右，第二个数据表示上下
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
    if (dom) {
        dom.setAttribute('_echarts_instance_', '');
    }
});
</script>
<style scoped lang="less">
</style>
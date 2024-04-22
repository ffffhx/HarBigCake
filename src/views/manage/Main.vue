<template>
    <div class="mainContainer">
        <div class="title">
            <div class="home">首页</div>
            <div class="info">
                <div class="infoIcon"></div>
                <div class="infoText">
                    <p>管理员昵称</p>
                    <p>部门/权限等级</p>
                </div>
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
                            <div class="workerIcon"></div>
                            <div class="workerName" >
                               
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="worker">
                            <div class="workerIcon"></div>
                            <div class="workerName">A</div>
                        </div>
                    </li>
                    <li>
                        <div class="worker">
                            <div class="workerIcon"></div>
                            <div class="workerName">A</div>
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
    dom.setAttribute('_echarts_instance_', '');
});
onMounted(() => {
    const dom = document.querySelector('.soldStatistics')
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
    dom.setAttribute('_echarts_instance_', '');
});
onMounted(() => {
    const dom = document.querySelector('.costAndGetLeft')
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
    dom.setAttribute('_echarts_instance_', '');
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
    dom.setAttribute('_echarts_instance_', '');
});
</script>




<style scoped lang="less">
.title {
    display: flex;
    justify-content: space-between;
    height: 80px;
    .info{
        display: flex;
        .infoIcon{
        height: 70px;
        width: 70px;
        background-color: red;
    }
    }

}


.latestForm {
    border: 2px solid gray;
    border-radius: 10%;
    margin-right: 20px;
    width: 400px;

    table {
        border-collapse: collapse;

        tr:nth-child(1) {
            td:nth-child(1) {
                background-color: red;
            }
        }

        tr {

            // height: 10px;
            td {
                border: 1px solid gray;
                width: 400px;
            }
        }
    }
}


.workingPeople {
    border: 2px solid gray;
    border-radius: 10%;
    width: 240px;
    ul{
        li{
            .worker{
                display: flex;
                .workerIcon{
                    width: 50px;
                    height: 50px;
                    background-color: red;
                    margin-bottom: 5px;
                }
            }   
        }
    }
}

.materialManage {
    border: 2px solid gray;
    border-radius: 10%;
    margin-right: 20px;
}

.soldStatistics {
    border: 2px solid gray;
    border-radius: 10%;
}

.costAndGet {
    border: 2px solid gray;
    border-radius: 10%;
    margin-left: 20px;
}

.costAndGetLeft {}

.costAndGetRight {
    // border: 2px solid gray;
    // border-radius: 10%;
}

.mainContainer {
    // height: 100vh;
    // width: 100vw;
    // height: 100%;
    padding: 0;
    margin: 0;
}

.costAndGet {
    display: flex;
}

.top {
    display: flex;
    margin-bottom: 25px;
}

.top div {
    background-color: skyblue;
    border-radius: 10%;
    margin-right: 10px;
    margin-left: 10px;
    width: 200px;
    border: 2px solid gray;
    border-radius: 10%;
}

.center {
    display: flex;
    margin-bottom: 25px;
}

.bottom {
    display: flex;
}

template {
    margin: 0;
    padding: 0;
}
</style>
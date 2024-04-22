<template>
    <div class="materialContainer">
        <div class="materialHeader">
            <div>物料管理</div>
            <div>管理员个人信息</div>
        </div>
        <div class="materialMain">
            <div class="manageLeft">
                <div class="lookPositions" ref="lookPositions" id="lookPositions"
                    :style="{ width: '400px', height: '280px' }"></div>
                <div class="variationDetails">
                    <p>近期仓位变动明细</p>
                    <table>
                        <tr>
                            <td>2024年4月9日咖啡豆进货+100</td>
                        </tr>
                        <tr>
                            <td>2024年4月9日咖啡豆进货+100</td>
                        </tr>
                        <tr>
                            <td>2024年4月9日咖啡豆进货+100</td>
                        </tr>
                        <tr>
                            <td>2024年4月9日咖啡豆进货+100</td>
                        </tr>
                        <tr>
                            <td>2024年4月9日咖啡豆进货+100</td>
                        </tr>
                        <tr>
                            <td>2024年4月9日咖啡豆进货+100</td>
                        </tr>
                        <tr>
                            <td>2024年4月9日咖啡豆进货+100</td>
                        </tr>
                        <tr>
                            <td>2024年4月9日咖啡豆进货+100</td>
                        </tr>
                        <tr>
                            <td>2024年4月9日咖啡豆进货+100</td>
                        </tr>
                        <tr>
                            <td>2024年4月9日咖啡豆进货+100</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="manageRight">
                <el-form>
                    <el-item>
                        <el-input placeholder="请输入想要查询的物料" style="width: 300px; height: 50px;"></el-input>
                        <el-button style="height: 50px; margin-left: 20px;">搜索</el-button>
                    </el-item>
                </el-form>
                <div class="quickOperation">
                    <el-form>
                        <p>物料快捷操作</p>
                        <div>
                            <div>
                                <p>物料名称</p>
                                <el-input style="width: 240px" placeholder="Please input" />
                                <br>
                                <div style="display: flex;">
                                    <el-input style="width: 120px" placeholder="Please input" />
                                    <el-input style="width: 240px" placeholder="Please input" />
                                </div>
                            </div>
                            <div>
                                <div class="materialPic">

                                     </div>
                                <div class="invoicePic"> 
                                    
                                </div>
                            </div>
                        </div>
                        <br>
                        <div style="display: flex;">
                            <el-input style="width: 240px" placeholder="Please input" />
                            <el-input style="width: 240px" placeholder="Please input" />
                        </div>
                        <p>物料来源</p>
                        <el-input></el-input>
                        <div style="display: flex;">
                            <el-input style="width: 240px" placeholder="Please input" />
                            <el-input style="width: 240px" placeholder="Please input" />
                        </div>
                        <div style="display: flex;">
                            <el-input style="width: 240px" placeholder="Please input" />
                            <el-input style="width: 240px" placeholder="Please input" />
                        </div>
                        <p>操作员</p>
                        <el-input></el-input>
                        <p>备注</p>

                    </el-form>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, ref, onUpdated } from 'vue';
import { RouterLink, RouterView, createRouter, createWebHistory, useRouter } from 'vue-router'
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
onMounted(() => {
    const lookPositions = ref(null)
    // const dom = lookPositions.value;
    const dom = document.getElementById('lookPositions')
    const myChart = echarts.init(dom); // 初始化echarts实例
    const option = {
        title: {
            text: '仓位速览'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        // legend: {
        //     data: ['Evaporation', 'Precipitation', 'Temperature']
        // },
        xAxis: [
            {
                type: 'category',
                data: ['咖啡豆', '牛奶', '糖浆', '纸杯', '吸管', '包装袋'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                // name: 'Precipitation',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                // name: 'Temperature',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        series: [
            {
                name: 'Evaporation',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return (value as number) + ' ml';
                    }
                },
                data: [
                    2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                ]
            },
            {
                name: 'Precipitation',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return (value as number) + ' ml';
                    }
                },
                data: [
                    2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                ]
            },
            {
                name: 'Temperature',
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value) {
                        return (value as number) + ' °C';
                    }
                },
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };
    myChart.setOption(option);
    dom.setAttribute('_echarts_instance_', '');
});
</script>
<style scoped lang="less">
.quickOperation {
    // background-color: red;
    height: 550px;
    width: 500px;
    border: 2px solid gray;
    margin-top: 10px;
    border-radius: 5%;
}

.materialContainer {
    .materialMain {
        display: flex;

        .lookPositions {
            border: 2px solid gray;
            border-radius: 10%;
            margin-bottom: 20px;
        }

        .variationDetails {
            border: 2px solid gray;
            border-radius: 10%;
            height: 320px;
            width: 600px;

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
    }

    // display: flex;
    width: 100vw;
    height: 100vh;
    background-color: pink;

    .manageLeft {
        // width: 60%;
    }

    .manageRight {
        margin-left: 30px;
        width: 500px;
        background-color: skyblue;
    }

    .materialHeader {
        display: flex;
        width: 100%;
        height: 50px;
    }
}
</style>
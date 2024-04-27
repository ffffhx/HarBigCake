<template>
    <div class="materialContainer">
        <div class="title">
            <div class="info">
                <div class="infoIcon">
                    <el-row class="demo-avatar demo-basic">
                        <el-col :span="12">
                            <div class="demo-basic--circle">
                                <div class="block">
                                    <el-avatar :size="50" :src="circleUrl" />
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="infoText">
                    <p>管理员昵称</p>
                    <p>部门/权限等级</p>
                </div>
            </div>
        </div>
        <div class="materialMain">
            <div class="manageLeft">
                <div class="lookPositions blurbackground" ref="lookPositions" id="lookPositions"
                    :style="{ width: '400px', height: '280px' }"></div>
                <div class="variationDetails blurbackground">
                    <p>近期仓位变动明细</p>
                    <table>
                        <tr v-for="item in 10">
                            <td>2024年4月9日咖啡豆进货+100</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="manageRight blurbackground">
                <el-form>
                    <el-item>
                        <el-input placeholder="请输入想要查询的物料" style="width: 300px; height: 50px"></el-input>
                        <el-button style="height: 50px; margin-left: 20px">搜索</el-button>
                    </el-item>
                </el-form>
                <div class="quickOperation">
                    <el-form>
                        <p>物料快捷操作</p>
                        <div style="display: flex">
                            <div>
                                <p>物料名称</p>
                                <el-input style="width: 240px" placeholder="Please input" />
                                <div style="display: flex">
                                    <div>
                                        <p>变化数量</p>
                                        <el-input style="width: 120px" placeholder="Please input" />
                                    </div>
                                    <div>
                                        <p>变动类型</p>
                                        <el-input style="width: 240px" placeholder="Please input" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="materialPic" style="width: 80px; height: 50px; background-color: aqua">
                                    <input type="file" />
                                </div>
                                <div class="invoicePic" style="width: 80px; height: 50px; background-color: red"></div>
                            </div>
                        </div>
                        <div style="display: flex">
                            <div>
                                <p>生产日期</p>
                                <el-input style="width: 120px" placeholder="Please input" />
                            </div>
                            <div>
                                <p>保质期</p>
                                <el-input style="width: 240px" placeholder="Please input" />
                            </div>
                        </div>
                        <p>物料来源</p>
                        <el-input style="width: 350px" placeholder="Please input" />
                        <div style="display: flex">
                            <div>
                                <p>单价</p>
                                <el-input style="width: 120px" placeholder="Please input" />
                            </div>
                            <div>
                                <p>总价</p>
                                <el-input style="width: 240px" placeholder="Please input" />
                            </div>
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
import { getCurrentInstance, onMounted, ref, onUpdated } from "vue";
import {
    RouterLink,
    RouterView,
    createRouter,
    createWebHistory,
    useRouter,
} from "vue-router";
import { reactive, toRefs } from "vue";

const state = reactive({
    circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    sizeList: ["small", "", "large"] as const,
});

const { circleUrl, squareUrl, sizeList } = toRefs(state);
let internalInstance = getCurrentInstance();
let echarts = null;
if (internalInstance) {
    echarts = internalInstance.appContext.config.globalProperties.$echarts;
}
onMounted(() => {
    const lookPositions = ref(null);

    const dom = document.getElementById("lookPositions");
    const myChart = echarts.init(dom);
    const option = {
        title: {
            text: "仓位速览",
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
                crossStyle: {
                    color: "#999",
                },
            },
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ["line", "bar"] },
                restore: { show: true },
                saveAsImage: { show: true },
            },
        },

        xAxis: [
            {
                type: "category",
                data: ["咖啡豆", "牛奶", "糖浆", "纸杯", "吸管", "包装袋"],
                axisPointer: {
                    type: "shadow",
                },
            },
        ],
        yAxis: [
            {
                type: "value",

                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: "{value} ",
                },
            },
        ],
        series: [
            {
                name: "仓位值",
                type: "bar",

                data: [
                    2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
                ],
            },
            {
                name: "预警值",
                type: "bar",

                data: [
                    2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
                ],
            },
        ],
    };
    myChart.setOption(option);
    if (dom) {
        dom.setAttribute("_echarts_instance_", "");
    }
});
</script>
<style scoped lang="less">
.quickOperation {
    height: auto;
    width: 500px;
    border: 2px solid gray;
    margin-top: 10px;
    border-radius: 5%;
}

.title {
    float: right;

    .info {
        display: flex;

        .infoIcon {}
    }
}

.blurbackground {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.25);
}

.materialContainer {
    .materialMain {
        display: flex;

        height: 700px;

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
                    td {
                        border: 1px solid gray;
                        width: 400px;
                    }
                }
            }
        }
    }

    background-color: transparent;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
    .manageRight {
        display: flex;
        border-radius: 10px;
        margin-left: 30px;
        width: 500px;
        height: auto;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: space-around;
        justify-content: space-evenly;
        align-items: center;
    }

    .materialHeader {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 50px;
    }
}
</style>

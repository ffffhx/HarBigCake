<!--
 * @Author: ffffhx 17862926305@163.com
 * @Date: 2024-04-19 12:56:09
 * @LastEditors: ffffhx 17862926305@163.com
 * @LastEditTime: 2024-05-23 20:11:26
 * @FilePath: \HarBigCake\src\views\manage\Orders.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="ordersContainer">
        <div class="title">
            <div class="home">订单管理</div>
            <div class="info">
                <div class="infoIcon">
                    <div class="el-row demo-avatar demo-basic">
                        <div class="el-col el-col-12">
                            <div class="demo-basic--circle">
                                <div class="block"><span class="el-avatar el-avatar--circle"
                                        style="--el-avatar-size: 50px;"><img :src="imgUrl"
                                            style="object-fit: cover;"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="infoText">
                    <p>管理员昵称</p>
                    <p>部门/权限等级</p>
                </div>
            </div>
        </div>

        <el-card style="width: 1200px ;height: 600px ;overflow: auto" shadow="hover">
            <div class="mt-4">
                <el-input v-model="input3" @keydown.enter="handleSearch" style="max-width: 600px"
                    placeholder="根据订单状态查询订单" class="input-with-select">
                    <template #prepend>
                        <el-button :icon="Search" @click="handleSearch" />
                    </template>
                    <template #append>
                        <el-select v-model="select" placeholder="Select" style="width: 115px">
                            <el-option label="所有" value=6 @click="handleSelectAll" />
                            <el-option label="进行中" value=0 @click="handleSelect" />
                            <el-option label="完成" value=1 @click="handleSelect" />
                            <el-option label="未接单" value=2 @click="handleSelect" />
                        </el-select>
                    </template>

                </el-input>
            </div>
            <div class="tableOrders">
                <el-table :data="tableData" style="width: 1200px">
                    <el-table-column prop="id" label="id" width="100" />
                    <el-table-column prop="goodName" label="goodName" width="120" />
                    <el-table-column prop="price" label="price" width="120" />
                    <el-table-column prop="position" label="position" width="120" />
                    <el-table-column prop="goodId" label="goodId" width="120" />
                    <el-table-column prop="state" label="state" width="120" />
                    <!-- <el-table-column prop="state" label="state" width="120" /> -->
                    <el-table-column label="修改订单状态" width="120">
                        <template #default="scope">
                            <el-button size="small"
                                @click="handleEdit001(scope.$index, scope.row), dialogFormVisible = true" plain>
                                修改订单状态
                            </el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="查看订单详细信息" width="150">
                        <template #default="scope">
                            <el-button size="small"
                                @click="handleLook(scope.$index, scope.row), dialogTableVisible = true">
                                查看订单详细信息
                            </el-button>

                        </template>
                    </el-table-column>
                    <el-table-column label="删除订单" width="150">
                        <template #default="scope">
                            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
                                删除订单
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div>
                <div class="mb-4">
                    <el-button round @click="addOrder()">添加</el-button>
                </div>
            </div>
            <div class="demo-pagination-block">
                <!-- <div class="demonstration">All combined</div> -->
                <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :small="small"
                    :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
                    :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
            </div>
        </el-card>

        <el-dialog v-model="dialogTableVisible" title="查看订单详细信息" width="800">
            <el-table :data="lookTableData">
                <el-table-column property="id" label="id" width="150" />
                <el-table-column property="goodName" label="goodName" width="200" />
                <el-table-column property="price" label="price" />
                <el-table-column prop="position" label="position" width="120" />
                <el-table-column prop="goodId" label="goodId" width="120" />
                <el-table-column prop="state" label="state" width="120" />
            </el-table>
        </el-dialog>

        <el-dialog v-model="dialogFormVisible" title="修改订单状态" width="500">
            <el-form>
                <el-form-item label="请选择状态" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择订单状态">
                        <el-option label="进行中" value=0 />
                        <el-option label="完成" value=1 />
                        <el-option label="未接单" value=2 />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="handleEdit(), dialogFormVisible = false">
                        确认
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>

</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import requests from '@/utils/requests';
import { ElMessage } from 'element-plus';
import { onUpdated, reactive, ref } from 'vue'
const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const form = ref({
    region: null,
})
const input3 = ref('')
let input3Value = ref()
const select = ref('所有')
const total = ref(0)
let tableData = ref()
let lookTableData = ref([])
const newOrder = reactive({
    shopName: '测试',
    orderId: '514',
    orderState: '已接单',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
})
const currentPage = ref(1)
const pageSize = ref(5)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)
let rowEditId = ref(0)
let rowLookId = ref(0)
let imgUrl = localStorage.getItem("imgUrl");
const handleDelete = async (index, row) => {
    console.log(row.id, '这是row.id');
    console.log('删除订单接口');
    let id = new Array
    id.push(row.id)
    console.log(id);
    await requests({
        url: `business/order/${id}`,
        method: 'delete',
        params: {
            shopId: 0
        },
    }).then((res) => {
        if (res.code === '1') {
            // console.log('请求成功');
            ElMessage('删除成功')
        } else if (res.code === '0') {
        }
    }).catch((err) => {
        console.log(err, '没对上接口');
    })
    getList()
}
const getList = () => {
    console.log('getlist......');
    requests({
        url: 'business/orders',
        method: 'get',
        params: {
            pageSize: pageSize.value,
            pageNum: currentPage.value,
            shopId: 0
        },
    }).then((res) => {
        if (res.code === '1') {
            console.log('请求成功');
            // ElMessage.success("请求成功")
            for (let index = 0; index < res.data.list.length; index++) {
                // console.log(res.data.list[index].state);
                if (res.data.list[index].state === 0) {
                    res.data.list[index].state = '进行中'
                } else if (res.data.list[index].state === 1) {
                    res.data.list[index].state = '完成'
                } else if (res.data.list[index].state === 2) {
                    res.data.list[index].state = '未接单'
                }
            }
            tableData.value = res.data.list
            console.log('这是tableData', tableData);
            total.value = res.data.total
        } else if (res.code === '0') {
            console.log('权限不足');
            ElMessage.error("权限不足")
        }
    }).catch((err) => {
        console.log(err, '没对上接口');
    })
}
const handleSelect = () => {
    requests({
        url: 'business/orderState',
        method: 'get',
        params: {
            pageSize: pageSize.value,
            pageNum: currentPage.value,
            shopId: 0,
            state: select.value
        },
    }).then((res) => {
        if (res.code === '1') {
            console.log('查询成功');
            ElMessage.success("查询成功")
            for (let index = 0; index < res.data.list.length; index++) {
                if (res.data.list[index].state === 0) {
                    res.data.list[index].state = '进行中'
                } else if (res.data.list[index].state === 1) {
                    res.data.list[index].state = '完成'
                } else if (res.data.list[index].state === 2) {
                    res.data.list[index].state = '未接单'
                }
            }
            tableData.value = res.data.list
            console.log('这是tableData', tableData);
            total.value = res.data.total
        } else if (res.code === '0') {
            console.log('权限不足');
            ElMessage.error("权限不足")
        }
    }).catch((err) => {
        console.log(err, '没对上接口');
    })
}
const handleSelectAll = () => {
    getList()
}
const handleSearch = () => {
    input3Value.value = null
    if (input3.value === '进行中') {
        input3Value.value = 0
    } else if (input3.value === '完成') {
        input3Value.value = 1
    } else if (input3.value === '未接单') {
        input3Value.value = 2
    }
    if ((input3Value.value !== 0) && (input3Value.value !== 1) && (input3Value.value !== 2)) {
        console.log(input3Value.value, '这是input3Value.value');
        ElMessage.error("请输入正确的订单状态 ")
        return;
    }

    // console.log("请输入正确的订单状态");
    // console.log(typeof input3.value);
    requests({
        url: 'business/orderState',
        method: 'get',
        params: {
            pageSize: pageSize.value,
            pageNum: currentPage.value,
            shopId: 0,
            state: input3Value.value
        },
    }).then((res) => {
        if (res.code === '1') {
            console.log('查询成功');
            ElMessage.success("查询成功")
            for (let index = 0; index < res.data.list.length; index++) {
                if (res.data.list[index].state === 0) {
                    res.data.list[index].state = '进行中'
                } else if (res.data.list[index].state === 1) {
                    res.data.list[index].state = '完成'
                } else if (res.data.list[index].state === 2) {
                    res.data.list[index].state = '未接单'
                }
            }
            tableData.value = res.data.list
            console.log('这是tableData', tableData);
            total.value = res.data.total
        } else if (res.code === '0') {
            console.log('权限不足');
            ElMessage.error("权限不足")
        }
    }).catch((err) => {
        console.log(err, '没对上接口');
    })
}
const handleSizeChange = (val) => {
    pageSize.value = val;
    getList();
}
const handleCurrentChange = (val) => {
    currentPage.value = val;
    getList();
}
function addOrder() {
    console.log(tableData);
    tableData.value.push(newOrder);
}
//修改订单状态 
const handleEdit001 = (index, row) => {
    rowEditId.value = row.id
    console.log(row, '这是row');
}
const handleEdit = () => {
    // console.log('这是row', row)
    // console.log('这是index', index)
    requests({
        url: 'business/order',
        method: 'put',
        params: {
            orderId: rowEditId.value,
            state: form.value.region,
            shopId: 0
        },
    }).then((res) => {
        if (res.code === '1') {
            console.log('这是修改订单状态的接口');
            ElMessage.success("修改成功")
        } else if (res.code === '0') {
            ElMessage.error("修改失败")
        }
    }).catch((err) => {
        console.log(err, '没对上接口');
    })
    requests({
        url: 'business/orders',
        method: 'get',
        params: {
            pageSize: pageSize.value,
            pageNum: currentPage.value,
            shopId: 0
        },
    }).then((res) => {
        if (res.code === '1') {
            for (let index = 0; index < res.data.list.length; index++) {
                if (res.data.list[index].state === 0) {
                    res.data.list[index].state = '进行中'
                } else if (res.data.list[index].state === 1) {
                    res.data.list[index].state = '完成'
                } else if (res.data.list[index].state === 2) {
                    res.data.list[index].state = '未接单'
                }
            }
            tableData.value = res.data.list
            console.log('这是tableData', tableData);
            total.value = res.data.total
        } else if (res.code === '0') {
            console.log('权限不足');
            ElMessage.error("权限不足")
        }
    }).catch((err) => {
        console.log(err, '没对上接口');
    })
    form.value.region = null
}
// const confirm = 
const lookList = () => {
    requests({
        url: 'business/order',
        method: 'get',
        //params是将参数拼接到url后面，
        //data是以键值对的形式放到请求体中
        params: {
            orderId: rowLookId.value,
            shopId: 0
        },
    }).then((res) => {
        if (res.code === '1') {
            lookTableData.value = []
            console.log(res.data.order, '这是res.data.order');
            lookTableData.value.push(res.data.order)
            console.log('这是查看订单状态的接口');
            ElMessage.success("查看成功")
        } else if (res.code === '0') {
            ElMessage.error("查看失败")
        }
    }).catch((err) => {
        console.log(err, '没对上接口');
    })
}
const handleLook = (index, row) => {
    rowLookId.value = row.id
    console.log('这是row', row)
    // console.log('这是index', index)
    lookList()
}

localStorage.getItem("token");
getList();
</script>
<style>
.ordersContainer {
    width: 100%;
}

/* el-table-column{
    height: 10px;
} */
</style>
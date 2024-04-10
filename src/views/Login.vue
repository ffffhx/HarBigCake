<template>
    <div class="loginContainer">
        <!-- <div class="test6">666</div> -->
        <!-- <button @click="toggleDark2">测试</button> -->
        <el-form class="form2" :model="form" :rules="rules" ref="formRef">

            <div class="username" >
                <el-form-item style="width: 87%; " prop="username" label="用户名">
                    <el-input placeholder="请输入用户名" v-model="form.username" size="large" ref="test" class="test100">
                        <template #prefix>
                            <el-icon>
                                <Avatar />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
            </div>
            <div class="password">
                <el-form-item style="width: 310px;margin-right: -32px;" prop="password" label="密码">
                    <el-input style="width: 240px;" placeholder="请输入密码" v-model="form.password" size="large">
                        <template #prefix>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>

                    </el-input>
                </el-form-item>
            </div>
            <div class="verify">
                <div class="yourCaptcha">
                    <el-form-item prop="validCode" label="验证码">
                        <el-input placeholder="请输入验证码" v-model="form.validCode" size="large">
                        </el-input>
                    </el-form-item>
                </div>
                <div class="getCaptcha">
                    <validCode @click="toggleDark2"></validCode>
                </div>
            </div>
            <div class="other">
                <p class="loginByPhone" @click="pushToPhoneVerify">手机验证登录</p>
                <p class="forgetPassword" @click='pushToFindPassword'>找回密码</p>
            </div>
            <div class="loginButton">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" style="width: 260px; height: 40px;">
                        登录
                    </el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>

</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElMessage } from 'element-plus';
import validCode from '@/components/validCode.vue'
import { useDark, useToggle, useColorMode } from "@vueuse/core";
import { Avatar, Lock } from "@element-plus/icons-vue";
import { useRouter } from 'vue-router'
const router = useRouter();
function pushToPhoneVerify() {
    router.push('/phoneverify')
}
function pushToFindPassword() {
    router.push('/findpassword')
}

const isDark = useDark();
const toggleDark = useToggle(isDark);
const formRef = ref()
//登录事件处理
const login = () => {
    ElMessage.success("登录成功")
}
const onSubmit = async () => {
    await formRef.value?.validate().catch((err: any) => {
        ElMessage.error("表单校验失败")
        throw err
    })
    ElMessage.success("登录成功")

}
const form = reactive({
    username: '17862926305',
    password: '12345678',
    validCode: ''
})


// const specialCharacterReg = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/;

const rules = reactive({
    username: [
        {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
        },
        {
            min: 6,
            max: 12,
            message: '请输入正确的密码',
            trigger: 'blur'
        }
    ],
    validCode: [
        {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'

        }
    ]
})
const test = ref<HTMLDivElement | null>(null)
function toggleDark2() {
    console.log('successfulTest2');
    test.value?.classList.toggle('darkMode');
}
</script>
<style lang="less"></style>
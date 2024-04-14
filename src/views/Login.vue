<template>
    <div class="loginContainer" v-next-focus>
        <el-form class="form2" :model="form" :rules="rules" ref="formRef">

            <div class="username">
                <el-form-item style="width: 87%; " prop="username" label="用户名">
                    <el-input placeholder="请输入用户名" v-model="form.username" size="large" ref="test" class="test100"
                        >
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
                    <el-input style="width: 240px;" placeholder="请输入密码" v-model="form.password" size="large"
                        type="password" >

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
                    <!-- <div v-next-focus>
                        <el-input></el-input>
                        <el-input></el-input>
                        <el-input></el-input>
                    </div> -->

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
// let j:number;
// function handelTab(j: number, e: any) {
//     const that = <typeof this>{};
//     if (that.$refs['input' + j]) {
//         that.$nextTick(() => {
//             e.target.blur()
//             let index = j + 1
//             that.$refs['input' + index].focus()
//         })
//     }

// }
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

// 登录事件处理函数，接受用户输入的登录信息，并进行表单验证。如果验证成功，则显示登录成功的提示信息。如果验证失败，则显示错误信息。
const onSubmit = async () => {
    try {
        // 等待formRef对应的表单完成验证，如果验证失败，则抛出错误并显示错误信息
        await formRef.value?.validate()
        // 登录成功，显示提示信息
        ElMessage.success("登录成功")
    } catch (err) {
        // 验证失败，显示错误信息
        ElMessage.error("表单校验失败")
        console.log('before');

        // 重新抛出错误，可以在外部进行错误处理
        throw err
        // console.log('after');

    }
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
function handleKeyPress(e: KeyboardEvent) {
    const input = e.target as HTMLInputElement;
    if (e.key === 'Enter' && input.tagName === 'INPUT') {
        const value = input.value.trim();
        const lines = value.split('\n');
        const start = input.selectionStart || 0;
        const end = input.selectionEnd || 0;
        const newLines = [...lines.slice(0, lines.length - 1), lines[lines.length - 1].slice(0, start), '\n', lines[lines.length - 1].slice(end)];
        input.value = newLines.join('');
        input.setSelectionRange(start + 1, start + 1);
        input.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
        e.preventDefault();
    }
}
document.addEventListener('keypress', handleKeyPress);
// app.directive('enterNextInput', {
//   beforeMount(el) {
//     // 监听键盘按键事件，如果是回车键，则触发下一个输入框的聚焦
//     el.addEventListener('keypress', function(e) {
//       e = e || window.event;
//       const charcode = typeof e.charCode == 'number' ? e.charCode : e.keyCode;
//       if (charcode == 13) {
//         const inputElements = document.getElementsByName('input');
//         for (let i = 0; i < inputElements.length; i++) {
//           if (inputElements[i] == document.activeElement) {
//             if (i == inputElements.length - 1) return;
//             if (!inputElements[i + 1]) return;
//             if (inputElements[i + 1].localName === 'input') {
//               inputElements[i + 1].focus();
//               return;
//             }
//           } 
//         }
//       }
//     });
//   }
// });

</script>
<style lang="less"></style>
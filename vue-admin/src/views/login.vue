<template>
  <div class="login">
    <div class="login-form">
      <n-form :label-width="80" :model="formValue" :rules="rules" :size="size" label-placement="left" ref="formRef">
        <n-form-item  path="username">
          <n-input v-model:value="formValue.username" placeholder="请输入用户名" round/>
        </n-form-item>
        <n-form-item  path="email">
          <n-input v-model:value="formValue.email" placeholder="请输入电子邮件" round/>
        </n-form-item>
        <n-form-item  path="password">
          <n-input placeholder="请输入密码" v-model:value="formValue.password" round  type="password" show-password-on="mousedown"/>
        </n-form-item>
        <span class="button">
          <n-form-item>
            <n-button @click="handleClick('login')" attr-type="button" class="button-left" type="primary" round>登录</n-button>
            <n-button @click="handleClick('register')" attr-type="button" type="info" round>注册</n-button>
          </n-form-item>
        </span>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs
} from 'vue'
import { useMessage } from 'naive-ui'
import { login, register } from '@/api/login'
const formRef = ref(null)
export default defineComponent({
  setup () {
    const { data, handleClick } = logAndReg()
    return {
      ...toRefs(data), formRef, handleClick
    }
  }
})
function logAndReg () {
  const message = useMessage()
  const data = reactive({
    size: 'medium',
    formValue: {
      username: '',
      password: '',
      email: ''
    },
    rules: {
      username: {
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      },
      password: {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      }
    }
  })
  function handleClick (type) {
    formRef.value.validate((errors) => {
      if (!errors) {
        const param = {
          name: data.formValue.username,
          password: data.formValue.password,
          email: data.formValue.email
        }
        switch (type) {
          case 'login': {
            login(param).then(res => {
              if (res?.data?.code === 200) {
                message.success('登录成功')
              } else {
                message.error(res.data.message || '登录失败，请重试')
              }
            }).catch((err) => {
              console.log(err)
            })
            break
          }
          case 'register': {
            register(param).then(res => {
              if (res?.data?.code === 200) {
                message.success('注册成功')
              } else {
                message.error(res.data.message || '注册失败，请重试')
              }
            }).catch((err) => {
              console.log(err)
            })
            break
          }
        }
      } else {
        message.error('验证失败,请好好填写相关信息')
      }
    })
  }
  return { data, formRef, handleClick }
}
</script>
<style scoped lang="less">
  .login {
    width: 100%;
    height: 100vh;
    display: flex;
    background-image: url("../assets/back.png");
    align-items: center;
    justify-content: center;

    .login-form {
      padding: 50px 50px 10px 3.125rem;
      width: 300px;
      height: 225px;
      backdrop-filter: blur(2px);
      border: 4px solid;
      border-color: transparent;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.5);

      .button {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin: 5px;

        .button-left {
          margin-right: 10px;
        }
      }
    }
  }
</style>

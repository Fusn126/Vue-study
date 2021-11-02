<template>
  <div class="login">
    <div class="login-form">
      <n-form :label-width="80" :model="formValue" :rules="rules" :size="size" label-placement="left">
        <n-form-item  path="username">
          <n-input v-model:value="formValue.username" placeholder="请输入用户名" round/>
        </n-form-item>
        <n-form-item  path="password">
          <n-input placeholder="请输入密码" v-model:value="formValue.password" round />
        </n-form-item>
        <span class="button">
          <n-form-item>
            <n-button @click="handleClick" attr-type="button" class="button-left" type="primary">登录</n-button>
            <n-button @click="handleClick" attr-type="button" type="info">注册</n-button>
          </n-form-item>
        </span>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
export default defineComponent({
  data () {
    return {
      size: 'medium',
      formValue: {
        username: '',
        password: ''
      },
      rules: {
        username: {
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        },
        password: {
          required: true,
          message: '请输入年龄',
          trigger: 'blur'
        }
      }
    }
  },
  methods: {
    handleClick () {
      console.log('我们开始了')
    }
  }
})
</script>
<style scoped lang="less">
  .login {
    width: 100%;
    height: 100vh;
    display: flex;
    background-image: url("../assets/background.png");
    align-items: center;
    justify-content: center;

    .login-form {
      padding: 50px 50px 10px 3.125rem;
      width: 300px;
      height: 200px;
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

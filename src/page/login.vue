<template>
  <div class = "main">
    <div class = "login-box">
      <h2 class="title">智汇鞋</h2>
      <h4 class="detail">全球首款老人跌倒智能急救鞋</h4>
      <el-form ref="form" :model="form" class="form" :rules="rules" status-icon>
        <el-form-item prop="loginName">
          <el-input v-model="form.loginName" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
           <el-button type="primary" class = "login-btn" @click="submitForm('form')">登录</el-button>
        </el-form-item>  
      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../style/content/login.scss";
</style>

<script>
  export default {
    data () {
      return {
        form: {
          loginName: '', // 登录手机号码
          password: '' // 登录密码
        },
        rules: { // 表单验证
          loginName: [
            {required: true, message: '请输入手机号', trigger: 'blur'},
            { min: 11, max: 11, message: '手机号码长度为11位', trigger: 'blur' }
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]

        }
      }
    },
    methods: {
      submitForm (formName) { // 提交登录表单

      }
    }
  }
</script>

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
           <el-button type="primary" class = "login-btn" @click="submitForm('form')" 
             :loading="isButtonLoading">登录</el-button>
        </el-form-item>  
      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../style/content/login.scss";
</style>

<script>
  import store from 'store'
  export default {
    data () {
      return {
        form: {
          loginName: '', // 登录手机号码
          password: '' // 登录密码
        },
        isButtonLoading: false, // 登录按钮是否在加载状态
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
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.isButtonLoading = true
            this.toLogin1()
          } else {
            return false
          }
        })
      },
      toLogin1 () { // 第一次登录
        this.$api.post('smartshoes/user/login', {
          login: this.form.loginName.replace(/(^\s*)|(\s*$)/g, ''),
          password: this.$utils.md5(this.form.password.replace(/(^\s*)|(\s*$)/g, ''))
        }, r => {
          this.toLogin2()
        }, r => {
          this.isButtonLoading = false
          this.$utils.pop(r.errMsg)
        }, 0)
      },
      toLogin2 () { // 当第一次成功才可以进行第二次
        this.$api.post('competence/loginModuleMeta', {
          login: this.form.loginName.replace(/(^\s*)|(\s*$)/g, '')
        }, r => {
          var module = r.modulelist
          if (module === null || module.length === 0) {
            this.isButtonLoading = false
            this.$utils.pop('此账号没有权限登录系统，请联系管理员申请权限')
          } else {
            window.localStorage.power = JSON.stringify(module)
            store.set('zhooson_login_token', this.form)
            this.$router.push('/home') // 跳转到home界面
          }
        }, r => {
          this.isButtonLoading = false
          this.$utils.pop(r.errMsg)
        }, 1)
      }
    }
  }
</script>

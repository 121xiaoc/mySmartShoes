<template>
  <div class='hd-main'>
    <div class = "logo-text" style="display: inline-block">
      <span class = "logo-text-title" >智汇鞋</span><br>
      <span class = "logo-text-sub">全球首款老人跌倒智能急救鞋</span>
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" 
      @select="handleSelect"
      background-color="#409EFF"
      text-color="#D7EBFC"
      active-text-color="#FFFFFF">
      <div v-for='(data, index) in power' class='item-box'>
        <el-submenu :index="data.moduleId">
          <template slot="title">{{data.moduleName}}</template>
          <span v-for = '(data, index) in data.metafunctionList'>
            <el-menu-item :index="data.metaId">{{data.metaName}}</el-menu-item>
          </span>
          </el-submenu>
      </div>
      <!-- 
      <el-menu-item index="3">订单管理</el-menu-item> -->
    </el-menu>
    <div class='logout'>
      <img src='/static/image/logout.png' @click="clickLogout"/>
    </div>
  </div>
</template>
<script>
import store from 'store'
export default {
  data () {
    return {
      activeIndex: '',
      power: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    clickLogout () { // 点击退出登录
      store.remove('zhooson_login_token')
      this.$router.push('/login')
    }
  },
  created: function () {
    // console.log(window.localStorage.power)
    this.power = JSON.parse(window.localStorage.power)
    this.activeIndex = this.power[0].metafunctionList[0].metaId
  },
  mounted: function () {
  }
}
</script>
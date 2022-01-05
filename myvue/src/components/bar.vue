<template>
  <el-header class="head" style="height: 80px;">
    <div style="margin: 0 auto;  width: 1140px; ">
      <el-image class="logo" :lazy='true' :src="require('@/image/logo1.png')"></el-image>
      <div style="display:inline;float: right;">
        <el-link :underline="false" v-on:click="handleLogin(0)">首页</el-link>
        <el-link :underline="false" v-on:click="handleLogin(1)">项目简介</el-link>
        <el-link :underline="false" v-on:click="handleLogin(2)">在线体验</el-link>
        <el-link :underline="false" href="https://gitee.com/xiao-ji-smart-home">查看源码</el-link>
      </div>
    </div>
    <el-divider style="margin-top: 0px;margin-bottom: 0px;"></el-divider>
  </el-header>
</template>

<script>
export default {
  name: "bar",
  methods:{
    handleLogin(index) {
      switch (index)
      {
        case 0: this.$router.replace('/');break;
        case 1: this.$router.push('/introduce');break;
        case 2: this.$router.push('/download');break;
      }
    },

  }
}
</script>

<style scoped>
.head{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background-color: #ffffff;
  line-height: 80px;
  height: 80px;
  white-space: nowrap;
  padding: 0;
  margin: 0 auto;
}
.logo{
  height: 35px;
  vertical-align:middle;
  z-index: 1600;
}
.el-link{
  padding-right: 1.2rem;
  padding-left: 1.2rem;
  font-size: 14px;
}
.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 0 0;
}
</style>

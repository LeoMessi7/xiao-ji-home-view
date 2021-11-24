<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
      <h3 class="title">家娃智能家居管理系统</h3>
      <el-form-item prop="username">
        <el-input  v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码">
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%">
        </el-input>
        <div class="login-code">
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button
          :loading="loading"
          @click.native.prevent="handleLogin"
          size="medium"
          type="primary"
          style="width:100%;">
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2018-2021 JiaWa.vip All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin123',
        rememberMe: false,
        code: ''
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', message: '用户名不能为空' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '密码不能为空' }
        ],
        code: [{ required: true, trigger: 'change', message: '验证码不能为空' }]
      }
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      if(this.loginForm.username === 'admin' && this.loginForm.password === 'admin123') {
        alert("登录成功");
        this.$router.push('/Index1');
      }
      else
        alert("登录失败");
      this.loading = false;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,body{height:100%;
  margin:0;
  padding:0;}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("../assets/login-background.jpg");
  background-size: cover;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}
.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 350px;
  padding: 25px 25px 5px 25px;
}
.login-form el-input{
  height: 38px;
}
.login-form.el-input input{
  height: 38px;
}
.login-code {
  width: 33%;
  height: 38px;
  float: right;
}
.login-code img {
  cursor: pointer;
  vertical-align: middle;
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color:#ffffff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
</style>


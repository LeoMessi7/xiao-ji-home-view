<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script >
export default {
  name: 'App',
  data() {
    return {
      url: "assets/login-background.jpg",
      imgList: [
        {
          url: require('@/image/k1.jpg'), //url: '../assets/lake.jpg',
        },
        {
          url: require('@/image/k2.jpg') //url: '../assets/build.jpg'
        },
        {
          url: require('@/image/k3.jpg') //url: '../assets/build.jpg'
        }
      ]
    }
  },
  mounted(){
    new  this.$wow.WOW().init()
  },
  methods:{
    handleLogin() {
      this.$router.push('/usetool');
    },
    handleLogin1() {
      this.$router.push('/introduce');
    },
    handleLogin2() {
      this.$router.push('/Login');
    }
  }
}
</script>
<style>
html,body,#app{height:100%}
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
.main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  margin-top: 80px;
  padding: 0px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}
.el-carousel__container {
  height: 400px;
}
.el-carousel-item {
  height:400px;
}
.el-carousel__arrow {
  position: center;
  top:65%;
  font-size: 30px;
}
.intro{
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 3rem;
  padding-top: 3rem;
  background-color: #f8f9fa
}
.doc{
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 3rem;
  padding-top: 3rem;
  background-color: #ffffff
}
.p-1{
  font-size:30px;
  line-height: 2;
  position:relative;
  margin:0;
}
.p-2{
  position:relative;
  margin:0;
  top:-20px;
}
.p-3{
  line-height: 2;
  text-indent: 30px;
  position:relative;
  text-align: left;
  margin:0;
}
.a-1{
  line-height: 2;
  position:relative;
  margin:0;
  color:#333333;
  text-decoration:none;
}
a:hover {color:#17a2b8;}
@keyframes fadeInDown {
  0%   { opacity:0;top:-50px;}
  100% { opacity:1;top:0;}
}
@keyframes fadeInUp
{
  0%   { opacity:0;top:20px;}
  100% { opacity:1;top:-20px;}
}
.footer{
  padding-top: 40px;
  color: #6c757d;
  text-align: left;
  line-height: 2px;
  border-top-color: #17a2b8;
}
</style>
<body style="margin:0px;padding:0px;">
</body>

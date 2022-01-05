<template>
  <div id="food">
  <el-divider style="margin-top: 0px;margin-bottom: 0px;"></el-divider>
  <el-footer class="footer" style="text-align: left">
    <div style="margin-bottom: 65px">
      <el-row >
        <el-col :span="8" style="margin-left: 150px;">
          <p style=" font-size:18px;font-weight:bold;">小济智能家居系统研发团队</p><br>
          <p style="font-size:14px;">地址: 上海市 同济大学嘉定校区</p><br>
          <p style="font-size:14px;">核心成员: 李林飞 王子轩 裴元昊</p>
        </el-col>
        <el-col :span="8" >
          <p style=" font-size:18px;font-weight:bold;">加入小济</p><br>
          <p style="font-size:14px;">QQ邮箱：1367027689@qq.com</p><br>
        </el-col>
      </el-row>
    </div>
    <div style="line-height: 3;font-size:12px; text-align: center; border-top: 1px solid #dee2e6">Copyright © 2021 XIAOJI-Smart All Rights Reserved.</div>
  </el-footer>
  </div>
</template>

<script>
export default {
  name: "foot",
}
</script>

<style scoped>
.footer{
  padding-top: 40px;
  color: #6c757d;
  text-align: left;
  line-height: 2px;
  border-top-color: #17a2b8;
}
.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 0 0;
}
</style>

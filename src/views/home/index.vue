<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <LeftMenu/>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import LeftMenu from "../../components/LeftMenu.vue"
</script>

<style lang="scss">
  .el-aside{
    background-color:  rgb(236, 219, 134);
  }
  .el-header{
    background-color: rgb(109, 197, 247);;
  }
  .el-main{
    background-color: pink;
  }
  .el-aside,.el-container,.common-layout,#app,body,html {
    height: 100%;
  }
</style>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <LeftMenu/>
      </el-aside>
      <el-container>
        <el-header>
            <RightTop/>
        </el-header>
        <el-main>
            <!-- 二级路由出口 -->
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import LeftMenu from "../../components/LeftMenu.vue"
import RightTop from "../../components/RightTop.vue"
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
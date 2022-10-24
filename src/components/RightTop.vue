<template>
  <div class="righttop">
    <el-icon @click="collclick"><CaretRight v-if="$store.state.HomeModule.navBool"/><CaretLeft v-else/></el-icon>
    <h2 @click="quit">退出</h2>
  </div>
</template>

<script setup>
import { CaretRight, CaretLeft } from '@element-plus/icons-vue'
import {useStore} from "vuex"
import {useRouter} from "vue-router"
let router = useRouter()
let store = useStore()
// import {ref} from "vue"
// let bool =ref(true)
let collclick=()=>{
   store.commit("SET_NAV_BOOL")
}
let quit=()=>{
  router.push("/login")
}
</script>

<style lang="scss">
    .el-header{
    line-height: 70px;
  .righttop{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .el-icon{
       font-size: 20px;
      }
    }
  
</style>
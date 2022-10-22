<template>
  <div class="container">
    <div class="itemleft">
      <ItemPage>
        <template #main>  
          <One/>
        </template>
      </ItemPage>
      <ItemPage>
        <template #main>  
          <Two/>
        </template>
      </ItemPage>
    </div>
    <div class="itemright">
      <ItemPage>
        <template #main>  
          <Three/>
        </template>
      </ItemPage>
      <ItemPage>
        <template #main>  
          <Four/>
        </template>
      </ItemPage>
    </div>
  </div>
</template>

<script setup>
import ItemPage from "../../../components/ItemPage.vue"
import One from "../../../components/One.vue"
import Two from "../../../components/Two.vue"
import Three from "../../../components/Three.vue"
import Four from "../../../components/Four.vue"
</script>

<style lang="scss">
  .container{
    width: 100%;
    margin: 0 auto;
    // background-color: gray;
    display: flex;
    .itemleft,.itemright{
      flex:1;
    }
  }
</style>
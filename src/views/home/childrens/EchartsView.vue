<template>
  <div class="container">
    <div class="itemleft">
      <ItemPage>
        <template #main>  
          <PopulationStatistics/>
        </template>
      </ItemPage>
      <ItemPage>
        <template #main>  
          <DailyVisitorStatistics/>
        </template>
      </ItemPage>
    </div>
    <div class="itemright">
      <ItemPage>
        <template #main>  
          <RepairStatistics/>
        </template>
      </ItemPage>
      <ItemPage>
        <template #main>  
          <VehicleStatistics/>
        </template>
      </ItemPage>
    </div>
  </div>
</template>

<script setup>
import ItemPage from "../../../components/ItemPage.vue"
import PopulationStatistics from "../../../components/PopulationStatistics.vue"
import DailyVisitorStatistics from "../../../components/DailyVisitorStatistics.vue"
import RepairStatistics from "../../../components/RepairStatistics.vue"
import VehicleStatistics from "../../../components/VehicleStatistics.vue"
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
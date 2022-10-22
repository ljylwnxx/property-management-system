<template>
  <div class="item">
     <slot name="main"></slot>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
  .item{
    height: 5.125rem;
    // border: 1px solid rgba(168,166,166);
    margin: 0.25rem;
    background-color: rgba(147,147,147, 0.8);
  }
</style>
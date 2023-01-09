<script setup>
const onReady = (mapInstance) =>{
  console.log(mapInstance);
  console.log("L", L);
}
</script>

<template>
  <div class="wrapper">
    <VuLeaflet @onReady="onReady" :showBaseLayer="true"/>
  </div>
</template>

<style scoped>
.wrapper {
  width: 1200px;
  height: 400px;
  margin: 100px auto;
}
</style>


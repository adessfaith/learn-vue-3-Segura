<template>
  <div class ="app">
    <Navigation></Navigation>
    <router-view></router-view>

  </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue';

</script>

<style lang="scss" scoped>
.app{
  gap: lrem;
  display: flex;
  flex-direction: column;

}

</style>
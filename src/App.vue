<template>
  <h1>{{ message }}</h1>
  <div class="card">
    <h2 ref="title">This the App component.</h2>
    <h2>Number: {{ number }}</h2>
    <button @click="number++">Increment number by one</button>
    <button @click="isShow =!isShow"> Toggle Component1</button>

    <Component1 v-if="isShow"></Component1>
  </div>

</template>
<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  watch 
} from "vue";

import Component1 from './Component1.vue';

let isShow = ref(true);

let message = ref("Hello, Lifecyle Hooks!");

let number = ref(1);
let title = ref();

console.log("App component is setup"); // Order 1

onBeforeMount(() => {
  console.log("App component is before mount."); // Order 2
  console.log(number.value); //Order 3
  console.log(title.value); //Order 4 / undefined
});
//callback to be called after a hok has been mounted
//good for fetching data, and is the most commonly used lifecycle hook function
onMounted(() => {
  console.log("App component is mounted");
  console.log(title.value);
});
onBeforeUpdate(() => {
  console.log("App component is before update.");
});
onUpdated(() => {
  console.log("App component is updated.");
});
onBeforeUnmount(() => {
  console.log("App component is before unmount");
});
onUnmounted(() => {
  console.log("App component is unmounted.");
});

watch(number, ()=>{console.log('number changes')});




</script>
<style scoped>
.card {
  background-color: purple;
  color: white;
  padding: 20px 10px;
  margin-bottom: 10px;
}
</style>

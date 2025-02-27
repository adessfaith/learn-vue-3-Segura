<template>
  <h1>{{ message }}</h1>
  <p>What has keys bit can't open locks, space but no room, and can't go outside? What am I?</p>
  <button style="width:200px" @click="showAnswer=!showAnswer">{{ !showAnswer ?'Show me the answer!':'Hide the answer!' }} </button>
  <div v-if="showAnswer">A keyboard.</div>
  <div v-show="showAnswer">A keyboard.</div> <!--will be rendered in the DOM,GOod for Often changing conditions -->
 <!-- <div v-if="Math.random()> 0.5"> Now you see me</div>
  <div v-else> Now you don't</div>!-->
  <div v-if="showAnswer"> Now you see me</div> <!--will not be rendered on the DOM tree, good for conditions thyat change less often-->
  <div v-else> Now you don't</div>


 
   
 
</template>

<script setup>
import {ref } from 'vue'

let message = ref('Hello, v-if!')
let showAnswer = ref(false);


</script>




<style scoped>
</style>
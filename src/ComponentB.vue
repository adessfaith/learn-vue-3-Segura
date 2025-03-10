<template>
   
    <div style="background-color: lightblue;">
        <h2>This is component B.</h2>
        {{ messageFromApp}}

        <button @click="updateMessage"> Update Message </button>
    </div>
</template>

<script setup>
import { inject } from 'vue';
let {message: messageFromApp, updateMessage} = inject('msg', 'default message');

// it recommended to kepp any mutations to reactive state inside of the provider whenever possible

</script>

<style scoped>

</style>
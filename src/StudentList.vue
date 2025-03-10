<template>
  <ul>
    <li v-for="stuent in list" :key="student.id"></li>
    <Slot :stu="student">
        {{ student.name }}
    </Slot>
  </ul>
</template>

<script setup>
defineProps(['list']);
</script>

<style scoped></style>

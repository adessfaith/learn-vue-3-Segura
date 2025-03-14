<template>
  <ul>
    <li v-for="student in list" :key="student.id">
      <slot :stu="student"> {{ student.name }}</slot>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
//import StudentList from "./StudentList.vue";
defineProps(["list"]);
const list = ref([
  { id: 1, name: "Harry" },
  { id: 2, name: "Hermione" },
  { id: 3, name: "Ron" },
]);
</script>

<style scoped></style>

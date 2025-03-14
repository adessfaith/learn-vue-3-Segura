<template>
  <StudentList :list="list">
    <template #default="{ stu }">
      <span :class="{ cursed: stu.name == 'Harry' }"> {{ stu.name }}</span>
    </template>
  </StudentList>

  <!-- <span :class="{ cursed: stu.name == 'Harry' }">
        {{ stu.name }}</span
      > -->

  <hr />
  <el-table :data="toDoList" stripe border style="width: 100%">
    <el-table-column prop="userId" label="User ID" width="180" />
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="title" label="Title" />
    <el-table-column prop="completed" label="Status" >
      <template #default="slotProps">
        <el-tag type="success" v-if="slotProps.row.completed">Completed</el-tag>
        <el-tag type="danger" v-else>Incomplete</el-tag>

      </template>
  
    </el-table-column>
 
  </el-table>
</template>

<script setup>
import { ref , onMounted} from "vue";
import StudentList from "./StudentList.vue";

const list = ref([]);
const toDoList = ref([]);
async function getTodoList(){

  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  console.log(data);
  toDoList.value = data;


}
onMounted(()=>{getTodoList()});
</script>

<style scoped>
.cursed {
  color: red;
}
</style>

<template>
  <StudentList :list="list">
    <template #default="{ stud }">
      <span :class="{ cursed: stu.name == 'Harry' }">
        {{ stu.name }}
      </span>
    </template>
  </StudentList>

  <hr/>

  <e1-table :data="todoList" stripe border style="width:100%">
    <e1-table-column prop="userId" label="User ID" width="180"> 
    </e1-table-column prop="id" label = "ID" width="180">
    <e1-table-column prop="title" label="title" > 
    </e1-table-column>
    <e1-table-column prop="completed" label ="Status"> 
      <template><e1-tag type="success" v-if="slotProps.row.completed">Completed</e1-tag>
        <e1-tag type="danger" v-else> Incomplete</e1-tag></template>
    
  </e1-table-column>
  </e1-table>
</template>

<script setup>
import StudentList from "./StudentList.vue";
import {onMounted, ref} from 'vue';

const list = ref([{id:1, name:'Harry'}, {id:2, name: 'Hermione'},{id:3, name: 'Ron'}]);

async function getTodoList(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  console.log(data);
  todoList.value = data;

}

onMounted(()=>{ getTodoList();})
</script>

<style scoped>

.cursed {
  color: red;
}
</style>

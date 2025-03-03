<template>
  <h1>{{ message }}</h1>
  <div class="card">
    <h1>Sceneriod 1: Watch a "ref(primitive value)"</h1>
    <h2>Number: {{ number }}</h2>
    <button @click="number++">Increment number by 1</button>
  </div>

  <div class="card">
    <h1>Scenerio 2: watch a property in a "ref(object)"</h1>
    <h2>Name: {{ wizard1.name }}</h2>
    <h2>Wand" {{ wizard1.wand }}</h2>
    <button @click="wizard1.name = wizard1.name.toUpperCase()">
      Change name to UPPER CASE
    </button>
    <button @click="changeWizardWand">Change wand</button>
    <button @click="wizard1.wand.core = 'Unicorn hair'">
      Change wand core
    </button>
  </div>
  <div class="card">
    <h1> Scenerio 3: watch a "ref(object)"</h1>
    <h1>Name: {{ wizard2.name }}</h1>
    <h2>Wand : {{ wizard2.wand }}</h2>
    <button @click="wizard2.name = wizard2.name.toUpperCase()"> Change name to UPPERCASE</button>
    <button @click=" wizard2.wand.core = 'Pheonix feather'"> Change wand core</button>
    
  <button @click ="changeWizard"> Change wizard </button>
</div>
</template>
<script setup>
import { watch, ref } from "vue";
let message = ref("Hello, Watchers!");
//scenerio 1: watch a ref(primitive value), this is a
let number = ref(1);
let stopWatch = watch(
  number,
  (newValue, oldValue) => {
    console.log(
      "Watch a ref(primitive value): number changes",
      newValue,
      oldValue
    );
    if (newValue > 5) {
      stopWatch();
    }
  },
  { immediate: true }
); //for immediate watching

//scenerio 2: Watch a property in a ref(object)
let wizard1 = ref({
  id: 1001,
  name: "Harry Potter",
  house: "Gryffindor",
  age: 17,
  wand: { core: "Phoenix feather", wood: "Holly" },
});
function changeWizardWand() {
  wizard1.value.wand = { core: "Dragon heartstring", wood: "Vine" };
}
 let wizard2 = ref({id: 1003, name:' Ron Wealy', house: 'Gryffindor', age: 17, wand: { core: 'Unicorn hair',wood: 'Willow'}});

//  watch(wizard1.value.name, (newValue, oldValue)=>{})  not valid, watch object can only be a ref, a reactive object, a getter function, or an array of these types of data
watch(
  () => wizard1.value.name,
  (newValue, oldValue) => {
    console.log(
      "Watch a property in a ref(object): wizard1 name changes",
      newValue,
      oldValue
    );
  }
);

watch(
  () => wizard1.value.wand,
  (newValue, oldValue) => {
    // Address or reference
    console.log(
      "watch a proprty in a ref(object): wizard1 wand changes",
      newValue,
      oldValue
    );
  },
  { deep: true }
);

function changeWizard(){
  wizard2.value = { id: 1002, name: 'Hermione Granger', house: 'Gryffindor', age: 17, wand: {core: 'Dragon heartstring', wood: 'Vine'}}}

  watch (wizard2), (newValue, oldValue)=>{console.log('watch a ref(object): wizard2 changes', newValue, oldValue)},{deep:true};

  watch([number, ()=>wizard1.value.name, wizard2],(newValue, oldValue)=>{console.log("Watch an array of ref(primitive value, watch a property of a ref object, watch ), a property of 'ref' object, 'ref object'")},{deep: true})
</script>
<style scoped>
.card {
  background-color: purple;
  color: white;
  padding: 20px 10px;
  margin-bottom: 10px;
}
</style>

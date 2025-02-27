<template>
  <div class="card">
    <h2>Message: {{ message }}</h2>
    <h2>Number: {{ number }}</h2>
    <button @click="changeMessageToUpperCase">
      Change message to upper case
    </button>
    <button @click="incrementNumber">Increment number</button>
  </div>
  <div class = "card">
    <h2>Name:{{ wizard.name }}</h2>
    <h2>Wand: {{ wizard.wand }}</h2>
    <button @click="changeNameToUpperCase"> Change name to upper case</button>
    <button @click="changeWandCore"> Change wand core</button>
    <button @click="changeWizard"> Change wizard</button>
  
  </div>
  <div class = "card"><h2>Array:{{ wizards }}</h2>
    <button @click="wizards.push('Draco')"> Add a new wizard</button>
  </div>

 <!-- (ref) automatic in template-->
</template>

<script setup>
import { ref } from 'vue';

function changeNameToUpperCase(){
  wizard.value.name = wizard.value.name.toUpperCase();

}
 
function changeWandCore(){
  wizard.value.wand.core = 'Unicorn Hair';

}
function changeWizard(){
  wizard.value = {
    id: 1002,
    name: 'Hermione Granger',
    house: 'Gryffindor',
    age: 17,
    wand: {
      core: 'Dragon heartstring',
      wood: 'Vine'
    }
  }}






let message = ref('Hello, Reactivity!');
let number = ref(1);

function changeMessageToUpperCase() {
  message.value = message.value.toUpperCase();// returns a .value property of the given object, returna an enhanced version of original data
 
  console.log(message.value);
}
function incrementNumber() {
  number.value += 1;
  console.log(number.value);
}
let wizard =ref({
  id:1001,
  name: 'Harry Potter',
  house: 'Gryffindor',
  age:17,
  wand:{
    core:'Pheonix feather',
    wood:'Holly'
  }
})
let wizards = ref(['Harry', 'Hermione', 'Ron']);

</script>




<style scoped>
.card {
  background-color: purple;
  color: white;
  padding: 20px 10px;
  margin-bottom: 10px;
}
</style>

<!--<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
!-->
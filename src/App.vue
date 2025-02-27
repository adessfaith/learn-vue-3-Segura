<template>
  <h1>message:{{ message }}</h1>
  <hr/>
  <h1>number:{{ number }}</h1>
  <h1>doubleNum(50):{{ doubleNum(50) }}</h1>
  <hr/>
  <h1>number*2 = {{ number*2 }}</h1>
  <h1>{{ number>150? 'number is greater than 150' : 'number is greater than 150'}}</h1>
  <hr/>
  <h1 v-text="number"></h1>
  <hr/>
  <h1>{{ harry }}</h1>
  <h1>{{ harry.name }}</h1>
  <hr/>
  <h1>{{ hogwartsWizards}}</h1>
  <h1>{{ hogwartsWizards[0]}}</h1>
  <hr/>
  <h1>{{ rawHTML }}</h1>
  <h1 v-text="rawHtml"></h1>
  <h1 v-html="rawHtml"></h1>

</template>

<script setup>
let message = 'Hello, Vue!';
let number = 430;
function doubleNum(num){
  return num*2;
}

let harry = {
  id: 1001,
  name: 'Harry Potter',
  house: 'Gryffindor',
  age: 17, // Age during the final battle of Hogwarts
  wand: {
    core: 'Phoenix feather',
    wood: 'Holly'
  }
}
const hogwartsWizards = [
  {
    id: 1001,
    name: 'Harry Potter',
    house: 'Gryffindor',
    age: 17,
    wand: {
      core: 'Phoenix feather',
      wood: 'Holly'
    }
  },
  {
    id: 1002,
    name: 'Hermione Granger',
    house: 'Gryffindor',
    age: 17,
    wand: {
      core: 'Dragon heartstring',
      wood: 'Vine'
    }
  },
  {
    id: 1003,
    name: 'Ron Weasley',
    house: 'Gryffindor',
    age: 17,
    wand: {
      core: 'Unicorn hair',
      wood: 'Willow'
    }
  },
  {
    id: 1004,
    name: 'Draco Malfoy',
    house: 'Slytherin',
    age: 17,
    wand: {
      core: 'Dragon heartstring',
      wood: 'Hawthorn'
    }
  }
]
let rawHtml = '<span style ="color:red">This should be an HTML snipit</span>'

</script>

<style  scoped>

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
<template>
  <h1>v-model vs v-bind</h1>
  <h2>message: {{ message }}</h2>
  <div>
    <p>v-model = v-bond + @input</p>
    <input type="text" v-bind:value="message" @input="message = $event.target.value"
    />
  </div>
  <div>
    <p>v-model</p>
    <input type  = "text" v-model = "message"/>
  </div>
</template>

<script setup>
//v-bind = one way
//v-model = two way
import { ref } from 'vue';
let message = ref('Hello!');

</script>

<style scoped>

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
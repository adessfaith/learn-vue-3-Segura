<template>
  <h1>{{message }}</h1>
  <button v-on:click="replaceText('v-on is fun!')">Replace text</button><!--Theese two lines are the same-->
  <button @click="replaceText('v-on is fun!')">Replace text</button>
  </hr>
  <p> An input field where the user can ONLY enter numbers:</p>
  <input type="text" @keyDown.number="handleInput($event)"/>

  <hr>
  <div style="width:100px; height: 100px; background-color: aqua" @contextmenu.prevent="console.log('show custom context menu, prevent default menu')"></div>
  <div id="mouseover" @mouseover="fun1">
    <text-area @mouseover.stop="fun2($event)">
      This is a test area
    </text-area></div>
    <hr />
  <p>A demo of preventing the default behavior of an event.</p>
  <p>Right click in the cyan box below will not show the context menu:</p>
  <div
    style="width: 100px; height: 100px; background-color: aqua"
    @contextmenu.prevent="console.log('Show a custom context menu instead.')"
  ></div>

  <hr />

  <p>A demo of stopping event propagation:</p>

    
  <!-- <div id="mouseover" @mouseover="fun1">
    <textarea @mouseover.stop="fun2($event)">This is a text area.</textarea>
  </div> -->
  <!-- Since textarea is nested within div, mouseover textarea also means mouseover the parent div. -->

  <hr />
  <div>
    Press down the "Enter" key will trigger a console log print:
    <input
      type="text"
      @keydown.enter="console.log('You pressed the Enter key.')"
      
    />
  </div>
  <div>
    Press down the "Arrow Down" key will trigger a console log print:
    <input
      type="text"
      @keydown.down="console.log('You pressed the Arrow Down key.')"
    />
  </div>
  <div>
    Press down the "Space" key will trigger a console log print:
    <input
      type="text"
      @keydown.space="console.log('You pressed the Space key.')"
    />
  </div>
  <div>
    Press down the "b" key will trigger a console log print:
    <input type="text" @keydown.b="console.log('You pressed the B key.')" />
  </div>
  <div>
    Press down the "Ctrl c" will trigger a console log print:
    <input type="text" @keydown.ctrl.c="console.log('You pressed Ctrl c.')" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
let message = ref('Hello, v-on!');
function replaceText(msg){
  message.value = msg;
}
function handleInput(event){
  let keyCOde = event.keyCode;
  if(keyCode <48||keyCode>57){
    event.preventDefault();//vanillajs syntax
  }

}
function fun1(){
  console.log('mouse over div');
}
function fun2(){
  //event.stopPropagation();
  console.log('mouse over text area');

}

</script>

<style scoped>
  #mouseover{
    margin: 100px;
    text-align: right;
    background-color: purple;
    width: 300px;
    height: 300px;
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
<template>
  <ButtonCounter></ButtonCounter>
  <!--Pascal Case-->
  <ButtonCounter></ButtonCounter>

  <button-counter></button-counter>
  <!--Button do not recognize non-standard custum tags-->
  <hr />
  <div style="background-color: orange; padding: 5px">
    This is the root component.
    <ComponentA></ComponentA>
    <ComponentA></ComponentA>
  </div>
</template>
<script setup>
import ButtonCounter from "./ButtonCounter.vue";
import ComponentA from "@/COmponentA.vue";
</script>

<style></style>

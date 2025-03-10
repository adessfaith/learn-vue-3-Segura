<template>
  <BaseLayout>Header, Main, Footer</BaseLayout>
  <BaseLayout>
    <template #header> <h1>title</h1></template>
    <template #main>
      <p>Main Content</p>
    </template>
    <template #footer>
      <p>Contact Info!</p>
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "./BaseLayout.vue";
</script>

<style scoped></style>

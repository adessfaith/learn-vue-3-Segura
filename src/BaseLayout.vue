<template>
  <div>
    <header>
      Header
      <slot name="header"></slot>
    </header>
    <main>Main <slot name="main"></slot></main> <!--gives a default name if no name is provided-->
    <footer>Footer<slot name="footer"></slot></footer>
  </div>
</template>

<script setup></script>

<style scoped></style>

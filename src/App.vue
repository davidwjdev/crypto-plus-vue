<script setup lang="ts">
import HeaderVue from './components/Header.vue';
import NavVue from './components/Nav.vue';
</script>

<template>
  <div class="mt-10 ">

    <header class="mb-10 sm:mx-5 md:w-2/3">
      <HeaderVue />
    </header>
    <nav>
      <NavVue />
    </nav>
    <section class="sm:mx-5 md:w-2/3">
      <div></div>
    </section>
    <footer class="sm:mx-5 md:w-2/3">
      <div></div>
    </footer>
  </div>
</template>

<style scoped></style>

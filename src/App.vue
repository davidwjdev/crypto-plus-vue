<script setup lang="ts">
import HeaderVue from './components/Header.vue';
import HomeVue from './components/Home.vue';
import NavVue from './components/Nav.vue';
</script>

<template>
  <div class="mt-10 flex flex-col">

    <header class="mb-10">
      <HeaderVue />
    </header>
    <nav>
      <NavVue />
    </nav>
    <section class="">
      <HomeVue />
    </section>
    <footer class="">
      <div></div>
    </footer>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">

import HeaderVue from './components/Header.vue';
import HomeVue from './components/Home.vue';
import NavVue from './components/Nav.vue';
import SearchVue from './components/Search.vue';



</script>


<script lang="ts">




</script>

<template>
  <div>
    <SearchVue />

  </div>
  <div class=" flex flex-col">

    <header class="">
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

<script lang="ts">
import HeaderVue from "./views/Header.vue";
import SearchVue from "./views/Search.vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    SearchVue,
    HeaderVue,
    RouterLink,
    RouterView
  }
};
</script>

<template>
  <div class="flex flex-col">
    <header class="">
      <SearchVue />
      <HeaderVue />
    </header>
    <nav>
      <div class="flex justify-center items-center mb-5">
        <ul class="flex">
          <li class="me-3">
            <button href="#" class="bg-purple-800 border-2 border-purple-800 sm:p-2 md:p-3 rounded-full font-bold">
              Cotação
            </button>
          </li>
          <li class="me-3">
            <button href="#" class="border-2 border-purple-800 sm:p-2 md:p-3 rounded-full font-bold">
              Simulador
            </button>
          </li>
          <li class="">
            <button href="#" class="border-2 border-purple-800 sm:p-2 md:p-3 rounded-full font-bold">
              Comparação
            </button>
          </li>
        </ul>
      </div>
      <div class="flex justify-center items-center mb-5">
        <ul class="flex">
          <li class="me-3">
            <form action="">
              <select name="moeda" id="moeda" class="sm:p-1 md:p-2 rounded-full bg-purple-800 border-2 border-purple-800">
                <option value="real">Real</option>
                <option value="dolar">Dolar</option>
                <option value="btn">Bitcoin</option>
              </select>
            </form>
          </li>
          <li class="me-3">
            <router-link to="/favorite">
              <button class="border-2 border-purple-800 sm:p-2 md:p-3 rounded-full font-bold">
                <FontAwesomeIcon :icon="['fas', 'star']" />
              </button>
            </router-link>
          </li>
          <li class="me-3">
            <router-link to="/">
              <button class="bg-purple-800 border-2 border-purple-800 sm:p-2 md:p-3 rounded-full font-bold">
                Em alta
              </button>
            </router-link>
          </li>
          <li class="">
            <button href="#" class="border-2 border-purple-800 sm:p-2 md:p-3 rounded-full font-bold">
              Novas
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<style scoped></style>

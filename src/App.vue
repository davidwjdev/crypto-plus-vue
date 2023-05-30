<script setup lang="ts">
import { useEmAltaStore } from "./store/em-alta";
import { useFavoriteStore } from "./store/favorite";
import HeaderVue from "./views/Header.vue";
import SearchVue from "./views/Search.vue";
import { ref } from 'vue';

const buttons = ref([
  { id: 1, label: 'favorite', isActive: false },
  { id: 2, label: 'emAlta', isActive: true },
  { id: 3, label: 'novas', isActive: false },
]);

const toggleButton = (buttonId: number) => {
  buttons.value.forEach((button) => {
    button.isActive = button.id === buttonId
  })
}

const favoriteStore = useFavoriteStore();
const emAltaStore = useEmAltaStore();


const fetchData = () => {
  emAltaStore.fetchData();
}

fetchData();
favoriteStore.getFavorites();
</script>
<script lang="ts">
export default {
  components: {
    SearchVue,
    HeaderVue,
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
            <button href="#"
              class="bg-purple-800 border-2 border-purple-950 sm:p-2 md:p-3 rounded-full font-bold hover:shadow-md hover:shadow-purple-950">
              Cotação
            </button>
          </li>
          <li class="me-3">
            <button href="#"
              class="border-2 border-purple-950 sm:p-2 md:p-3 rounded-full font-bold hover:shadow-md hover:shadow-purple-950">
              Simulador
            </button>
          </li>
          <li class="">
            <button href="#"
              class="border-2 border-purple-950 sm:p-2 md:p-3 rounded-full font-bold hover:shadow-md hover:shadow-purple-950">
              Comparação
            </button>
          </li>
        </ul>
      </div>
      <div class="flex justify-center items-center mb-5">
        <ul class="flex">
          <li class="me-3">
            <router-link to="/favorite">
              <button :key="buttons[0].id" @click="toggleButton(buttons[0].id)"
                class="border-2 border-purple-950 sm:p-2 md:p-3 rounded-full font-bold hover:shadow-md hover:shadow-purple-950"
                :class="{ 'bg-purple-800': buttons[0].isActive }">
                <FontAwesomeIcon :icon="['fas', 'star']" />
              </button>
            </router-link>
          </li>
          <li class="me-3">
            <router-link to="/em-alta">
              <button :key="buttons[1].id" @click="toggleButton(buttons[1].id)"
                class=" border-2 border-purple-950 sm:p-2 md:p-3 rounded-full font-bold hover:shadow-md hover:shadow-purple-950"
                :class="{ 'bg-purple-800': buttons[1].isActive }">
                Em alta
              </button>
            </router-link>
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

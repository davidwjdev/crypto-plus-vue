<script setup lang="ts">
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useFavoriteStore } from "../store/favorite";
import { useCoinDetailStore } from "../store/coin-detail"
import { useRoute } from "vue-router";
import { onBeforeMount } from "vue";


const favoriteStore = useFavoriteStore();
const coinDetailStore = useCoinDetailStore();
const route = useRoute();

const fetchData = async () => {
    const id = route.params.id as string;
    try {
        await coinDetailStore.fetchData(id);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

};

onBeforeMount(async () => {
    await fetchData();
    favoriteStore.getFavorites();
});


favoriteStore.getFavorites();

</script>

<template>
    <div class="flex justify-center">
        <div class="grid lg:grid-cols-3 md:grid-cols-2">

        </div>
    </div>
</template>

<style scoped></style>

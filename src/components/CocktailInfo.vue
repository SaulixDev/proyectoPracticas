<template>
  <div>
    <div
      class="md:text-lg"
      v-if="id === cocktailData[0]?.idDrink"
      v-for="(data, j) in cocktailData"
      :key="j"
    >
      <p class="pb-4"><b>> Category:</b> {{ data.strCategory }}</p>
      <p class="pb-4"><b>> Type:</b> {{ data.strAlcoholic }}</p>
      <p class="pb-4"><b>> Instructions:</b> {{ data.strInstructions }}</p>
    </div>
  </div>
</template>

<script setup>
import { useCocktailStore } from "@/stores/cocktailStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useCocktailStore();
const { cocktail } = storeToRefs(store);

defineProps({
  id: String,
});

const cocktailData = ref(cocktail);
</script>

<style scoped></style>

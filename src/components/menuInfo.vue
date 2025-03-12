<template>
  <div>
    <button
      @click="() => moreInfo()"
      class="bg-primary100 active:bg-accent100 ml-29 mr-25 mt-1 mb-3"
    >
      More Info
    </button>
    <div v-if="visible">
      <p>Category: {{ data.strCategory }}</p>
      <p>Zone: {{ data.strArea }}</p>
      <p>Instructions: {{ data.strInstructions }}</p>
      <p>Tags: {{ data.strTags }}</p>
    </div>
  </div>
</template>

<script setup>
import { useMenuStore } from "@/stores/menuStores";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

const store = useMenuStore();
const { menu } = storeToRefs(store);
const visible = ref(false);
const router = useRouter();

const props = defineProps({
  data: Object,
});

function moreInfo() {
  router.push({ name: "meal-details", params: { id: props.data?.idMeal } });
  console.log(props.data?.idMeal);
  visible.value = true;
}
</script>

<style scoped></style>

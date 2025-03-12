<template>
  <div class="grid grid-row">
    <button
      @click="() => moreInfo()"
      class="bg-primary100 active:bg-accent100 mx-12 my-3 md:mx-[41%] lg:mx-[43%] dark:bg-dbg100 dark:hover:bg-dbg300"
    >
      {{$t(`message.info.more`)}}
    </button>
    <button
      class="bg-primary100 rounded-md p-1 hover:bg-primary200 duration-300 mx-20 my-2 md:mx-[50%] lg:mx-[51%] dark:bg-dbg100 dark:hover:bg-dbg300"
      @click="() => addToFavorites(data.idMeal)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { useMenuStore } from "@/stores/menuStores";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

const store = useMenuStore();
const { getMealInfoById } = store;
const { menu } = storeToRefs(store);
const visible = ref(false);
const router = useRouter();

const props = defineProps({
  data: Object,
});

const addToFavorites = (id) => {
  getMealInfoById(id);
};

function moreInfo() {
  router.push({ name: "meal-details", params: { id: props.data?.idMeal } });
  visible.value = true;
}
</script>

<style scoped></style>

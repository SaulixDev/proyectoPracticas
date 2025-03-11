<template>
  <main>
    <TheWelcome />
    <button @click="changeLanguage('eng')">English</button>
    <button @click="changeLanguage('esp')">Español</button>

    <div>
      <select id="l">
        <option value="default" selected>Language</option>
        <option value="eng">English</option>
        <option value="esp">Español</option>
      </select>
    </div>
  </main>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { useI18n } from "vue-i18n";
import { ref } from 'vue';

const { locale, t } = useI18n();
const lang = ref(document.getElementById('l'))

const changeLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem("lang", lang); // Guardar el idioma en localStorage
};

</script>
<template>
    <div>
        <button @click="() => changeLanguage()">{{$t(`message.bttn.lang`)}}</button>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from 'vue';

const { locale, t } = useI18n();
const isEng = ref(false)
const lang = ref(document.getElementById('l'))

const changeLanguage = () => {
    if(isEng.value){
        locale.value = 'eng'
        localStorage.setItem('lang', 'eng'); 
        isEng.value = !isEng.value;
    }else{
        locale.value = 'esp'
        localStorage.setItem('lang', 'esp');
        isEng.value = !isEng.value;
    }
};

</script>

<style scoped>

</style>
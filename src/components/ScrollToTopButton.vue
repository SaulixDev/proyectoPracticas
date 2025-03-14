<template>
    <div class="fixed z-30 bottom-7 right-6">
            <button
                class="mr-5 bg-primary100 rounded-md p-1 border-2 border-text100 hover:bg-primary200 duration-300 transition transition-discrete hover:-translate-y-2 dark:bg-dbg100 dark:border-black dark:hover:bg-dbg100"
                @click="() => scrollToTop()">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </button>
        </div>
</template>

<script setup>
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

</script>

<style lang="scss" scoped>

</style>
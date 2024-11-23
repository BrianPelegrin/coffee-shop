<template>
    <AppNotification />
    <app-header />    
    <main class="mx-auto container mt-10">        
        <router-view />
    </main>
    <footer>
        
    </footer>
    <DrinkModal />
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import DrinkModal from '@/components/DrinkModal.vue';
import AppNotification from '@/components/AppNotification.vue';

</script>

<style scoped>
/* .app-header{
    background-image: url("/img/bg.jpg");
} */
</style>
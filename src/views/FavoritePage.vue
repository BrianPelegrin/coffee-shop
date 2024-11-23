
<script setup lang="ts">
import DrinkCard from '@/components/DrinkCard.vue';
import { useDrinkStore } from '@/store';
import { computed } from 'vue';

const drinkStore = useDrinkStore()
const isEmpty = computed<boolean>(()=>drinkStore.favorites.length>0 )
</script>

<template>
    <h1 class="text-6xl font-extrabold text-center">
        {{ isEmpty  ? 'Favoritos' : "No Hay Favoritos" }}
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  my-10 gap-10">
        <DrinkCard 
            v-for="drink in drinkStore.favorites"            
            @on-click-drink="drinkStore.getDrinkDetails"
            @on-like-drink="drinkStore.handleFavorites"
            :drink="drink"
            :key="drink.idDrink"         
            :is-favorite="drinkStore.favorites.some(fav=>fav.idDrink == drink.idDrink)"
        />
    </div>
</template>

<style scoped>

</style>
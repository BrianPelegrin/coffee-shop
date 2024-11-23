<template>
  <!-- <TheNavbar /> -->
  <header class="bg-slate-800 shadow-lg" :class="{'header':isInHome}">
    <div class="mx-auto container px-5 py-16 ">
      <div class="brand-page mb-16 flex justify-between items-center">
        <div>
          <RouterLink  :to="{name:'home'}">
              <img class="w-32 rounded-full ms-3" src="/img/coffee-logo.jpg"  alt="LogoTipo" />
              <span  class="font-extrabold  text-2xl text-white">Coffee Shop</span>
          </RouterLink> 
        </div>
        <nav class="flex gap-4">
            <RouterLink :to="{name:'home'}" active-class="text-yellow-600" class="text-white hover:text-yellow-600 uppercase font-bold">
              Inicio
            </RouterLink>
            <RouterLink :to="{name:'favorites'}" active-class="text-yellow-600" class="text-white hover:text-yellow-600 uppercase font-bold">
              Favoritos
            </RouterLink>
        </nav>
      </div>
      <form 
        v-if="isInHome"
        @submit.prevent="handleSubmit" 
        class="md:w-1/2 2xl:w-1/3  my-30 p-10 rounded-lg shadow space-y-6 header-form"
      >
          <!-- CATEGORY -->
        <div class="space-y-4">
          <label 
            for="input-category" 
            class="block text-white uppercase font-extrabold text-lg"
          >
            Categoria: 
          </label>
          <select 
            v-model="drinkStore.category" 
            name="input-category" 
            id="input-category" 
            class="p-3 w-full rounded-lg focus:outline-none"
          >            
            <option 
              v-for="category in drinkStore.categories" 
              :value="category.strCategory" 
              :key="category.strCategory" 
            >
              {{ category.strCategory }}
            </option>
          </select>
        </div>
        <!-- CATEGORY -->          
        <button class="w-full  rounded-lg p-2 text-white font-extrabold text-lg bg-yellow-600 hover:bg-yellow-700 uppercase">
            Buscar bebidas
        </button>
      </form>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from 'vue-router';
import { useDrinkStore } from "@/store";

const drinkStore = useDrinkStore()
const route = useRoute();
const isInHome = computed<boolean>(()=> route.name ==='home')

const handleSubmit = (cosa:any) =>{ 
  drinkStore.getDrinkRecipes()
}
</script>

<style scoped>
.header {
  background-image: url("/img/coffee-hero.jpg");
  background-position: center;  
  background-size: cover;
}

.header-form{
  background-image: url("/img/bg-cafe-madera.jpg") ;
  background-position: center;  
  background-size: cover;
}


</style>

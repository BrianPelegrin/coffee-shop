<script setup lang="ts">
import { IDrink } from '@/interfaces';
interface IProps{
    drink:IDrink
    isFavorite?:boolean;
}
interface IEmits{
    (event:'on-click-drink', args: string | number):void
    (event:'on-like-drink', args:IDrink):void
}
defineProps<IProps>()
defineEmits<IEmits>()

</script>
<template>
    <div class="border shadow-lg rounded-md bg-white ">
        <div class="overflow-hidden">
            <img class="hover:scale-125 transition-transform hover:rotate-2" :alt="`Imagen de ${drink.strDrink}`" :src="drink.strDrinkThumb">
        </div>
        <div class="p-5">
            <h2 class="font-extrabold text-2xl truncate">
                {{ drink.strDrink }}                
            </h2>
            <p class="text-gray-500">{{ drink.strCategory }}</p>
            <div class="flex  gap-2">
                <div class="basis-11/12">
                    <button @click="$emit('on-click-drink', drink.idDrink)" class=" w-full mt-5 rounded-lg p-2 text-white font-extrabold text-lg bg-yellow-600 hover:bg-yellow-700 uppercase">
                        Ver bebida
                    </button>
                </div>
                <div class="basis-1/12  mx-auto ">
                    <button @click="$emit('on-like-drink', drink)" class="w-full mt-5 rounded-lg p-2 text-white font-extrabold text-lg bg-red-600 uppercase flex justify-center items-center" >
                        <svg v-if="isFavorite"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>                        
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>



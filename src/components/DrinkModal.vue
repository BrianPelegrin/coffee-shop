<script setup lang="ts">
import { useDrinkStore } from '@/store';
import useLayoutStore from '@/store/layout';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
const layoutStore = useLayoutStore()
const drinkStore = useDrinkStore()
</script>

<template>
    <TransitionRoot as="template" :show="layoutStore.modal" >
      <Dialog as="div" class="relative z-10" @close="layoutStore.handleModal">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                <div v-if="drinkStore.drinkDetail">
                  <div class="mt-3">
                    <DialogTitle as="h3" class="text-gray-900 text-4xl font-extrabold my-5">
                        {{ drinkStore.drinkDetail.strDrink }}
                    </DialogTitle>
                    <img 
                        :src="drinkStore.drinkDetail.strDrinkThumb"
                        :alt="`Imagen de ${drinkStore.drinkDetail.strDrink}`" 
                        class="mx-auto w-96"                       
                    />
                    <template v-if="drinkStore.drinkDetail.ingredientList">
                        <DialogTitle as="h4" class="text-gray-900 text-4xl font-extrabold my-5">
                            Ingredientes
                        </DialogTitle>
                        <ul class="divide-y divide-slate-100 border rounded-md">
                            <li class="p-1" v-for="ingredient in drinkStore.drinkDetail.ingredientList" :key="ingredient">
                                {{ ingredient }}
                            </li>
                        </ul>
                    </template>
                    <template v-if="drinkStore.drinkDetail.strInstructionsES">
                        <DialogTitle as="h4" class="text-gray-900 text-4xl font-extrabold my-5">
                            Instrucciones
                        </DialogTitle>
                        <p>
                            {{ drinkStore.drinkDetail.strInstructionsES }}
                        </p>
                    </template>
                  </div>
                </div>
                <div class="mt-5 sm:mt-6 flex justify-between gap-4">
                    <button @click="layoutStore.handleModal" class="w-full bg-gray-600 hover:bg-gray-500 text-white text-2xl font-bold rounded-md py-2 uppercase shadow">
                        Cerrar
                    </button>
                </div> 
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>
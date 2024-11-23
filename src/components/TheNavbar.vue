<template>
    <header class="bg-image">
        <nav class="w-full bg-white px-5  flex items-center justify-between shadow-md">
            <div class="nav-brand flex items-center" >
                <img src="/img/logo-brne.png" width="75"/>
                <span class="font-extrabold text-2xl">Drink Pedia</span>
            </div>

            <div>
                <ul class="flex gap-5 ">
                    <li>
                        <RouterLink :to="{name:'home'}" active-class="text-yellow-600" class="text-white uppercase p-2 rounded-md hover:text-yellow-600  font-bold ">
                            Inicio
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{name:'favorites'}" active-class="text-yellow-600" class="text-white uppercase p-2 rounded-md hover:text-yellow-600 font-bold ">
                            Favoritos
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
        <div v-if="$route.name == 'home'" class="container mx-auto my-10 " >                
            <form>
                <div class="py-2 px-4 bg-white rounded-lg  shadow-md ">
                    <div class="text-4xl font-extrabold mb-2 text-center uppercase ">
                        Buscar Bebida
                    </div>
                    <div class="flex gap-5">
                        <div class="flex items-center gap-2 w-1/2">
                            <label for="first-name" class="block text-lg font-semibold leading-6 text-gray-900 uppercase">Nombre/Ingrediente: </label>
                            <input placeholder="Nombre o Ingrediente: ej. Vodka, Tequila, etc" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">                    
                        </div>
                        <div class="flex items-center gap-2 w-1/2">
                            <label for="first-name" class="block text-lg font-semibold leading-6 text-gray-900 uppercase">Categoria: </label>
                            <select id="currency" name="currency" class="w-full h-full shadow-sm rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" >
                                <option>USD</option>
                                <option>CAD</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="my-60"></div>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>


.bg-image{
    background-image: url("/img/bg.jpg");
}
</style>
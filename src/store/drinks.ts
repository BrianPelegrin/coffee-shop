import { IDrink, IDrinkDetail, ISearchInfo } from "@/interfaces"
import { CocktailServices } from "@/services"
import { defineStore } from 'pinia'
import { computed, onMounted, ref, reactive, watch } from 'vue'
import useLayoutStore from "./layout"

const useDrinkStore = defineStore('drinkStore', () => {
    const layoutStore = useLayoutStore()
    const categories = ref<{strCategory:string}[]>([])
    const drinkList = ref<IDrink[]>([])
    const favorites = ref<IDrinkDetail[]>([])
    const drinkDetail = ref<IDrinkDetail>() 
    const category = ref<string>("Coffee / Tea")

    onMounted(async ()=>{
        await getDrinkRecipes()
        const { data:{ drinks} } = await CocktailServices.getCagories()  
        categories.value = drinks

        const localFavorites = localStorage.getItem('favorites')
        if(localFavorites){
            favorites.value = JSON.parse(localFavorites)    
        }
    })

    watch(favorites,()=>syncFavorites(),{deep:true})    

    const getDrinkDetails = async (id:string | number) =>{         
        const { data } = await CocktailServices.getDrinkDetails(id)   
        //AGREGANDO LOS INGREDIENTES COMO LISTA           
        const ingredientList:string[] = []                
        for(let i = 1; i<15; i++){
            if((data.drinks[0] as any)[`strIngredient${i}`]){
               const ingredient:string = `${(data.drinks[0] as any)[`strMeasure${i}`] ?? '1'}- ${(data.drinks[0] as any)[`strIngredient${i}`]}`                                   
               ingredientList.push(ingredient)
            }
        }
        drinkDetail.value = data.drinks[0]
        Object.assign(drinkDetail.value, {ingredientList:ingredientList})
        //ABRIENDO MODAL
        layoutStore.handleModal()
    }

    const getDrinkRecipes = async () =>{
        const { data } = await CocktailServices.findRecipes(category.value)        
        drinkList.value = data.drinks.map(drink=>{
            Object.assign(drink,{strCategory:category.value})
            return drink
        })
    }

    const handleFavorites = (favDrink:IDrinkDetail) =>{
        const index = favorites.value.findIndex(fav=>fav.idDrink === favDrink.idDrink)
        if(index<0){
            favorites.value.push(favDrink)
            layoutStore.handleNotification(`Se agrego ${favDrink.strDrink} a favoritos!`)
        }else{
            layoutStore.handleNotification(`Se elimino ${favDrink.strDrink} de favoritos!`,false)
            favorites.value = favorites.value.filter(fav=> fav.idDrink != favDrink.idDrink)
        }
    }

    const syncFavorites = () =>{
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }    

    return {
        categories,
        category,
        drinkList,
        drinkDetail,
        favorites,
        getDrinkRecipes,
        getDrinkDetails,
        handleFavorites
    }
})
export default useDrinkStore
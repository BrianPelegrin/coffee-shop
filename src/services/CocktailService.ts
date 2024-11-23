import { CocktailApi } from "@/api"
import { IDrink, IDrinkDetail, ISearchInfo } from "@/interfaces"

export default{
    getCagories(){
        return CocktailApi('/list.php?c=list')
    },
    findRecipes(category:string){        
        return CocktailApi<{drinks:IDrink[]}>(`/filter.php?c=${category}`)
    },
    getDrinkDetails(id:string | number){
        return CocktailApi<{drinks:IDrinkDetail[]}>(`/lookup.php?i=${id}`)        
    }
}
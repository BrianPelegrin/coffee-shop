interface ISearchInfo{
    name:string;
    category:string;
}

interface IDrink{
    idDrink:string;
    strDrink:string;
    strDrinkThumb:string;
    strCategory:string;
}

interface IDrinkDetail extends IDrink{    
    strAlcoholic:string;    
    strGlass:string;
    strInstructions:string;
    strInstructionsES:string;
    strDrinkThumb:string;
    strCreativeCommonsConfirmed:string;
    ingredientList:string[]
}

export type {
    ISearchInfo,
    IDrink,
    IDrinkDetail
}
const loadAllCocktail = () =>{
    const searchInput =document.getElementById('search-input');
    if(searchInput.value ==false){
        document.getElementById('error-text').innerHTML='block';

    }
    else{
        const cocktailUrl =(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
        fetch(cocktailUrl)
        .then(res =>res.json())
        .then(data =>diplayAllDrinks(data))
    }
}
loadAllCocktail()
const diplayAllDrinks = drinks =>{
    console.log(drinks);
    
}
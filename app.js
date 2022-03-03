const loadAllCocktail = () =>{
    const searchInput =document.getElementById('search-input');
    if(isNaN(searchInput.value) === false || searchInput.value==""){
        console.log(isNaN(searchInput.value));
        console.log(searchInput.value=="")
        
        document.getElementById('error-text').style.display='block';

    }
    else{
        // console.log('hhhhhhhhhh')
        const cocktailUrl =(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
        fetch(cocktailUrl)
        .then(res =>res.json())
        .then(data => {
            if(data.drinks==null){
                // console.log(data.drinks==null)
                document.getElementById('error-text').style.display='block';
            }
            else{
                diplayAllDrinks(data.drinks);
                document.getElementById('error-text').style.display='none';
            }
        })
    }
}
// loadAllCocktail()
const diplayAllDrinks = drinks =>{
    // console.log(drinks);
     const allResultContainer =document.getElementById('allDrinksResult')
    //  console.log(allResultContainer)
      drinks.forEach( drink =>{
         const div = document.createElement('div')
         const {strDrink, strDrinkThumb} =drink
        //  console.log(drink)
         div.classList.add('col')
         div.innerHTML=`
           <div class="card">
           <img src="${strDrinkThumb}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${strDrink}</h5>
             <button onclick="drinkDetails('singleDrinks')" type="button" class="btn btn-secondary">Secondary</button>
            </div>
            </div> 
         `;
         allResultContainer.appendChild(div)
    })
    
}

const drinkDetails = (singleDrinks) => {
    // console.log(food1)
    const idUrl =(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${singleDrinks}`);
    fetch(idUrl)
    .then(res => res.json())
    .then(data =>displayDrinks(data[0]))
}

const displayDrinks = (drinksExplore) =>{
     console.log(drinksExplore);
     
}
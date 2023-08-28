//The user will enter a cocktail. Get a cocktail 
//name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)


function getDrink(){

    let drink = document.querySelector('input').value

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks[0])
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb

      document.querySelector('.measure1').innerText = data.drinks[0].strMeasure1
      document.querySelector('.ingredient1').innerText = data.drinks[0].strIngredient1
      document.querySelector('.measure2').innerText = data.drinks[0].strMeasure2
      document.querySelector('.ingredient2').innerText = data.drinks[0].strIngredient2
      document.querySelector('.measure3').innerText = data.drinks[0].strMeasure3
      document.querySelector('.ingredient3').innerText = data.drinks[0].strIngredient3
      document.querySelector('.measure4').innerText = data.drinks[0].strMeasure4
      document.querySelector('.ingredient4').innerText = data.drinks[0].strIngredient4
      document.querySelector('.measure5').innerText = data.drinks[0].strMeasure5
      document.querySelector('.ingredient5').innerText = data.drinks[0].strIngredient5
      document.querySelector('.measure6').innerText = data.drinks[0].strMeasure6
      document.querySelector('.ingredient6').innerText = data.drinks[0].strIngredient6
      document.querySelector('h4').innerText = data.drinks[0].strInstructions



      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

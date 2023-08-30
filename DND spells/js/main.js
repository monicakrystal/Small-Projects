document.querySelector('button').addEventListener('click', dragons)


function dragons(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}/`
  
  document.querySelector('ul').innerHTML = ' '

  fetch (url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.subclasses)
        data.subclasses.forEach(obj => { console.log(obj.name)
          const li = document.createElement('li')
          li.textContent = obj.name
          document.querySelector('ul').appendChild(li)


          
        });

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


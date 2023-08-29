
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=rKPjCjl5KGpXoazn6bBvCca8YdDTKCmMqupE2ujO&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if( data.media_type === "image" ){ 
        document.querySelector('img').src = data.url;
        document.querySelector('img').hidden = false;
        document.querySelector('iframe').hidden = true;
       } else if( data.media_type === "video") {
        document.querySelector('iframe').src = data.url;
        document.querySelector('iframe').hidden = false;
        document.querySelector('img').hidden = true;
       }
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
        document.querySelector('input').innerText = data.date
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


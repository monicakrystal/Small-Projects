
document.querySelector('button').addEventListener('click', romanConverter)


function romanConverter(){

  let roman = document.querySelector('input').value.toUpperCase()

  let data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
  let numbers = roman.split('');
  let sum = 0, i;

	for(i = 0; i < numbers.length; i++)
  {
  	if(data[numbers[i]] < data[numbers[i+1]])
    {
    	sum += data[numbers[i+1]] - data[numbers[i]];
      i++;
    }
    else
    {
    	sum += data[numbers[i]];
    }
  }
  
  document.querySelector('h3').innerText = sum;
  
}

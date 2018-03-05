const numbers = document.querySelectorAll('.grid__item');

numbers.forEach(number => {
  let randomNum = Math.floor((Math.random() * 100) + 1)
  number.innerHTML = randomNum;
  
})
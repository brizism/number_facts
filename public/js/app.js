// Init numbers
const numbers = new Numbers();

// Init ui
const ui = new UI();

const allNumbers = document.querySelectorAll('.grid__item');

allNumbers.forEach(number => {
  let randomNum = Math.floor((Math.random() * 100) + 1)
  number.innerHTML = randomNum;

  number.addEventListener('click', () => {
    numbers.getNumbers(randomNum)
      .then(res => ui.paintFacts(res))
      .catch(err => console.log(err))
  })
})




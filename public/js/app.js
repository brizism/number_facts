// Init numbers
const numbers = new Numbers();

// Init ui
const ui = new UI();

const allNumbers = document.querySelectorAll('.action');
const shuffle = document.getElementById('shuffle');

function generateRandom() {
  allNumbers.forEach(number => {
    let randomNum = Math.floor((Math.random() * 100) + 1)
    number.innerHTML = randomNum;

  })
}

function getNumber() {
  allNumbers.forEach(number => {
    number.addEventListener('click', () => {
      console.log(number.innerHTML);
      numbers.getNumbers(number.innerHTML)
      .then(res => ui.paintFacts(res))
      .catch(err => console.log(err))
    })
  })
}

shuffle.addEventListener('click', () => {
  generateRandom()
})

getNumber()
generateRandom()
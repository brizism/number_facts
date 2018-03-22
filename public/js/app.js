// Init numbers
const numbers = new Numbers();

// Init ui
const ui = new UI();

const allNumbers = document.querySelectorAll('.action');
const shuffle = document.getElementById('shuffle');
const searchForm = document.getElementById('search-num');
const numberInput = document.getElementById('search-input');

function generateRandom() {
  allNumbers.forEach(number => {
    let randomNum = Math.floor((Math.random() * 100) + 1);
    number.innerHTML = randomNum;
  })
}

function getNumber() {
  allNumbers.forEach(number => {
    number.addEventListener('click', () => {
      numbers.getNumbers(number.innerHTML)
      .then(res => ui.paintFacts(res.numbers, number.innerHTML))
      .catch(err => console.log(err))
    })
  })
}

shuffle.addEventListener('click', () => {
  generateRandom()
})

searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const number = numberInput.value;
  
  if(number !== ''){
    numbers.getNumbers(number)
      .then(res => ui.paintYearFacts(res.numbersYear, number))
      .catch(err => console.log(err))
  } else {
    ui.showMessage('Looks like you did not enter a number 😬');
  }

  // Clear input
  numberInput.value = '';
})


getNumber()
generateRandom()
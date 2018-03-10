class UI {
  constructor(){
    this.numbers = document.getElementById('numbers-content');
    this.modal = document.getElementById('numbers-modal');
  }

  // Display number facts in UI
  paintFacts(numbers){
    console.log(numbers);
    this.modal.style.display = 'block';
    let output = `
      <div class="numbers-modal__wrapper">
        <span id="close">&times;</span>
        <h1 class="numbers-modal__number">${numbers.slice(0,2)}</h1>
        <div className="numbers-modal__fact">
          <p>${numbers.slice(3)}</p>
        </div>
        <h3 class="numbers-modal__bgnumber">${numbers.slice(0,2)}</h3>
      </div>
    `
    this.numbers.innerHTML = output;
  }
}
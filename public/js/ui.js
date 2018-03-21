class UI {
  constructor(){
    this.numbers = document.getElementById('numbers-content');
    this.modal = document.getElementById('numbers-modal');
  }

  // Display number facts in UI
  paintFacts(numbers){
    console.log(typeof(numbers))
    this.modal.style.display = 'block';
    let output = `
      <div class="numbers-modal__wrapper">
        <span id="close">&times;</span>
        <h1 class="numbers-modal__number">${numbers.charAt(2) == 0 ? numbers.slice(0,3) : numbers.slice(0,2)}</h1>
        <div class="numbers-modal__fact">
          <p>${numbers}</p>
        </div>
        <div class="numbers-modal__bgnumber">
          <h3>${numbers.charAt(2) == 0 ? numbers.slice(0,3) : numbers.slice(0,2)}</h3>
        </div>
      </div>
    `
    this.numbers.innerHTML = output;

    this.closeModal();
  }

  closeModal(){
    document.getElementById('close').onclick = () => this.modal.style.display = 'none';
    window.onclick = e => e.target == this.modal ? this.modal.style.display = 'none' : this.modal;
  }
}
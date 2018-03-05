class Numbers {
  constructor(){
   
  }

  // Fetch numbers from API
  async getNumbers(number){
    const numbersResponse = await fetch(`http://numbersapi.com/${number}`);

    const numbers = await numbersResponse.text();

    return numbers
  }
}
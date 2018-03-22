class Numbers {
  constructor(){
   
  }

  // Fetch numbers from API
  async getNumbers(number){
    const numbersResponse = await fetch(`http://numbersapi.com/${number}`);
    const numbersYearResponse = await fetch(`http://numbersapi.com/${number}/year`);

    const numbers = await numbersResponse.text();
    const numbersYear = await numbersYearResponse.text();

    return {
      numbers,
      numbersYear
    }
  }
}
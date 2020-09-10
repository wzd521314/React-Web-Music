export function getRandomNumber (num , currentNumber) {
  if(num <= 1) {
    return currentNumber
  }
  let randomNumber = Math.floor(Math.random() * num);
  
  if(randomNumber === currentNumber) { randomNumber = getRandomNumber(num, currentNumber)}

  return randomNumber
}
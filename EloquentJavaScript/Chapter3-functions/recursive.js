// function isEven : accept single parameter, return Boolean. recursive function to check whether the number is even.

const isEven = (number) => {
  if (number === 0) return true;
  if (number === 1) return false;
  return isEven(number - 2);
};

console.log(isEven(0), ' true');
console.log(isEven(1), ' false');
console.log(isEven(2), ' true');
console.log(isEven(11), ' false');

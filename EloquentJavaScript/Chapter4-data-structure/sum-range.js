function range(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result; //array
}

function sum(numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result; //sum of numbers
}

console.log(sum(range(1, 10)));

function range(start, end, step = 1) {
  let result = [];
  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      console.log(i);
      result.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      console.log(i);
      result.push(i);
    }
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
console.log(sum(range(1, 10, 2)));
console.log(sum(range(10, 1, -1)));

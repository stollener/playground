function everyLoop(array, predicate) {
  let result = true;
  for (let element of array) {
    if (element !== predicate) result = false;
  }
  return result;
}

function everySome(array, predicate) {
  return !array.some( a => predicate != a );
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 3, 3];

console.log(everyLoop(array1, 3));  // false
console.log(everyLoop(array2, 3));  // true

console.log(everySome(array1, 3));  // false
console.log(everySome(array2, 3));  // true

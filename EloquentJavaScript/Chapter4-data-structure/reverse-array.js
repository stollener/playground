const reverseArray = array => {
  let newArray = [];
  for (let element of array) {
    newArray.unshift(element);
  }
  return newArray;
};

const reverseArrayInPlace = array => {
  const arrayLength = array.length;
  for (let i = array.length - 1; i >= 0; i--) {
    array.push(array[i]);
  }
  for (let i = 0; i < arrayLength; i++) {
    array.shift();
  }
};

let array1 = [1, 2, 3];
console.log(reverseArray(array1));
console.log(array1);

let array2 = [4, 5, 6];
reverseArrayInPlace(array2);
console.log(array2);
function deepEqual(a1, a2) {
  for (let element in a1) {
    if (typeof a1[element] == 'object') {
      if (!deepEqual(a1[element], a2[element])) return false;
    } else {
      if (a1[element] != a2[element]) return false;
    }
  }
  for (let element in a2) {
    if (typeof a1[element] == 'undefined') return false;
  }
  return true;
}

console.log(deepEqual(1, '1'));
console.log(deepEqual({blah: 1}, {blah: 1}));

let a = {blah: 2};
let b = {blah: 2};
console.log(deepEqual(a, b));

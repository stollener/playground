/*

  bean counting

function countBs : 1 argument - string
function countChar : 2 argument, 1 - string, 2 - to be counted character

*/

function countBs(words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] == "B") {
      count++;
    }
  }
  return count;
}

function countChar(words, character) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] == character) {
      count++;
    }
  }
  return count;
}


console.log(countBs("This is a bird. I am a Boy."), '1');
console.log(countChar("This is a bird. I am a boy.", "a"), '3');

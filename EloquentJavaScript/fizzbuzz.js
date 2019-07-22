// Make 'Fizz' on the numbers divisible by 3, 'Buzz' on 5, 'FizzBuzz' on 3 and 5 

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      console.log('FizzBuzz');
    } else {
            console.log('Fizz');
    }
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

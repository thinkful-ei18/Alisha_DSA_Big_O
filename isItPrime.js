'use strict';
let count = 0;

function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    count++;
    console.log('count:', count);
    if (n % i == 0) return false;
  }
  return true;
}

console.log(isPrime(1));
// false

console.log(isPrime(2));
// true

console.log(isPrime(3));
// count: 1
// true

console.log(isPrime(5));
// count: 1
// count: 2
// count: 3
// true


/*
WRONG ANSWER:
O(1)

- the function only takes one input so there can only be one result
- operation 1: constant
- operation 2: constant
- operation 3: constant


===== CORRECT ANSWER: =====
O(n)

- when you use a loop it takes away the constant part.
- the input doesn't have length, BUT, you have to loop as many times as necessary until 
  you reach the value of n. 
- THUS, the amount of operations is directly proportional to how large the number is
  because the loop will last that much longer

*/

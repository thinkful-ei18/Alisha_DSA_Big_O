'use strict';

function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log(isPrime(1));
// false

console.log(isPrime(2));
// true

console.log(isPrime(3));
// true

/*
O(1)

- the function only takes one input so there can only be one result
- operation 1: constant
- operation 2: constant
- operation 3: constant

*/
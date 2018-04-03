'use strict';

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(findRandomElement([1, 2]));
// 2

console.log(findRandomElement([1, 2, 3]));
// 1

console.log(findRandomElement([1, 2, 3, 4]));
// 3

/*
O(1)

- math.random will produce a number between 0 and the length of the array you pass in
- math.floor will round that number down to the nearest whole number
- then you return the array item at the index of that whole number

- no matter the length of the array, you only perform one operation and only get one 
  answer

*/
'use strict';

function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

/*
O(n)

- the function takes an array and a secondary number that can be foudn within that array
- the loop continues until the array at index i equals that secondary number
- in the worst case scenario the secondary number is the vey last number of the array

- thus, the amount of operations is directly proportional to the length of the array

*/
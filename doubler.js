'use strict';

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

/*
O(n)

- the function takes one array
- the first operation is linear because the length of the array 
  directly affects the amount of times the loop will be carried out
- the second operation is constant

- the linear operation is causing the delay

*/
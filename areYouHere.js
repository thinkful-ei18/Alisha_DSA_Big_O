'use strict';

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

/*
O(n^2)

- the function takes 2 arrays.
- the first operation is a nested loop so it's polynomial
- the second operation is constant

- the polynomial operation is causing the delay so this algorithm is polynomial

*/
'use strict';

function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}

createPairs([1, 2]); 
// (1, 2) 
// 2 indexes = 2 results

createPairs([1, 2, 3]); 
// (1, 2), (1, 3), (2, 3)
// 3 indexes = 6 results

createPairs([1, 2, 3, 4]); 
// (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)
// 4 indexes = 12 results

createPairs([1, 2, 3, 4, 5]);
// (1, 2), (1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5), (3, 4), (3, 5), (4, 5)
// 5 indexes = 20 results

/*
O(n^2)

- the function receives one array
- there is a nested loop which is a polynomial operation 
- results = (array.length^2) - array.length

- the polynomial operation is the delay

*/
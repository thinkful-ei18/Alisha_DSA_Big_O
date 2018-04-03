'use strict';

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    console.log('current index: ', currentIndex);

    currentElement = array[currentIndex];
    console.log('current element: ', currentElement);

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}


efficientSearch([1, 2, 3, 4, 5], 5);
/*
current index:  2
current element:  3
current index:  3
current element:  4
current index:  4
current element:  5
*/
// 5 inputs, 3 loops

efficientSearch([1, 2, 3, 4, 5, 6, 7, 8], 5);
/*
current index:  3
current element:  4
current index:  5
current element:  6
current index:  4
current element:  5
*/
// 8 inputs, 3 loops


efficientSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 5);
/*
current index:  5
current element:  6
current index:  2
current element:  3
current index:  3
current element:  4
current index:  4
current element:  5
*/
// 12 inputs, 4 loops



/*
O(log(n))

- operation 1: constant
- operation 2: constant
- operation 3: constant
- operation 4: constant
- operation 5: logarithmic. each time through the loop, the array length is reduced
- operation 6: constant

- the logarithmic operation is the delay

*/
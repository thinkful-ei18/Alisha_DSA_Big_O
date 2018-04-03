'use strict';

function isEven(value) {
  if (value % 2 == 0) {
    return true;
  }
  else
    return false;
}

/*
O(1)

The parameter is singular and there's no reference to an array index so I'm assuming that the input is a singular number. 
As such, there's only one operation happening to complete the function. The input value is either true or false, then the algorithm ends.
*/

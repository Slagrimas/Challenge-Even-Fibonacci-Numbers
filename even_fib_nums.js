/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
 console.log(maxFibValue)
const arr = [1, 2];
for (let i = 0; i <arr.length; i++) {
  if(arr[arr.length - 1] < maxFibValue) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
}
for (let k = 0; k < arr.length; k++) {
  if(arr[k] % 2 === 0) {
    sum += arr[k];
  }
}

// var p = 0;
// var c = 1;
// var next;

// for ( i = 1; i < 100; i++){
//   next = c + p;
//   p = c;
//   c = next;
//   if(current %2 === 0 && c < 4000000) {
//     sum += current;
//     console.log(sum)
//   }
// }
  return sum;
  
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var arr = [1, 2];
  for (let i = 0; i < arr.length; i++) {
    if (arr[arr.length - 1] < maxFibValue) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < maxFibValue) {
      highest = arr[i];
      // return highest;
    }
  }
  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};
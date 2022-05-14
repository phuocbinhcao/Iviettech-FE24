var myArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var array = [];
function printArray() {
  for (i = 1; i <= 10; i++) {
    array = array + " " + i;
  }
  console.log(array);
  return array;
}
printArray();

function myFunction(array) {
  max =  Math.max(array);
  console.log(max);
}

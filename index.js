/* 
Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

Sample Output:
"0 is even"
"1 is odd"
"2 is even"

HINT:
Use modulo opeerator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
*/

for (i = 0; i <= 15; i++){

  if ((i % 2) == 0 ){
    console.log(i + " = Even");
  }
  else {
    console.log(i + " = Odd")
  }
}


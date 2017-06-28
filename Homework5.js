// Exercise 1
// function addNumbers(numberA, numberB) {
//   return numberA + numberB;
// }

// var twoPlusTwo = addNumbers(2, 2)
//
// console.log(twoPlusTwo) // 4

// Exercise 2
// function yell(string){
//   return string.toUpperCase();
// // };
//
// // console.log(yell("hello, world!"));
//
// function yell10 (string){
//   return yell(string).repeat(10);
// }

// console.log(yell10("string"));
// Exercise 3
// function longest(strA, strB){
//   if (strA.length>strB.length){
//     return strA;
//   }
//   else if (strB.length > strA.length){
//     return strB;
//   }
//   else {
//     return "the two strings are equal in length";
//   }
// }
// console.log (longest("this is a short string", "this is a string"));

// // Exercise 4
function checkVowel(letter) {
  var letter = letter.toUpperCase();
  if (letter === "A" || letter === "E" || letter === "I" |
   letter === "O" || letter === "U") {
     return true;
   }
   else {
     return false
   }
};
console.log(checkVowel("i"));

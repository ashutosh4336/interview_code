// console.log('Hello World');

// let name = 'Ashutuosh';
// let num = false;
// console.log(typeof typeof num);

// function makeFunc() {
//   const name = 'Ashutosh4336';
//   function dispName() {
//     console.log(name);
//   }
//   return dispName;
// }

// const mkeFunc = makeFunc();
// mkeFunc();

// prototype

// double == compare the value
// === value and type

// use strict
// so if we use 'use strict' all the code  that we write in that file is in strict mode
// So we can avoid some error like if we create a global variable it'll give us a error
// Coding style, Elimates the
// Runs fater in strict mode

// function isPal(string) {
//   return string
//     .split('')
//     .reverse()
//     .join('');
// }

// function countLet(param, str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === param) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLet('s', 'ashutosh'));

function findDup(array) {
  let duplicate = [];
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      obj[array[i]] = true;
    } else {
      //   return array[i];
      duplicate.push(array[i]);
    }
  }
  return duplicate;
}
console.log(findDup([3, 4, 9, 5, 6, 7, 6, 8, 9, 1, 1]));

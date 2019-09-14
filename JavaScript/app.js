/* variable and DataTypes */
// const firstName = 'Ashutosh';
// const lastName = 'Panda';

// const fullAge = true;

// console.log(firstName + ' ' + lastName);
// console.log(fullAge);

// Variable Mutation //

// let age = 25;
// age = 21;

// console.log(age);

// const name = prompt('What is Your Name');
// // console.log(name);
// prompt(name);

function test_prime(n) {
  if (n === 1) {
    console.log(`${n} is Neither Prime nor a Composite Number`);
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(test_prime(9));

//Basic Operator //

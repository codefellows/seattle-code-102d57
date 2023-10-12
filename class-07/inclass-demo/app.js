'use strict';

// console.log('hey from my external js sheet!');

// alert('Welcome to my page!');
// alert('Nice to have you here');

function getName(){
  let userName = prompt('What is your name?');
  return userName;
}


function greetUser(name){
  if(name == ''){
    name = prompt('Come on please tell me your name!');
  }
  document.write('Welcome ' + name + '!');
}


function getAge(){
  let userAge = prompt('How old are you?');
  return userAge;
}

function specialMessage(age){
  if(age == ''){
    age = prompt('Don\'t be ashamed, tell me your age!');
  }

  if(age < 30){
    document.write('You got rizz!');
  } else if (age == 50) {
    document.write('You have charisma!');
  } else {
    document.write('Keep doing you!');
  }

}


// **** FUNCTIONS *****

// *** ANATOMY OF A FUNCTION ***

// ! FUNCTION DECLARATION
function grab(){
  //  ** executable code
  // ** close hand
}

//  ! Calling or invoking our function
grab();


// ** Parameters - placeholders in a function declaration that will be placed inside ( )
function addTwoNumbers(num1, num2){
  let sum = num1 + num2;

  // console.log('sum is: ', sum);
  return sum;
}



//  ** Arguments - actual values when invoking a function that will be placed inside ( )
let mySum = addTwoNumbers(2,10);
let myNewSum = addTwoNumbers(100, 50);
let anotherSum = addTwoNumbers(2,20);

// console.log('my sum:', mySum);
// console.log('my newsum:', myNewSum);
// console.log('another sum:', anotherSum);

// function addTwoNumbers(){
//   let num1 = 4;
//   let num2 = 10;

//   let sum = num1 + num2;

//   console.log('sum is: ', sum);
//   return sum;
// }

// *** Function Expression

let myNewFunction = function(){
  console.log('This is a function expression');
}

// myNewFunction();

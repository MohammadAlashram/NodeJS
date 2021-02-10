//1- write a variable without initial value

// var i = String;
var i = null;
console.log(i);

//2- write a variable with initial value
// var i = "Hello String";
var i = 55;
console.log(i);

//3- write 3 variables in same line without initial value
var x = null, y = null, z = null;
console.log(x,y,z);
// console.log(typeof(x,y,z));

//4- write 3 variables in same line with initial value
var x = 4, y = true, z = "String";
console.log(x,y,z);
// console.log(typeof(x));

//5- write 3 variables with Boolean value
var a = true, b = false, c = true;
console.log(a,b,c);
// console.log(typeof(a));

//6- write a constant
const fixedPi = 3.14;

//7- write an empty array without initializing its size
// var testArray = new Array();
var testArray = [];
console.log(testArray);
// console.log(typeof(testArray));

//8- write an array of number from 1 to 10
// var testArray = new Array(1,2,3,4,5,6,7,8,9,10);
var testArray = new Array(1,2,3,4,5,6,7,8,9,10);
console.log(testArray);

//9- write an array of strings has letters from A to J
var arr = new Array("A",'B',"C","D","E","F","J");
console.log(arr);

//10- Write an Object has at least 3 attributes (keys) and give each one a numeric value
var user = {    
    sallary: 150,
    age: 26,
    number: 0777777777,   
  };
  console.log(user.age);

//11- write an object has at least 3 attributes (keys) and give each one a string value
  var user = {  
    name: "Mohammad" , 
    bornIn: "Amman",
    job: "developer",
  };
  console.log(user.name);

//12- write an object has at least 3 attributes (keys) and give each one a Boolean value
var user = {  
    smoker: false , 
    LovePets: true ,
    trainee: true,
  };
  console.log(user.smoker);

//13- write an object has at least 3 attributes (keys) and give each one an array value
let journal = [
    {food: ["pizza", "chiken", "Potato"]
            },
    {deserts: ["ice cream", "Chocolate"]
            },
    {sports: ["football", "tenis"]
            },
  ];
  console.log(journal);

  //14- write an object has at least 3 attributes (keys) and give each one an object value (object of objects)
  let number = [
    {z: 1, x: 2},
    {z: 3, x: 4},
    {z: 5, x: 6},

];
console.log(number);

//15- Write an object has at least 5 attributes (keys) and give each one different type of values including: string, number, Boolean, array, object
let user5 =  {A: 'A', B: [1], C: false, D:4 , E:"Hello" }
console.log(user5);

//16- Write an array of objects
let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    }]
    console.log(cars);

//17- write an array of objects, and each objects is an object of objects that has an array, this array will have at least one object
// let arr = [{ key: [{ array: [{ obj: "test" }] }] }];

//18- Write a function to sum two numbers passed in parameters
  function sum(x, y) {
    return x + y;
  }
  console.log(sum(20, 5));

//19- write a function to multiply two numbers
  function multiply(x, y) {
    return x * y;
  }
  console.log(multiply(4, 6));

//20- write a function to sum two numbers entered by user
  function sum(x, y) {
    return x + y;
  }
  console.log(sum(9, 11));

//21- write a function to multiply two numbers entered by user
  function multipl(x, y) {
    return x * y;
  }
  console.log(multipl(2, 3));

//22- Write a function to return a value
function hello(){
    return "hello world";
  };
  hello();

//23- Write a function to print a value
function print() {
    return "hello world123";
  };
console.log(print());


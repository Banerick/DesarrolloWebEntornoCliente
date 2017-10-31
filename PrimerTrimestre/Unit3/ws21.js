//Write examples with Arrays to solve the next problems using only Array methods
//a: find largest number
var largest = (array) => {array.forEach((part,index
) =>{
    var i = array[0];
    if (i > array[index]){
    i = array[index];
    }
    }
  return i;
)};
//b: find longest string
var longest = (array) => {array.forEach((part,index
) =>{
    var i = array[0];
    if (i.lenght > array[index].lenght){
    i = array[index];
    }
    }
  return i;
)};
//c) find even numbers
var even = (array) => {array.filter((item) => {return item%2 != 0})};
//d find odd numbers
var odd = (array) => {array.filter((item) => {return item%2 == 0})}
//e find words that contain 'is'
var isContainers = (array) => {array.filter((item) => {return item }
//f assert all numbers are divisible by three
var threedivi = (array) => {array.filter((item) => {return item%3 == 0})}

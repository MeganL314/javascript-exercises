const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((a,b)=> a+b, 0);
};

const multiply = function(arr) {
  return arr.reduce((a,b)=> a*b, 1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let sum = 1;
	while(a > 0){
    sum = sum * a;
    a = a - 1;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

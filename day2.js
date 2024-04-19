//assignment 2
// fibonacci series 
// for loop
function fibonacci(num) {
	let num1 = 0;
	let num2 = 1;
	let sum;
	let i = 0;
	for (i = 0; i < num; i++) {
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	}
	return num2;
}

console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));

// recursive function
function fibonacci(num) {
	if (num == 1)
		return 0;
	if (num == 2)
		return 1;
	return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));

//while loop
function fibonacci(num) {
	if (num == 1)
		return 0;
	if (num == 2)
		return 1;
	let num1 = 0;
	let num2 = 1;
	let sum;
	let i = 2;
	while (i < num) {
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
		i += 1;
	}
	return num2;
}

console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));

//  prime number assignment 2
function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i < num; i++) {
      if (num % i === 0) {
          return false; // If num is divisible by any number other than 1 and itself
      }
  }
  return true; // If no divisors were found, num is a prime number
}
// Example of user input (in a real-world scenario, this could be from a form or console input)
const userInput = 12;
console.log(`Is ${userInput} a prime number? `, isPrime(userInput));

// String palindrome assignment 3
function isPalindrome(str) {
	let j = str.length - 1
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] != str[j]) {
			return false;
		}
		j--;
	}
	return true;
}

let str1 = "racecar";
let str2 = "mom";
let str3 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

//number palindrome
var a = 12321;
var c = 0;
var t = a;

while(a > 0){
    b = a % 10;
    c = 10 * c + b;
    a = parseInt(a / 10);
}

console.log(c);

if(c == t){
    console.log("The number is a palindrome");
} else {
    console.log("the number is not a palindrome");
}

//factorial for given number

function factorial(n) {
	let answer = 1;
	if (n === 0 || n === 1) {
	  return answer;
	} else if (n > 1) {
	  for (let i = n; i >= 1; i--) {
		answer = answer * i;
	  }
	  return answer;
	} else {
	  return "number has to be positive.";
	}
  }
  
  let n = 5;
  let result = factorial(n);
  console.log("Factorial of " + n + " : " + result);

//lcd and gcm of given number
function GCD(num1, num2) {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

function LCM(num1, num2) {
    return (num1 * num2) / GCD(num1, num2);
}

let number1 = 8;
let number2 = 10;
let lcm = LCM(number1, number2);
let gcd = GCD(number1, number2);
console.log("Least Common Multiple :", lcm);
console.log("Greatest Common Divisor :", gcd);

//square and square root of a given number
function square(num) {
    return num * num;
}
function squareRoot(num) {
    if (num < 0) {
        return "Error: Cannot find square root of a negative number.";
    }
    return Math.sqrt(num);
}
let num = 9;
console.log("Square: " + square(num));
console.log("Square Root: " + squareRoot(num));
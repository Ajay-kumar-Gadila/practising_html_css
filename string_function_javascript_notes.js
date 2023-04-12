Write the js code using function with different 10 ways of writing function conditions
Sure! Here are 10 different ways to write JavaScript functions with different conditions:

Using a regular function declaration with an if statement:
js
Copy code
function greet(name) {
  if (name) {
    return "Hello, " + name + "!";
  } else {
    return "Hello, stranger!";
  }
}
Using a function expression with a ternary operator:
js
Copy code
const greet = function(name) {
  return name ? "Hello, " + name + "!" : "Hello, stranger!";
};
Using an arrow function with a conditional (ternary) operator:
js
Copy code
const greet = name => (name ? "Hello, " + name + "!" : "Hello, stranger!");
Using a default parameter value:
js
Copy code
function greet(name = "stranger") {
  return "Hello, " + name + "!";
}
Using a switch statement:
js
Copy code
function greet(name) {
  switch (name) {
    case "":
      return "Hello, stranger!";
    default:
      return "Hello, " + name + "!";
  }
}
Using an object to define multiple functions with different conditions:
js
Copy code
const greet = {
  "": () => "Hello, stranger!",
  default: name => "Hello, " + name + "!"
};
Using a Map to define multiple functions with different conditions:
js
Copy code
const greet = new Map([
  ["", () => "Hello, stranger!"],
  ["default", name => "Hello, " + name + "!"]
]);

const greetPerson = name => (greet.has(name) ? greet.get(name)(name) : greet.get("default")(name));
Using a factory function to generate different functions based on conditions:
js
Copy code
function greet(isStranger) {
  if (isStranger) {
    return () => "Hello, stranger!";
  } else {
    return name => "Hello, " + name + "!";
  }
}

const greetPerson = greet(false);
Using a higher-order function to modify the behavior of a function based on conditions:
js
Copy code
function greet(name, formatter) {
  const greetMsg = "Hello, " + name + "!";
  return formatter ? formatter(greetMsg) : greetMsg;
}

const greetPerson = greet("John", msg => msg.toUpperCase());
Using an Immediately Invoked Function Expression (IIFE) with a conditional statement:
js
Copy code
const greetPerson = ((name) => {
  if (name) {
    return "Hello, " + name + "!";
  } else {
    return "Hello, stranger!";
  }
})("John");
These are just some examples of different ways to write JavaScript functions with different conditions. There are many other possible approaches depending on the specific requirements of your code.




gadeelaajaykumar
Different conditions using recursion function
Sure! Here are 3 examples of JavaScript recursive functions with different conditions:

Factorial function using recursion:
js
Copy code
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const result = factorial(5); // Returns 120
Fibonacci sequence function using recursion:
js
Copy code
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const result = fibonacci(7); // Returns 13
Countdown function using recursion:
js
Copy code
function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
  } else {
    console.log(n);
    countdown(n - 1);
  }
}

countdown(5); // Logs 5, 4, 3, 2, 1, "Done!"
These are just a few examples of how you can use recursion to write JavaScript functions with different conditions. Recursive functions are powerful tools for solving problems that require repetitive or iterative calculations, and they can be implemented in various ways depending on the specific requirements of your code.




gadeelaajaykumar
String function in js with 10 diff examples
Sure! Here are 10 different examples of string functions in JavaScript:

Concatenation: Concatenates two or more strings using the + operator or the concat() method.
js
Copy code
const str1 = "Hello";
const str2 = "World";
const result = str1 + " " + str2; // "Hello World"

// or using the concat() method
const str1 = "Hello";
const str2 = "World";
const result = str1.concat(" ", str2); // "Hello World"
Length: Retrieves the length of a string using the length property.
js
Copy code
const str = "Hello";
const len = str.length; // 5
Substring: Extracts a portion of a string using the substring() method.
js
Copy code
const str = "Hello World";
const result = str.substring(0, 5); // "Hello"
Replace: Replaces all occurrences of a substring in a string using the replace() method.
js
Copy code
const str = "Hello World";
const result = str.replace("World", "JavaScript"); // "Hello JavaScript"
Uppercase/Lowercase: Converts a string to uppercase or lowercase using the toUpperCase() and toLowerCase() methods.
js
Copy code
const str = "Hello";
const uppercase = str.toUpperCase(); // "HELLO"
const lowercase = str.toLowerCase(); // "hello"
Trim: Removes leading and trailing whitespace from a string using the trim() method.
js
Copy code
const str = "   Hello World    ";
const result = str.trim(); // "Hello World"
Split: Splits a string into an array of substrings based on a delimiter using the split() method.
js
Copy code
const str = "Hello,World,JavaScript";
const result = str.split(","); // ["Hello", "World", "JavaScript"]
IndexOf: Returns the index of the first occurrence of a substring in a string using the indexOf() method.
js
Copy code
const str = "Hello World";
const index = str.indexOf("World"); // 6
Includes: Checks if a substring exists in a string using the includes() method.
js
Copy code
const str = "Hello World";
const isIncluded = str.includes("World"); // true
Starts/Ends With: Checks if a string starts or ends with a specific substring using the startsWith() and endsWith() methods.
js
Copy code
const str = "Hello World";
const startsWithHello = str.startsWith("Hello"); // true
const endsWithWorld = str.endsWith("World"); // true
These are just some examples of the many string functions available in JavaScript. Strings are a fundamental data type in JavaScript, and these functions can be very useful for manipulating and working with strings in your code.




gadeelaajaykumar
Another 10 diff examples
Sure! Here are 10 more examples of string functions in JavaScript:

Repeat: Repeats a string a specified number of times using the repeat() method.
js
Copy code
const str = "Hello";
const repeatedStr = str.repeat(3); // "HelloHelloHello"
Slice: Extracts a portion of a string and returns a new string without modifying the original string, using the slice() method.
js
Copy code
const str = "Hello World";
const slicedStr = str.slice(0, 5); // "Hello"
CharAt: Retrieves the character at a specified index in a string using the charAt() method.
js
Copy code
const str = "Hello";
const char = str.charAt(1); // "e"
CharCodeAt: Retrieves the Unicode value of the character at a specified index in a string using the charCodeAt() method.
js
Copy code
const str = "Hello";
const charCode = str.charCodeAt(1); // 101
LocaleCompare: Compares two strings and returns a number indicating their relative order using the localeCompare() method.
js
Copy code
const str1 = "Hello";
const str2 = "World";
const comparison = str1.localeCompare(str2); // -1
Match: Searches a string for a match against a regular expression using the match() method.
js
Copy code
const str = "Hello World";
const matchResult = str.match(/world/i); // ["World"]
Repeat: Repeats a string a specified number of times using the repeat() method.
js
Copy code
const str = "Hello";
const repeatedStr = str.repeat(3); // "HelloHelloHello"
Replace: Replaces a portion of a string with a new string using the replace() method with a regular expression.
js
Copy code
const str = "Hello World";
const replacedStr = str.replace(/world/i, "JavaScript"); // "Hello JavaScript"
Substr: Extracts a portion of a string with a specified length and starting index using the substr() method.
js
Copy code
const str = "Hello World";
const substr = str.substr(6, 5); // "World"
ToLocaleUpperCase/ToLocaleLowerCase: Converts a string to uppercase or lowercase based on the current locale using the toLocaleUpperCase() and toLocaleLowerCase() methods.
js
Copy code
const str = "Hello";
const uppercase = str.toLocaleUpperCase(); // "HELLO"
const lowercase = str.toLocaleLowerCase(); // "hello"
These are additional examples of string functions in JavaScript that can be used for various string manipulations and operations in your code. String functions are powerful tools for working with text data, and they can be used in a wide range of applications.





Regenerate response
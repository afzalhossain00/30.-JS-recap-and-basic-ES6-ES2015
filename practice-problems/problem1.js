// 1. Write an arrow function that will take 3 parameters, will multiply the parameters  and will return the result.

const multiply = (a, b, c) => a * b * c;
const result = multiply(2, 3, 5);
console.log(result);


// 2. Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani
const sentence = `I am a web developer.
I love to code.
I love to eat biryani`
console.log(sentence);


// 3. Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const add = (a, b = 0) => a + b;
const sum = add(10)
console.log(sum);

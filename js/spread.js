const max = Math.max(12, 14, 50, 98, 10)
console.log(max);
const numbers = [12, 14, 50, 98, 10]
const largest = Math.max(...numbers);
console.log(...numbers)
console.log(largest)

const numbers2 = [...numbers]
numbers.push(60);
numbers2.push(455);
console.log(numbers)
console.log(numbers2)
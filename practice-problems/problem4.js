/*Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the result
Print the result.*/

arrayOne = [1, 2, 3, 4, 5];
arrayTwo = [6, 7, 8, 9, 0];

const arrayFunction = (firstArray, secondArray) => {
    const newArray = [...firstArray, ...secondArray];
    console.log(newArray);
    const maximum = Math.max(...newArray)
    return maximum;
}
console.log(arrayFunction(arrayOne, arrayTwo));

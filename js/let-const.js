// breakup with var
// no more use of var
// let: let it to reassign
// const: do not allow it to reassign

let money = 25;
money = 35;
console.log(money);


const bird = 'jaan pakhi';
// bird = 'moyna pakhi';
const message = bird + ' ' + 'potas potas';
console.log(message);

const numbers = [12, 20, 54, 85];
// reassign is not allowed
// numbers = [50,30,94,85];
numbers.push(14);
numbers[1] = 65;

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}
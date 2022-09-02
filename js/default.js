// function add(first, second) {
//     // second = second || 0;
//     // if (second === undefined) {
//     //     second = 0;
//     // }
//     const total = first + second;
//     return total;
// }

function add(first, second) {

    const total = first + second;
    return total;
}
const result = add(10);
console.log(result);

function fullName(first, last = 'Hossain') {
    const name = first + ' ' + last;
    return name;
}
const name = fullName('Afzal')
console.log(name);
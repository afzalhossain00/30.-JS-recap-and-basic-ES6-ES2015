const fish = {
    name: 'King Hilsha',
    addrss: 'chandpur',
    color: 'silver',
    phone: '01912507592',
    price: 4000
}
const phone = fish.phone;
const name = fish.name;
const price = fish.price;
console.log(phone)

const { addrss, color } = fish;
console.log(addrss, color)

// array destructring
const [first, second] = [44, 25, 46, 78, 658]
console.log(first, second);

// const nayoks = ['sakib', 'bappi', 'raaz'];
// const [king, flop, new] = nayoks;
// console.log(new);

function getNames() {
    return ['kabir', 'salam'];
}
const [baba, chacha] = getNames();
console.log(chacha, baba);

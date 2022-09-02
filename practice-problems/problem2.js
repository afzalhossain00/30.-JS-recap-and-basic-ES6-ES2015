// Write an arrow function where it will do the following:

// a) It will take an array where the array elements will be the name of your friends

// b) Check if the length of each element is even, push elements with even length to a new array and return the result Print the result

const friends = ['salam', 'kalam', 'balam', 'polash', 'afir', 'asif']

const anotherArrow = friendlist => {
    const newArray = [];
    for (i = 0; i < friendlist.length; i++) {
        if (friendlist[i].length % 2 == 0) {
            newArray.push(friendlist[i]);
        }
    }
    return newArray;
}
const result = anotherArrow(friends);
console.log(result);
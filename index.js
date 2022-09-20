const stringLength = (word) => word.length;

console.log(stringLength("Barbara"));


const train = (words, firstLetter, lastLetter) => {
    word = words.slice(firstLetter, lastLetter);
    return word.toUpperCase();
}

console.log(train('abcdefghijklmnopqrstuvwxyz', 4, 5));


const capitals = (word) => word.toUpperCase();

console.log(capitals("I love you"));

const decimalPlace = (number, dp) => number.toFixed(dp);

console.log(decimalPlace(1.23456789, 3));

const toNum = (string) => Number(string);

console.log(toNum("45"));

const ar = () => {
let words = ['red', 'yellow', 'green', 'blue'];
let ret = words[0];
let ret1 = words[3];
return [ret, ret1];
}
console.log(ar());

const ar1 = () => {
    let words = ['red', 'yellow', 'green', 'blue'];
    words.push("orange");
    return words;
    }
    console.log(ar1());

    const ar2 = () => {
        let words = ['red', 'yellow', 'green', 'blue'];
        let woords = words[2];
        return woords;
        }
        console.log(ar2());

const ar3 = () => {
    const arr2 = [23123, 2, -328, 0];
    arr2.sort(function (a, b) {
        return a - b;
});
return arr2[0];
}
console.log(ar3());
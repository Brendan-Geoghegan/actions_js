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

console.log(decimalPlace(1.23456789, 2));

const toNum = (string) => Number(string);

console.log(toNum("45"));

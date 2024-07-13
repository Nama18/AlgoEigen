function reverseAlphabet(input) {
    const alphabets = input.slice(0, -1).split('').reverse().join('');
    const number = input.slice(-1);
    return alphabets + number;
}

const input = "NEGIE1";
console.log(reverseAlphabet(input)); // Output: EIGEN1

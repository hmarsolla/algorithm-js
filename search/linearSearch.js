// Linear Search is the simplest search algorithm. It works by iterating through each element of the array and checking if it matches the target value.

// Steps:

// 1 - Start from the first element and iterate through the array.
// 2 - Compare each element with the target value.
// 3 - If a match is found, return the index.
// 4 - If no match is found by the end of the array, return -1.

function linearSearch(array, target) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === target) {
            return index;
        }
    }
    return -1;
}

// Example usage:
let array = [2, 3, 4, 10, 40];
let target = 10;
console.log(linearSearch(array, target)); // 3
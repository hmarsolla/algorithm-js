// Jump Search is a searching algorithm for sorted arrays. The basic idea is to check fewer elements by jumping ahead by fixed steps or blocks rather than searching all elements. If the element at the current block is greater than the target, a linear search is performed within the previous block.

// Steps:

// 1 - Divide the array into blocks of size √n (where n is the length of the array).
// 2 - Jump ahead by block size until the block containing the target value is found.
// 3 - Perform a linear search within the identified block.

function jumpSearch(array, target) {
    let n = array.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (array[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) {
            return -1;
        }
    }

    while (array[prev] < target) {
        prev++;
        if (prev == Math.min(step, n)) {
            return -1;
        }
    }

    if (array[prev] == target) {
        return prev;
    }

    return -1;
}

// Example usage
let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
let target = 55;
console.log(jumpSearch(arr, target)); // 10
// Exponential Search is particularly useful for unbounded or infinite lists. It works by finding the range where the target value may exist and then performing a binary search within that range.

// Steps:

// 1 - Start with the first element.
// 2 - Exponentially increase the range until the target value is within the range.
// 3 - Perform a binary search within the identified range.

function exponentialSearch(array, target) {
    if (array[0] == target) {
        return 0;
    }

    let index = 1;
    while (index < array.length && array[index] <= target) {
        index = index * 2;
    }

    return binarySearch(array, target, index / 2, Math.min(index, array.length - 1));
}

function binarySearch(array, target, left, right) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Example usage
let arr = [2, 3, 4, 10, 40];
let target = 10;
console.log(exponentialSearch(arr, target)); // 3
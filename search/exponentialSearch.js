// Exponential Search is particularly useful for unbounded or infinite lists. It works by finding the range where the target value may exist and then performing a binary search within that range.

// Steps:

// 1 - Start with the first element.
// 2 - Exponentially increase the range until the target value is within the range.
// 3 - Perform a binary search within the identified range.

function exponentialSearch(array, target) {
    let n = array.length;

    if (array[0] == target) {
        return 0;
    }

    let i = 1;
    while (i < n && array[i] <= target) {
        i = i * 2;
    }

    return binarySearch(array, target, i / 2, Math.min(i, n - 1));
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
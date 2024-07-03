// Binary Search is a highly efficient search algorithm that works on sorted arrays. It operates by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. Repeat until the value is found or the interval is empty.

// Steps:

// 1 - Find the middle element of the array.
// 2 - If the middle element is the target value, return its index.
// 3 - If the target value is less than the middle element, repeat the search on the left half of the array.
// 4 - If the target value is greater than the middle element, repeat the search on the right half of the array.

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

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
let array = [2, 3, 4, 10, 40];
let target = 10;
console.log(binarySearch(array, target)); // 3
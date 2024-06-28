// Quick Sort is a highly efficient sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

// Steps:

// 1 - Choose a pivot element.
// 2 - Partition the array into two halves – elements less than the pivot and elements greater than the pivot.
// 3 - Recursively apply the above steps to the sub-arrays.
// 4 - Combine the results.

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[Math.floor(array.length / 2)];
    let left = [];
    let right = [];

    for (let index = 0; index < array.length; index++) {
        if (index === Math.floor(array.length / 2)) continue;
        if (array[index] < pivot) {
            left.push(array[index]);
        } else {
            right.push(array[index]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
let array = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(array)); // [1, 1, 2, 3, 6, 8, 10]
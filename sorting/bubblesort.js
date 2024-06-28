// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

// Steps:

// 1 - Compare each pair of adjacent elements.
// 2 - Swap them if they are in the wrong order.
// 3 - Repeat the process until no swaps are needed.

function bubbleSort(array) {
    let n = array.length;
    let swapped;

    do {
        swapped = false;
        for (let index = 0; index < n - 1; index++) {
            if (array[index] > array[index + 1]) {
                [array[index], array[index + 1]] = [array[index + 1], array[index]];
                swapped = true;
            }
        }
    } while (swapped);

    return array;
}

// Example usage
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // [11, 12, 22, 25, 34, 64, 90]
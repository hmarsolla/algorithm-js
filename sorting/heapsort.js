// Heap Sort is a comparison-based sorting technique based on a binary heap data structure. It's similar to selection sort where we first find the maximum element and place it at the end. We repeat the same process for the remaining elements.

// Steps:

// 1 - Build a max heap from the input data.
// 2 - At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of the heap by one.
// 3 - Heapify the root of the tree.
// 4 - Repeat steps 2 and 3 while the size of the heap is greater than 1.

function heapSort(array) {
    let n = array.length;
    
    // Build max heap
    for (let index = Math.floor(n / 2) - 1; index >= 0; index--) {
        heapify(array, n, index);
    }

    // Extract elements from heap one by one
    for (let index = n - 1; index > 0; index--) {
        // Move current root to end
        [array[0], array[index]] = [array[index], array[0]];
        // Call max heapify on the reduced heap
        heapify(array, index, 0);
    }

    return array;
}

function heapify(array, n, index) {
    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < n && array[left] > array[largest]) {
        largest = left;
    }

    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== index) {
        [array[index], array[largest]] = [array[largest], array[index]];
        heapify(array, n, largest);
    }
}

// Example usage
let arr = [12, 11, 13, 5, 6, 7];
console.log(heapSort(arr)); // [5, 6, 7, 11, 12, 13]
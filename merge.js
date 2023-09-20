const mergeSort = (array) => {
    const merge = (leftArray, rightArray) => {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;
        
        
        while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
            if (leftArray[leftIndex] < rightArray[rightIndex]) { 
                result.push(leftArray[leftIndex]);
                leftIndex++;
            } else {
                result.push(rightArray[rightIndex]); 
                rightIndex++;
            }
        }

        while (leftIndex < leftArray.length) { 
            result.push(leftArray[leftIndex]);
            leftIndex++;
        }

        while (rightIndex < rightArray.length) { 
            result.push(rightArray[rightIndex]);
            rightIndex++;
        }
    
        return result
    }

    if (array.length === 0) {
        console.error('Target array must not be empty!');
        return
    }

    if (array.length === 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2); 
    const leftPart = array.slice(0, mid);
    const rightPart = array.slice(mid, array.length);
    
    const sortedLeft = mergeSort(leftPart);
    const sortedRight = mergeSort(rightPart);
    
    return merge(sortedLeft, sortedRight);
}
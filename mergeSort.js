function mergeSort(array) {
    //if array length = 1, return
    if (array.length == 1) return array;
    //else
    else {
        let halfLength = Math.floor(array.length / 2);
        let left = mergeSort(array.splice(0, halfLength))
        let right = mergeSort(array);
        
        return merge(left, right);
    }
}

function merge(left, right) {
    const arraylength = left.length + right.length;
    let finalArray = [];
    while (finalArray.length < arraylength) {
        if (left.length == 0) {
            finalArray = finalArray.concat(right);
        }
        else if (right.length == 0) {
            finalArray = finalArray.concat(left);
        }
        else {
            if (left[0] < right[0]) {
                finalArray.push(left[0]);
                left.splice(0,1);
            }
            else {
                finalArray.push(right[0]);
                right.splice(0,1);
            }
        }
    }
    
    return finalArray;
}
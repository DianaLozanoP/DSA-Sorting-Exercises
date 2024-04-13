function merge(arr1, arr2) {
    const finalArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            finalArray.push(arr1[i])
            i++;
        }
        else {
            finalArray.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        finalArray.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        finalArray.push(arr2[j])
        j++;
    }
    return finalArray;
}

function mergeSort(arr) {
    //base case
    if (arr.length <= 1) return arr;
    //subdividr array in two 
    const mid = Math.floor(arr.length / 2)
    //define the two subarrays
    //call recursively the function again
    //until we have one value to compare each other
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    //we can use the merge function to decide the order
    return merge(left, right)
}

module.exports = { merge, mergeSort };
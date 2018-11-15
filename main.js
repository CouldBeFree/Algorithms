// Binary search

function findNum(arr, elem){
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start - end) / 2);
    while(arr[middle] !== elem && start <= end){
        if(arr[middle] > elem){
            end = middle - 1;
        }
        else{
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === elem ? middle : -1;
}

let testArr = [1,3,4,5,9,12,13,14,17,20,33];

findNum(testArr, 9);

// Substring search

function substringSearch(long, short) {
    let count = 0;
    for(let i = 0; i < long.length; i++){
        for(let j = 0; i < short.length; j++){
            if(short[j] !== long[i+j]) break;
            if(j === short.length - 1) count++;
        }
    }
    return count;
}

// Bubble sort

function bubbleSort(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }
    return arr
}

// Another sort

function sortArr(arr) {
    for(let i = 0; i<arr.length; i++){
        let lowest = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr
}

let testArray = [12, 1, 10, 4, 5, 3, 44];

// Insertion Sort

function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(var j = i - 1; j>=0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr
}

console.log(insertionSort(testArray));
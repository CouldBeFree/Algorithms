// Binary search

function findNum(arr, elem){
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start - end) / 2);
    while(arr[middle] !== elem){
        if(arr[middle] > elem){
            end = middle - 1
        }
        else{
            start = middle + 1
        }
        middle = Math.floor(start + end) / 2
    }
    return middle
}

let testArr = [1,3,4,5,9,12,13,14,17,20,33];

console.log(findNum(testArr, 17));
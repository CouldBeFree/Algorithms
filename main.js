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
        var currentVal = arr[i];
        for(var j = i - 1; j>=0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr
}

// Merge sort

function mergeSort(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            result.push(arr1[i]);
            i++;
        }
        else{
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

// Square

function generate (end, step) {
    let arr = [];
    for (let i=0; i<=end; i+=step){
        arr.push(i)
    }
    return arr
}

function square(n){
    return n.map(item => item * item);
}

function sum(n){
    let sum = 0;
    for(let i=0; i<n.length; i++){
        sum+=n[i]
    }
    return sum;
}

// Recursion

function checkEven(n) {
   if(n===10){
       return n
   }

   else if(n%2 === 0){
       console.log(n)
   }

   return checkEven(n-1)
}

// checkEven(600);

// Find min

function min(a, b) {
    if(a > b){
        return b
    }

    return a;
}

// Recursion

function isEven(num) {
    if(num%2===0){
        return true
    }
    else if(num%2===1){
        return false
    }
    else{
        return isEven(num * -1)
    }
}

// Count uppercase

function countBs(str) {
    let targetChar = [];
    for(let i=0; i<str.length; i++){
        let char = str[i];
        if(char === 'B'){
            targetChar.push(char);
        }
    }
    return targetChar.length
}

// console.log(countBs('asdsad'));

function countChar(str, char) {
    let charCount = [];
    for(let i = 0; i < str.length; i++){
        let character = str[i];
        if(character === char){
            charCount.push(character);
        }
    }
    return charCount.length;
}

// console.log(countChar('asddadwewf', 'a'));

// Reverse

function reverseString(str){
    var strArr = str.split('');
    return strArr.reverse();
}

// console.log(reverseString('Hello'));

// Factorial

function fuctorial(num){
    var result = 1;
    for(let i = 0; i < num; i++){
        result = result * (num - i);
    }
    return result
}

function longestWord(string){
    let str = string.split(' ');
    let longest = 0;
    let word = null;
    for(let i = 0; i < str.length; i++){
        if(longest < str[i].length){
            longest = str[i].length;
            word = str[i];
        }
    }
    return word
}

console.log(longestWord('Howwwwwwwww are u doing?'));
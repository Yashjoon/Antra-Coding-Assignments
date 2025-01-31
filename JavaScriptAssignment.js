// Question 1

function reverseANumber(num){
    let sign = 1;
    if(num < 0){
        sign = -1;
    }

    let reversed = num.toString();
    reversed = reversed.split('');
    reversed = reversed.reverse();
    reversed = reversed.join("");

    return sign * parseInt(reversed);
}

//console.log(reverseANumber(32243));
// works

// Question 2

function isPalindrome(str){
    //basic logic --> reverse, check if reverse = og 
    let ans = false;

    reversedStr = str.split('').reverse().join('');
    
    if(reversedStr.replaceAll(" ", '') == str.replaceAll(" ", '')){
        ans = true;
    }

    return ans;
}

// console.log(isPalindrome("madam")); 
// console.log(isPalindrome("nurses run"));
// console.log(isPalindrome("bottle"));
// works

// Question 3

function stringCombinations(str){
    let arr = [];

    for(let i = 0; i < str.length; i++){
        let temp = "";
        for(let j = i; j < str.length; j++){
            temp += str[j];
            arr.push(temp);
        }
    }
    return arr;
}

// console.log(stringCombinations("dog"));
//works

// Question 4
function sortAlphabetically(str){
    let arr = str.split("").sort().join('');
    return arr;
}

// console.log(sortAlphabetically("webmaster"));
//works

// Question 5

function firstLetterUppercase(str){
    let title = str.split(" ");
    
    title.forEach((word,index) => {
        s = word.slice(1, word.length);
        title[index] = word.charAt(0).toUpperCase() + s;
    });

    return title;
}
//console.log(firstLetterUppercase("the quick brown fox"));
// works

// Question 6

function longestWordWithin(str){
    let arr = str.split(" ").sort((a,b)=>{
        if (a.length>b.length){
            return 1;
        }else if(a.length<b.length){
            return -1;
        }else{
            return 0;
        }
    })

    return arr[arr.length-1];  
}

// console.log(longestWordWithin("Web Development Tutorial"));
// works 

// Question 7
function countVowels(str){
    let regex = /[AEIOU]|[aeiou]/g;
    
    let arr = Array.from(str.matchAll(regex)); // match all returns iterator type so need to convert to array 
    
    return arr.length;
}

// console.log(countVowels("The quick brown fox"));
// works 

// Question 8 

function checkPrime(num){     //prime numbers = only / by 1 and itself 
    let bool = true;

    if(num < 1){
        return false;
    }
    // 2,3 prime numbers 
    if(num == 2 || num == 3){
        return true;
    }
    // check all numbers from 4 to num if can be divided
    for(let i = 4; i<num;i++){
        if((num % i) == 0){
            return false;
        }
    }

    return bool;
}
//console.log(checkPrime(7));
// works 

// Question 9 

function getType(x){
    return typeof(x);
}


// console.log(getType(()=>{1+2}));
//works 

// Question 10 

function identityMatrix(n){ // 2d array where diagonal 1s and rest 0s 

    let matrix = new Array(n);

    for(let i = 0; i<n;i++){
        matrix[i] = new Array(n)
        for(let j = 0; j<n;j++){
            if (i == j){
                matrix[i][j] = 1;
            }else{
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

//console.log(identityMatrix(4));
// works 

// Question 11

function findSecondLowestAndSecondGreatest(nums){
    sorted = nums.sort((a,b)=>a-b);

    return [sorted[1],sorted[sorted.length-2]]
}
// console.log(findSecondLowestAndSecondGreatest([1,2,3,4,5]))
// works 


// Question 12

function isNumberPerfect(num){
    bool = false; 
    let divisors = 0;

    if(num < 0|| num < 6){ // 6 is the first perfect number so anything less isnt
        return false;
    }
    // num == to the sum of all of its divisors /2 

    for(let i = 1; i<=num; i++){
        if((num % i) == 0){
            divisors += i;
        }
    }

    if (divisors/2 == num ){
        return true
    }
    return bool;
}

// console.log(isNumberPerfect(6));
// console.log(isNumberPerfect(28));
// console.log(isNumberPerfect(496));
// console.log(isNumberPerfect(8128));
// Works

// Question 13

function findFactors(num){
    let factors = []
    for(let i = 1; i<=num; i++){
        if((num % i) == 0){
            factors.push(i);
        }
    }
    return factors;
}

// console.log(findFactors(12));
// works 

// Question 14

function amountToCoins(num){
    let coins = [25,10,5,2,1]; // coins types : 25, 10, 5, 2, 1  
    let count = num;
    let amountInCoins = [];

    let i = 0;
    while(i < coins.length){
        if(count == 0){
            return amountInCoins;
        }else if(count - coins[i] >= 0){
            amountInCoins.push(coins[i]);
            count -= coins[i]
        }else{
            i ++;
        }
    }
    return amountInCoins;
}

// console.log(amountToCoins(46));
// Works 

// Question 15

function computeBN(b,n){
    return b**n; 
}

// console.log(computeBN(2,3));
// Works

// Question 16 

function extractUniqueCharacters(str){
    let s = str;
    let ans = ""
 
    let set = new Set();
    for(let char of str){
        if(!set.has(char)){
            set.add(char);
            ans += char;
        }
    }

    return ans;
}

// console.log(extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog") == "thequickbrownfxjmpsvlazydg");
// Works 

// Question 17

function countLetters(str){
    let dict = {};

    for(let char of str){
        if (char in dict){
            dict[char]++; 
        }else{
            dict[char] = 1;
        }
    }

    return dict;
}

// console.log(countLetters('aabbbcdddd')) // a - 2, b - 3, c - 1, d - 4
// Works 

// Question 18 NO WORK YET

function binarySearch(arr,target){
    let sorted = arr.sort((a,b)=>a-b); //sorting first so can split 
    let start = 0; // allows us to dynamically choose which part of the array to look at 
    let end = sorted.length-1;
    let middleIndex = Math.floor((start+end)/2);
 
    while(start<=end){  // 1, 2, 3, 4, 5 ,6, 7 --> middle = 4, 4>3, check left side [1,2,3], middle = 2
        let middleValue = sorted[middleIndex];

        if(middleValue == target){
            return true;
        }else if (middleValue > target){//check left
            end = middleIndex - 1;
    
        }else{//check right
            start = middleIndex + 1; 
        }

        middleIndex = Math.floor((start+end)/2);
    }
    return false;
}

// console.log(binarySearch([1,2,3,4,5,6,7],3));// true
// console.log(binarySearch([6,7,1,2,3,4],6));// true
// console.log(binarySearch([1,1,1,1,1,1],2));// false
// Works 

// Question 19

function findLarger(arr,target){
    return arr.filter((num)=>num>target);;
}

// console.log(findLarger([3,4,44,6,7,1,12],7));
// Works 

// Question 20 

function generateRandomString(num){
    let charListArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
    
    let i = 0;
    let randomString = ""
    while(i < num){
        let randomChar = charListArr[Math.floor(Math.random()*charListArr.length-1)]; // need to use floor since Math.random doesnt give int 
  
        randomString += randomChar;
        i++;
    }
    return randomString;
}

// console.log(generateRandomString(12))
// Works 

// Question 21 

function arraySubset(arr,length){

    let subsets = [];

    for(let i = 0;i<arr.length;i++){
        for(let j = i+1; j<arr.length;j++){// i + 1 allows it to not use repeat pairs ie chooses 1,2, then 1,3 then 1,4. next outer loop does 2,3 3,4, etc
            subsets.push([arr[i],arr[j]]);
        }
    }
    return subsets;
}
// console.log(arraySubset([1,2,3,4],2)); // should give us [[2,1],[3,1][2,3]]
// Works

// Question 22
function numOccurrences(str,char){

    let regex = new RegExp("["+char+"]","g");
    return Array.from(str.matchAll(regex)).length;
   
}
// console.log(numOccurrences('microsoft.com', 'o'));
// console.log(numOccurrences("aaaaaaaaaa", 'a'));
// Works

// Question 23 

function findFirstNonRepeatedChar(str){
    let char = '';
    // can also use numOccurrences and find first char with 1 occurrences

    // add to set if not in set and if in set then remove. first with occurrences = 1 will be first element of the set

    let set = new Set();

    for(let i = 0;i<str.length;i++){
        if(set.has(str[i])){// duplicate
            set.delete(str[i]);
        }else{
            set.add(str[i]);
        }
    }

    return Array.from(set)[0];
}

// console.log(findFirstNonRepeatedChar('abacdxdbec'));
// Works

// Question 24

function bubbleSort(arr){
    let sorted = arr;

    for(let i = 0;i<arr.length;i++){
        for(let j = i;j<arr.length;j++){
            if(sorted[i]<sorted[j]){// swap forward 
                let temp = sorted[i];
                sorted[i] = sorted[j];
                sorted[j] = temp;

            }

        }
    }

    return sorted;
}

// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])); 
// Works

// Question 25 

function longestCountryName(arr){
    let countriesSorted = arr.sort((a,b)=>{
        if(a.length>b.length){
            return -1;
        }else if(a.length<b.length){
            return 1;
        }else{
            return 0;
        }
    })
    return countriesSorted[0];
}
// console.log(longestCountryName(["Australia", "Germany", "United States of America"]));
// Works

// Question 26 

function longestNonRepeatingSubstring(str){
    let currentSubstring = new Set();
    let longestSubstring = "";
    let leftPointer = 0;
    let rightPointer = 0;

    for(rightPointer; rightPointer<str.length;rightPointer++){ // check each substring and remove from front when a duplicate found 
        while(currentSubstring.has(str[rightPointer])){
            // delete front 
            currentSubstring.delete(str[leftPointer]);
            leftPointer ++;
        }
        // not duplicate 
        currentSubstring.add(str[rightPointer]);

        if(longestSubstring.length<currentSubstring.size){ // updating substring if current>old
            
            longestSubstring = Array.from(currentSubstring).join("");
        }
    }

    return longestSubstring;

}
// console.log(longestNonRepeatingSubstring('aabcdalab')); // --> bcdal
// Works

// Question 27 

function longestPalindrome(str){

    let palindromes = [];
    let longest = 0;

    
// isPalindrome() function from question 2
    for(let i = 0;i<str.length; i++){
        for(let j = i;j<str.length;j++){
            let sub = str.substring(i,j+1);
            if (isPalindrome(sub) == true && sub.length >= longest){ //checking if we have a absolute largest substring
                longest = sub.length;
                palindromes.push(sub);           
            }

        }
    }
    return palindromes.filter((str)=>str.length == longest);

}

// console.log(longestPalindrome("bananas"));
// console.log(longestPalindrome("abracadabra"));
//Works


function multiplyByTwo(num){
    return num*2;
}
// Question 28 
function passJSFunction(num,fun){
    return fun(num);
}
// console.log(passJSFunction(2,multiplyByTwo))
// Work


// Question 29 

function getJSFunctionName(fun){

    return fun.name;
}
function doNothing(){

}

// console.log(getJSFunctionName(doNothing))
//Works

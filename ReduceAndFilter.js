// overriding the Array.reduce() function

Array.prototype.myReduce = function(inputFunction, initalValue){

    if(typeof(inputFunction) != 'function'){
        throw new Error('inputFunction is not a function'); 
    }

    if(initalValue === undefined  && this.length == 0){
        throw new Error('array = [] and no inital'); 
    }

    let accumulator;
    let startingIndex;

    if(initalValue === undefined  && this.length != 0){
        accumulator = this[0]; // setting accumulator to first element of array or inital value given 
        startingIndex = 1;// 1 bc we already add the first element 
    }else{
        accumulator = initalValue;
        startingIndex = 0;

    }

    for(let i = startingIndex; i <this.length;i++ ){
        accumulator = inputFunction(accumulator,this[i],i,this); // proccesses each array index and adds them up
    }

    return accumulator;
}


console.log([1,2,3,4].myReduce((accumulator, currentValue) => accumulator + currentValue,0));
console.log([1,2,3,4].myReduce((accumulator, currentValue, index, array) => accumulator + currentValue, 0)); // works with all of the possible inputs
//Works

// arr.myFilter()


// overriding the Array.filter() function

Array.prototype.myFilter = function(inputFunction,thisArg){

    if(typeof(inputFunction) != 'function'){
        throw new Error('inputFunction is not a function'); 
    }

    let filteredArr = [];

    for(let i = 0; i <this.length;i++ ){
        if(inputFunction(this[i],i,this)){
            filteredArr.push(this[i])
        }
    }
    return filteredArr;
}


console.log([1,2,3,4].myFilter((element) => element >2));
console.log([1,2,3,4].myFilter((element,index,array) => element > 2)); // works with all of the possible inputs

//Work
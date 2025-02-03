function lotteryFunction (plays){
    let counter = 0;
    return function count(){
        for(let i = 0; i<plays;i++){
        if(counter<5){
            console.log("Congrats you earn the chance!");
        }else{
            console.log("Sorry you missed the chance");
        }
        counter ++;
    }
    }();
}

lotteryFunction(100);





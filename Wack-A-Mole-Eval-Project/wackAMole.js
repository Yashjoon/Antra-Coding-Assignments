const View = (() => {

    const domSelector = {
        startButton: document.querySelector("#startButton"),
        scoreCounter: document.querySelector("#scoreCounter"),
        clockCountdown: document.querySelector("#clockCountdown"),
        allGameButtons: document.querySelectorAll(".gameCircles button"),
        
    }
    
    const renderMole = (button)=>{
        button.innerHTML = `<img src ="mole.jpeg" height = "100%" width = "auto"></img>;`;
        button.classList.add("molePopUp"); //adding property to check if mole is up or not 
    };

    const removeMole = (button)=> {
        button.innerHTML = ``;
        button.classList.remove("molePopUp");
    };
    
    return{domSelector,renderMole,removeMole};
})()


const Model = ((view) => {

    class State {

        constructor() {
            this._molePositions = [];
            this._score = 0;
            this._clockTime = 30;
        }

        reset(){
            this._molePositions = [];
            this._score = 0;
            this._clockTime = 30;
        }

        getMolePositions(){
            return this._molePositions;
        }

        updateScore(){
            this._score++;
        }
        getScore(){
            return this._score;
        }

        addMolePosition(mole){
            this._molePositions.push(mole);
        }
        removeSecond(){
            this._clockTime--;
        }
        getTimeLeft(){
            return this._clockTime;
        }
        removeMole(removing){
            this._molePositions = this._molePositions.filter((elem)=> elem != removing);
        }

    }
    return{State};

})(View)

const Controller = ((view, model) => {

    const {domSelector, renderMole,removeMole} = view;
    const {State} = model;
    const state = new State();

    let entireTimeInterval;
    let moleSpawnInterval;

    const addRandomMole = ()=>{
        if(state.getMolePositions().length<3){
            let randomMole = Math.floor(Math.random()*12);
            if(state.getMolePositions().includes(randomMole) == false){
                renderMole(domSelector.allGameButtons[randomMole]);
                state.addMolePosition(randomMole)
            }
        }
       };

       const moleClicked  = (event) =>{

        let clickedButton = event.currentTarget;
        //check if button has a mole 
        if(clickedButton.classList.contains("molePopUp")){
            removeMole(clickedButton); // removes mole from innerHTML
            state.updateScore();
            domSelector.scoreCounter.textContent = state.getScore();   

            //getting the index of the button that was clicked
            let indexOfClicked = Array.from(domSelector.allGameButtons).indexOf(clickedButton);

            //need to remove button from active mole buttons in state 
            state.removeMole(indexOfClicked);
        }
       };

    domSelector.startButton.addEventListener("click",()=>{ // on start button what happens 
        //reset game 
        state.reset();
        domSelector.clockCountdown.textContent = 0;
        domSelector.scoreCounter.textContent = 0;

        // clock interval reset 
        clearInterval(entireTimeInterval);
        clearInterval(moleSpawnInterval);

        //need to remove all moles 
        domSelector.allGameButtons.forEach((button)=>removeMole(button));

        // need to initlaize every button listener 
        domSelector.allGameButtons.forEach((button)=>{
        button.addEventListener("click",moleClicked);});


        moleSpawnInterval = setInterval(addRandomMole, 1000); // add a mole every 1 second until there are 3 moles on the board

        entireTimeInterval = setInterval(()=>{ // makes clock count down and handles when game finishes 
            state.removeSecond();
            domSelector.clockCountdown.textContent = state.getTimeLeft();

            if(state.getTimeLeft() == 0){
                // finish game and alert 
                finishGame();
            }

        },1000);
       });

    const finishGame = () =>{
        clearInterval(entireTimeInterval);
        clearInterval(moleSpawnInterval);
        state.reset();
        domSelector.clockCountdown.textContent = 0;
        domSelector.scoreCounter.textContent = 0;
        domSelector.allGameButtons.forEach((button)=>removeMole(button));
        alert("Time is Over !");
    };
})(View, Model)
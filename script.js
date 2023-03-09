console.log("these -------is tic-tac-toe game")
let music = new Audio("music.mp3")
let AudioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X";

//function to change the turn
const changeTurn = () =>{
    return turn === "X"?"0":"X";
}

//function to chake for win
const checkWin =()=>{

    // it play gameover sound and winning gif

}




// Game logic


// we are giving 1 event listener to each box
let boxes = document.getElementsByClassName("box");
// above statement we provides us html collection so
// we have to make a array collection for the purpose we use it in foreach loop
Array.from(boxes).forEach(element =>{
    //as boxtext is class of span in game container
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', ()=>{
        if (boxtext.innerHTML===''){
            boxtext.innerText===turn;
            changeTurn();
            AudioTurn.play();
            checkWin();
            document.getElementsByClassName("turn")[0].innerText = "turn for " + turn;
        }
    }) 
})

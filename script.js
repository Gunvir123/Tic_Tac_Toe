console.log("Welcome to tic tac toe game ");
let turn ="X";
let gameOver = false;

// function to change the turn

const changeTurn=()=>{
  return turn==="X"?"O":"X";
}

// function to check who wins

function checkWin()
{
  let item = document.getElementsByClassName("item"); 
  let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i=0;i<wins.length;i++){
    let[a,b,c]=wins[i];
    if(item[a].innerHTML!=="" && (item[a].innerHTML===item[b].innerHTML)&&(item[a].innerHTML===item[c].innerHTML)){
        gameOver = true;
        win.innerHTML= item[a].innerHTML + " Wins";
        return item[a].innerHTML;
        
    }
  }  
  return -1;
}

// check if the game has drawn

function checkDraw(){
    let item = document.getElementsByClassName("item");
    for(let i=0;i<item.length;i++){
        if(item[i].innerHTML==="")
        return false;
    }
    return true;
}

//adding event listener so that when one clicks it should put according to turn
let item = document.getElementsByClassName("item");
let win = document.getElementById("win");
win.innerHTML="Turn for X"
for(let i=0;i<item.length;i++){
    item[i].addEventListener('click',()=>{
       
        if( !gameOver && item[i].innerHTML==='')
        {
            item[i].innerHTML=turn;
            turn = changeTurn();
            win.innerHTML="Turn for "+ turn;
        }
        let winner=checkWin();
        if(winner!==-1){
        
            win.innerHTML= item[a].innerHTML + " Wins";   
        }
        else if(checkDraw()){
            win.innerHTML=" DRAW";  
            gameOver = true;  
        }


        }
        
   )
}

//reset the game 
function reset()
{
  let item = document.getElementsByClassName("item");
  for(let i=0;i<item.length;i++){
    item[i].innerHTML="";
  }
  turn="X";
  gameOver=false;
  win.innerHTML="Turn for X";
}

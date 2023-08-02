
let upperdisplay=document.querySelector('.gameinfo');
let allbox=document.querySelectorAll(".box");
let lowerdisplay=document.querySelector(".newgame");

let currentplayer="";
let internalcheck;
let winningposition=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

function start(){
  
    currentplayer="X";
    internalcheck=[" "," "," "," "," "," "," "," "," "];
    allbox.forEach((box,ind)=>{
      box.innerHTML=" ";
      allbox[ind].style.pointerEvents = "all";
    });

    lowerdisplay.classList.remove("active");
     
     upperdisplay.innerHTML=`Current Player - ${currentplayer}`;
    allbox.forEach((box)=>{
    box.classList.remove("win");
   })
}
start();

function swapturn(){
    if(currentplayer=="X"){
        currentplayer="O";
    }
    else{
        currentplayer="X"
    }

    upperdisplay.innerHTML=`Current Player - ${currentplayer}`;



}
allbox.forEach((box,index)=>{
  box.addEventListener("click",()=>{
    makechange(index);
  });

  
});

function checkwinner(){
  let answer="";

  winningposition.forEach((pos)=>{
      if((internalcheck[pos[0]]!=" "||internalcheck[pos[1]]!=" "||internalcheck[pos[2]]!=" ")&&(internalcheck[pos[0]]===internalcheck[pos[1]])&&(internalcheck[pos[1]]===internalcheck[pos[2]])){
        

        answer=internalcheck[pos[0]];
        allbox[pos[0]].classList.add("win");
        allbox[pos[1]].classList.add("win");
        allbox[pos[2]].classList.add("win");
        

        allbox.forEach((box)=>{
          box.style.pointerEvents = "none";
        });
       
      }
      
  });

  if(answer!=""){
    upperdisplay.innerHTML=`Winner is-${answer}`;
    lowerdisplay.classList.add("active");

  }
  else{
  let count=0;

  internalcheck.forEach((val,ind)=>{
    if(internalcheck[ind]!=" "){
      count++;
    }
  });

  if(count==9){
    upperdisplay.innerHTML="Game Tied";
    lowerdisplay.classList.add("active");
  }
}
}
function makechange(index){
 
  if(internalcheck[index]===" "){
      allbox[index].innerHTML=currentplayer;
      internalcheck[index]=currentplayer;
     allbox[index].style.pointerEvents = "none";
     swapturn();
     checkwinner();
  }

}
lowerdisplay.addEventListener("click",start);






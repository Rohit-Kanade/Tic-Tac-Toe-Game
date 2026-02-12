

let usercsore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const userScoreSpan=document.getElementById("player-score");
const compScoreSpan=document.getElementById("computer-score");
const msg=document.getElementById("msg");
const msgContainer=document.querySelector(".msg-container");    

 
const getcomchoice=()=>{
    const options=["rock","paper","scissor"];
    const randomnum=Math.floor(Math.random()*3);
    return options[randomnum];
}
const drawGame=()=>{
    console.log("Game has been drawn");
    msg.innerText="Game has been drawn";
    msg.style.backgroundColor="#081d1d";
    msgContainer.classList.remove("hide");
};

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("Congratulations! You win");
        usercsore++;
        msg.innerText=`Congratulations! You win. ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else {
        console.log("Computer wins! Better luck next time");
        compscore++;
        msg.innerText=`Computer wins! Better luck next time. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
    msgContainer.classList.remove("hide");
}
    
const updateScore=()=>{
    const userScoreSpan=document.getElementById("player-score");
    const compScoreSpan=document.getElementById("computer-score");
    userScoreSpan.innerText=usercsore;
    compScoreSpan.innerText=compscore;
}


const playgame=(userchoice)=>{
    console.log(`user choice is ${userchoice}`);
    const compchoice=getcomchoice();
    console.log(`computer choice is ${compchoice}`);

    if(userchoice===compchoice){
        drawGame();
    }
    else {
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;

        }else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
        updateScore();
    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
       const userchoice=choice.getAttribute("id");
         playgame(userchoice);

        
    });
});

'use strict';
'use strict';

var guessNumber = Math.floor( Math.random()*20) +1 ;
console.log(guessNumber)
let score = 20;
let highscore = 0;
let message = "Start guessing...";

//btn
document.querySelector(".check")
//msg
document.querySelector(".message")
//input
document.querySelector(".guess")

document.querySelector(".score").innerHTML= score;
document.querySelector(".message").innerHTML=message;


/*function lose() {
    message="You Lose";
    document.querySelector(".message").innerHTML=message;
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".number").innerHTML = guessNumber;
    document.querySelector("h1").innerHTML = "You Lose"
    document.querySelector(".score").innerHTML= "0";
    document.querySelector(".highscore").innerHTML= "0";
}*/
 



document.querySelector(".check").addEventListener('click',()=>{

    var input =  document.querySelector(".guess").value;

    if(+input >20 || +input <1){
        message="You Lose";
        document.querySelector(".message").innerHTML=message;
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector(".number").innerHTML = guessNumber;
        document.querySelector("h1").innerHTML = "You Lose"
        document.querySelector(".score").innerHTML= "0";
        document.querySelector(".highscore").innerHTML= "0";
        document.querySelector(".check").disabled = true;

        //lose();
    }

   
    if  (input > guessNumber){
        message="Number is low";
        document.querySelector(".message").innerHTML=message;
        score = score - 2;
        document.querySelector(".score").innerHTML= score;

    }
    else if (input < guessNumber){
        message="Number is High";
        document.querySelector(".message").innerHTML=message;
        score = score - 2;
        document.querySelector(".score").innerHTML= score;
    }
    else{
        highscore =  score;
        message="number is equal";
        document.querySelector(".message").innerHTML=message;
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".highscore").innerHTML= highscore;
        document.querySelector(".number").innerHTML = guessNumber;
        document.querySelector("h1").innerHTML = "Congrats You Win";
        document.querySelector(".check").disabled = true;
    }
        if(score == 0){

        message="You Lose";
        document.querySelector(".message").innerHTML=message;
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector(".number").innerHTML = guessNumber;
        document.querySelector("h1").innerHTML = "You Lose"
        document.querySelector(".score").innerHTML= "0";
        document.querySelector(".highscore").innerHTML= "0";
        document.querySelector(".check").disabled = true;
        //lose();
}
    
})


    document.querySelector(".again").addEventListener('click',()=>{

        score = 20;
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector(".guess").value = ""; //l valeur eli f west l input radineh fere8
        document.querySelector(".number").innerHTML = "?";
        document.querySelector(".score").innerHTML= "20";
        document.querySelector("h1").innerHTML = "Guess My Number!"
        message="Start guessing...";
        document.querySelector(".message").innerHTML=message;   
        guessNumber = Math.floor( Math.random()*20) +1 ;
        console.log(guessNumber)
        document.querySelector(".check").disabled = false;
        highscore=0
        
   
    })
    

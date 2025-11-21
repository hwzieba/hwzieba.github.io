var round=0;
function play(usernumber){
    const options = [
        "rock",
        "paper",
        "scissors"
    ];
    var randomnumber=number=parseInt(Math.floor(Math.random() * 3));
    console.log("Computer chose "+options[randomnumber]);
    if((usernumber==0 && randomnumber==1)||(usernumber==1 && randomnumber==2)||(usernumber==2 && randomnumber==0)){
        document.getElementById("game").innerHTML+="<p><h1>You lose.</h1></p><p>You've chosen the "+options[usernumber]+".<br>The computer has chosen the "+options[randomnumber]+".</p>";
        round++;
        if(round==3){
            document.getElementById("game").innerHTML+="<h1>Game over!</h1>"
        }
    }
    else if((usernumber==randomnumber)||(usernumber==randomnumber)||(usernumber==randomnumber)){
        document.getElementById("game").innerHTML+="<h1>Draw.</h1><p>You and computer have both chosen the "+options[randomnumber]+".</p>";
        round++;
        if(round==3){
            document.getElementById("game").innerHTML+="<h1>Game over!</h1>"
        }    
    }
    else{
        document.getElementById("game").innerHTML+="<h1>You win!</h1><p>You've chosen the "+options[usernumber]+".<br>The computer has chosen the "+options[randomnumber]+".</p><h1>Game over!</h1>";
        round=3;
    }
    if(round==3){
        document.getElementById("btn").style.display="none";
    }
}
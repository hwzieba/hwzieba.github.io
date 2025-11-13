function play(usernumber){
    const options = [
        "rock",
        "paper",
        "scissors"
    ];
    var randomnumber=number=parseInt(Math.floor(Math.random() * 2));
    if((usernumber==0 & randomnumber==1)||(usernumber==1 & randomnumber==2)||(usernumber==2 & randomnumber==0)){
        alert("You lose.\nYou've chosen the "+options[usernumber]+".\nThe computer has chosen the "+options[randomnumber]+".");
    }
    else if((usernumber==randomnumber)||(usernumber==randomnumber)||(usernumber==randomnumber)){
        alert("Draw. You and computer have both chosen the "+options[randomnumber]+".");
    }
    else{
        alert("You win!\nYou've chosen the "+options[usernumber]+".\nThe computer has chosen the "+options[randomnumber]+".");
    }
}
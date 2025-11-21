function songLyrics(){
    for(i=99;i>=0;i--){  
        if(i==1){
            document.getElementById("main").innerHTML+="<p>1 bottle of beer on the wall, 1 bottle of beer<br>Take one down and pass it around, no more bottles of beer on the wall</p>";
        }
        else if(i==0){
            document.getElementById("main").innerHTML+="<p>No more bottles of beer on the wall, no more bottles of beer<br>Go to the store and buy some more, 99 bottles of beer on the wall</p>";
        }
        else{
            var c=i-1;
            document.getElementById("main").innerHTML+="<p>"+i+" bottles of beer on the wall, "+i+" bottles of beer<br>Take one down and pass it around, "+c+" bottles of beer on the wall</p>";
        }
    }
}
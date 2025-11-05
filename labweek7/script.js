function myFunction() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    document.getElementById("myForm").style.display="none";
    document.getElementById("thanks").innerHTML = "Thank you for subscribing, <b>"+name+"</b>!<br><br>We will be in touch via <b>"+email+"</b> shortly!";
    document.getElementById("thanks").style.display="block";
}

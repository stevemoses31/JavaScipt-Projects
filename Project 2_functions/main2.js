<p id="Concatenate"></p>
<p id="Concatenate" onlcick = "myFunction()">click here</p>
function myFunction() { 
    var sentence = "The Tech Academy"; sentence += "is an amazing school!"; 
    document.getElementById("Concatenante").innerHTML = sentence;
}


document.write(myFunction)
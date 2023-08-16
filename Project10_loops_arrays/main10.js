function count_To_Ten() {
    var Digit = "";
    var X = 1; 
    while (X < 11) {
     Digit += "<br>" + X;
     X++   
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var Fruits = ["Kiwi", "Strawberry", "Apple", "Mango", "Banana", "Orange", "Pair"];
var Content = ""; 
var Y; 
function for_loop() {
    for (Y = 0; Y < Fruits.length; Y++) {
        Content += Fruits[Y] + "<br>";
    }
    document.getElementById("List_of_Fruits").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping"; 
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +  
    Cat_Picture[2] + ".";
}

var X = 65; 
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);
function plusFunction() { 
    var answer = 2+2;
    document.getElementById("plus").innerHTML = answer;
}

function minusFunction() { 
    var answer = 5-3;
    document.getElementById("minus").innerHTML = answer;
}

function multiplyFunction() { 
    var answer = 5*2;
    document.getElementById("multiply").innerHTML = answer;
}

function divisionFunction() { 
    var answer = 10%3;
    document.getElementById("division").innerHTML = answer;
}

function plusPlusFunction() { 
    var a = 5;
    a++;
    var answer = a;
    document.getElementById("plusplus").innerHTML = answer;
}

function minusMinusFunction() { 
    var b = 7;
    b--;
    var answer = b;
    document.getElementById("minusminus").innerHTML = answer;
}


window.alert(Math.random());
window.alert(Math.random() * 100);
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "What have you been up too?";
    }
}


function Age_Function() {
    Age = document.getElementById("Age") .value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!"; 
    }
    else {
        Vote = "You are not old enough to vote!"; 
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 9 == Time > 0) {
        Reply = "It is morning.";
    }
    else {
        Reply = "It is aftenoon time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
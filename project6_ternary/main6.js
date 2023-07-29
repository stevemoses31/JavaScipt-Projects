function Ride_Function() {
    var Height, Can_ride; 
    Height = document.getElementById9("Height").vaule; 
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough"; 
    document.getElementById("Ride").innerHTML = Can_ride = " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make; 
    this.Vehicle_Model = Model; 
    this.Vehicle_Year = Year; 
    this.Vehicle_Color = Color; 
}

var Moses = Vehicle("Dodge", "Ram", 2023, "Black");
var Adriana = Vehicle("Honda", "Civic", 2021, "Red"); 
var Diego = Vehicle("Bmw", "M3", 2023, "Blue");
function myfunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Diego drives a " + Diego.Vehicle_Color + "-colored " + Diego.Vehicle_Model +
    " manufactured in " + Diego.Vehicle_Year;
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count() ;
    function Count() {
        var Starting_point = 20;
        function Plus_one() {Starting_point += 2;}
        Plus_one();
        return Starting_point;
    }
}
function my_Dictionary() {
    var Animal = { 
        Species:"Dog", 
        Color:"Brown", 
        Breed:"Pitbul", 
        Age:5, 
        Sound:"Bark!", 
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function my_Dictionary() {
    var Animal = { 
        Species:"Dog", 
        Color:"Brown", 
        Breed:"Pitbul", 
        Age:5, 
        Sound:"Bark!", 
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
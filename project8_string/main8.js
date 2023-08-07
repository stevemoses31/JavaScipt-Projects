function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33); 
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X =169;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
 
function precision_Method() {
    var X = 12938.3072987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function full_Sentence() {
    var part_1 = "My favorite";
    var part_2 = "time of";
    var part_3 = "the year is in";
    var part_4 = "four months.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
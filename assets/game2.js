var names = [
    "batman",
    "robin",
    "flash",
    "krypto",
    "superman",
    "batgirl",
    "joker",
    "penguin",
    "bane",
    "hawkgirl",
]
//choose random name from above
//var randomWordArr = [nameList];
var randomName = names[Math.floor(Math.random() * names.length)];

var s;
var count = 0;
//empty to store guesses
var answerArray = [];


//fill answer array with underscore for letters of name
function startUp() {
    for (var i = 0; i < randomName.length; i++){
        answerArray[i] = "_";
    }
    //put underscores in a string
    var s = answerArray.join(" "); 
    document.getElementById("answer").innerHTML = s;

    //keeps track of guesses?
    var remainingLetters = names.length;
    }


//getting the letters guessed by the user
function letter() {
    var letter = document.getElementById("letter").value;

        if (letter.length > 0) {

            for (var i = 0; i < randomName.length; i++){

                if (randomName[i] === letter) {

                    answerArray[i] = letter;
                }

            }
            // how many guesses
            count++;
            document.getElementById("counter").innerHTML = "number of clicks" + count
            document.getElementById("answer").innerHTML = answerArray.join(" ");
        }
        if(count>12)
        {
            document.getElementById("stat").innerHTML = "sorry, too many guesses";
        }
    }


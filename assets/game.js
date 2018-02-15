// prompt for press any key to start, guess the DC character//

//list of names for game to choose from
var nameList = [
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
//letters to choose from
var letters = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j','k', 'l',    
        'm', 'n', 'o', 'p', 'q', 'r','s','t','u','v','w','x','y','z']

// choose random word
  
// answer array

var answerArray = [];

function startUp();{    

    var name = nameList[mathFloor(math.random())*nameList.length]


    for (var i = 0; i < name.length; i++) {
        answerArray[i] = "_";
        }
    

        // make sure there are still letters to guess
    var remainingLetters = name.length;

    while (remainingLetters > 0) {

        // guess is the key user presses
        
    var guess = event.key;
    }
}

// user input letter

function letter(); {
    var letter = document.getElementById("letter").value;

        if (letter.length > 0); {
            for (var i=0; i < name.length; i++) {
                if (name[i] === letter) {
                    answerArray[i] = letter;
                }
            }
        }
 
        // guess isn't a letter 
    if (guess === null) {
        break;
    } else if (guess.length !==1){
        alert("please enter a single letter at a time");
    } else if (var j =0; j < name.length; j++) {
        if (name[j] === guess) {
           
     //removes anwers already guessed       
            answerArray[j] = guess;
            remainingLetters --;
        }
    }
}

    alert(answerArray.join(""));
    alert("good job! The answer was "+name)
        
    }




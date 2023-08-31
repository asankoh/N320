// Exercise 1
var musicGenre = ["Rock", "Hip-Hop", "R&B", "Pop", "Jazz"]

/*for (let i = 0; i < musicGenre.length; i++) {
    const element = musicGenre[i];
    console.log(element)   
}*/ 

// This loop is more efficient as it is meant to be
// used for arrays
for(type of musicGenre){
    console.log(musicGenre)
}

// Exercise 2
 document.getElementsByTagName("p")[2].innerHTML = "My favorite music genre is " + musicGenre[2]; 

//Exercise 3
function animal(animalOne, color){
    document.getElementById("animals").innerHTML += "I have a " + animalOne + " that is" + color;
}

animal("Goldfish", " Orange <br>");
animal("Yorkie", " Black");

//Exercise 4

function getName(){
    var username = document.getElementById('myName').value
    var color = prompt("Welcome" + username + "! What is your favorite color?")
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
}

document.getElementsByTagName('button')[0].addEventListener('click', getName);

function getNumber(){
    var userNum= document.getElementById('numPick').value;

   /* The code block is a do-while loop that checks if a given number is divisible by 7. */
    do {
        if(userNum >= 7){
            if(userNum%7==0){
            alert(userNum + " is the first number divisible by 7. ");
            break;
            //the break is to prevent the code from going into a infinite loop.
            }
            console.log("not yet...");
            userNum--;
            } else{
            alert("No Matches..."); 
            }
    } while (userNum > 7);
}

document.getElementsByTagName('button')[1].addEventListener('click', getNumber);
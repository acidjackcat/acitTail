var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// Pick a random body part from the randomBodyParts array:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// Pick a random adjective from the randomAdjectives array:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// Pick a random word from the randomWords array:
var randomWord = randomWords[Math.floor(Math.random() * 5)];
// Join all the random strings into a sentence:
var randomInsult = "Your " + randomBodyPart + " is like a " +
randomAdjective + " " + randomWord + "!!!";
console.log(randomInsult);
var scores = {
    joe : 0,
    mike : 0,
    dodo : 0
};
scores.joe = 5;
scores.joe +=13;
scores.mike += 25;
scores['dodo'] = 56;
console.log(scores);

var myCrazyObject = {
    "name": "A ridiculous object",
    "someArray": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};
console.log(myCrazyObject.someArray[2].number);

var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;
var nnn = false;
if (lemonChicken) {
    console.log("Great! I'm having lemon chicken!");
} else if (beefWithBlackBean) {
    console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
    console.log("OK, I'll have the pork.");
} else if (nnn) {
    console.log("Well, I guess I'll have rice then.");
}

var sheepCounted = 1;
while (sheepCounted < 10) {
    console.log("I have counted " + sheepCounted + " sheep!");
    sheepCounted++;
    }
console.log("Zzzzzzzzzzz");


var powerOfThree = 3;
while (powerOfThree < 100000) {
    console.log(powerOfThree);
    powerOfThree = powerOfThree * 3;
}


for (var input = 0; input <= 100; input++ ){
    if (input % 3 === 0){
        console.log ( "Fizz");
    } else if (input % 5 === 0) {
        console.log ( "Buzz");
    }else if (input % 3 === 0 && data % 5 === 0) {
        console.log( "Fizz Buzz");
    } else {
        console.log( input)
    }



}


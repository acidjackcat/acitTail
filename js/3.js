var animals = [ 'Cat', 'Fish', 'Lemur', "Komodo Dragon"];
var length = animals.length;
for (var i = 0; i < length; i++) {

    console.log( animals[i] = "Avesome " + animals[i]);

}
console.log(animals);
console.log(length);

var numbers = [1, 2, 3, 4, 5];
var length = numbers.length;
for (var i = 0; i < length; i++) {
    numbers[i] *= 2;
}

// Random animal from array;
var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * randomWords.length);
console.log(randomWords[randomIndex]);

var sheepCounted = 1;
while (sheepCounted < 10) {
    console.log("I have counted " + sheepCounted + " sheep!");
    sheepCounted++;
    }
console.log("Zzzzzzzzzzz");


//Random string generator;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";
var i = 0;
while ( i < 16) {
    var randomLetter = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomLetter];
    console.log(randomString);
    i++;
}
console.log(alphabet[randomLetter]);




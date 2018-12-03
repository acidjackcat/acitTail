function phoneticLookup(city) {
    let result;
    let alphabeticalCity={
        alpha:"Adams",
        bravo:"Boston",
        charlie:"Chicago",
        delta:"Denver",
        echo:"Easy",
        foxtrot:"Frank"
    };
    result = alphabeticalCity[city];
    return result;
}


console.log(phoneticLookup(echo));

/*
// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(a) {
// Your Code Here
    if(myObj.hasOwnProperty(a)){
        return myObj[a];
    }
    else if(myObj.hasOwnProperty(a) !== true){
        return "Not Found";
    }
    else{
        return "Change Me!";
    }
}

// Test your code by modifying these values
console.log(checkObj("12"));
*/

/*var myScript = 25;*/


/*var myMusic = [
    {
        artist: "Billy Joel",
        title: "Piano Man",
        release_year: 1973,
        formats: [
            "CS",
            "8T",
            "LP" ],
        gold: true
    }
    // Add record here
];

console.log(myMusic.hasOwnProperty("artist"));
console.log(myScript)*/

function phoneticLookup(city) {
    let result;
    let  alphabeticalCity={
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


console.log(phoneticLookup('charlie'));
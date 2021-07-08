// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces, casing matters!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "a oho! a" --> false

// pallidrome = reads the same forwards and back!
// loop through our string
// check each element with it's 'sister' element on the other side of the string
// if elements don't match then return false
// if we make it through our loop and never hit false, then return true

function isPal(arr){
    for (let i = 0; i < arr.length/2; i++) {
        if(arr[i] !== arr[arr.length -1 -i]){
            console.log("is not pal")
        }
    }
console.log("Is pal");
}

isPal("racecar")

// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"

function longestPalindrome(str) {
    var arr = str.split("");
    var endArr = [];
    for (var i = 0; i < arr.length; i++) {
        var temp = "";
        temp = arr[i];
        console.log(temp)
        for (var j = i + 1; j < arr.length; j++) {
            temp += arr[j];
            console.log(temp)
            if (temp.length > 1 && temp === temp.split("").reverse().join("")) {
                endArr.push(temp);
                console.log(endArr)
            }
        }
    }
    var count = 0;
    var longestPalindrome = "";
    for (var j = 0; j < endArr.length; j++) {
        if(endArr[j].length > count){
        longestPalindrome = endArr[j]
        count = endArr[j].length
    }
}
    console.log("________")
    console.log(longestPalindrome);
    return longestPalindrome;
}

longestPalindrome("my favorite racecar erupted")

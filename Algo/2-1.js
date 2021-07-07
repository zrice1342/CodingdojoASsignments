// Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).

// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""
// Example: "thank goodness it's friday" --> "TGIF"

function acronym(str) {
    var result = ""
    str.split(" ")
    // console.log(str.split(" "))
    arr = str.split(" ")
    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i][0])
        result += arr[i][0]
    }
    console.log(result.toUpperCase())

}

acronym("hello world hello world hello world")

function reverseString(str) {
    var result = ""
    str.split(" ")
    arr = str.split(" ")
    for (var i = str.length - 1; i > -1; i--) {
        // console.log(str[i])
        result += str[i]
        // console.log(result)
    }
    console.log(result)
}

reverseString("olleh")

acronym("Thank God its Friday")
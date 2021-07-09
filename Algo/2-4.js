// Write a function that given a sorted array of numbers, returns a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"



function bookIndex(arr){
    var result = ""
    var holdnums = ""
    var temp = []
    console.log(arr)
    for(var i = 0; i < arr.length;i++){
        if(arr[i+1] == arr[i]+1){
            var start = arr[i];
            while(arr[i]+ 1 == arr[i+1]){
                i++
            }
        var end = arr[i]
        temp.push[start + "-" + end]
        }
    }
    console.log(start)
}


bookIndex([1,3,4,5,6,8,10,12])
//Binary Search

// Given a sorted array and a value, return whether
//  the array contains that value. Do not sequentially 
//  iterate the array. Instead 'divide and conquer'. 
//  Taking advantage of the fact that array is sorted. 


function binarySearch(arr, value){
    arr = arr
    searchval = value
    middle = arr.length/2
    var counter = 0
    if(searchval > middle){
        counter = middle
        console.log(counter)
        for(var i = arr.length; i > middle; i--){
            if(searchval == arr[counter]){
                console.log("its in the array")
                break
            }
            counter = counter + 1
            console.log(counter)
        }
    }
    if(searchval < middle){
        counter = middle
        console.log(counter)
        for(var i = 0; i < middle; i++){
            if(searchval == arr[counter]){
                console.log("its in the array")
                break
            }
            counter = counter - 1
            console.log(counter)
        }
    }
    console.log("value not found")
}


binarySearch([1,2,3,4,5,6,7,8,9,10],2)
function isPal(arr){
    var x = arr
    var y = JSON.parse(JSON.stringify(x))
    y.reverse();
    Ispallendrome = true
    for(var i = 0; i < arr.length; i++){
        if(x[i]!=y[i]){
        console.log("is not a pallendrome")
        Ispallendrome = false
        break;
        }
    }
    if(Ispallendrome){
        console.log("Is pallendrome")
    }
    return Ispallendrome;
    }
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);

var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
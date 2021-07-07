function alwaysHungry(arr) {
    Isfood = false
    for(var i = 0; i<arr.length;i++){
        if(arr[i] == "food"){
            console.log("yummy")
            Isfood = true
        }
    }
    if(Isfood == false){
        console.log("im hungry")
    }
}
  alwaysHungry([3.14, "food", "pie", true, "food"]);
  // this should console log "yummy", "yummy"
  alwaysHungry([4, 1, 5, 7, 2]);
  // this should console log "I'm hungry"


  function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0;i < arr.length; i++){
      if(arr[i] > cutoff){
        filteredArr.push(arr[i])
      }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
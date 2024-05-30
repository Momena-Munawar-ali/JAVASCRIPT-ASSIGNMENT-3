var eNter = +prompt("Enter time in 24 hours format" );
if(eNter >= 6  && eNter <= 9  ){
    alert("Breakfast is serverd")
}
else if(eNter >= 11 && eNter <= 13 ){
    alert("Time for lunch")
}
else if(eNter >= 17 && eNter <= 20 ){
    alert("It's Dinner time")
}
else{
    alert("Sorry,you'll have to wait, or go get a snack")
}
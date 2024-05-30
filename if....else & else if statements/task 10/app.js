var pass = "bank";
var reCheck = prompt("Enter your password");
if(reCheck==pass){
    alert("Correct !The password you entered matches the original password ")
}

else if(reCheck == ''){
    alert("Please enter your password")
}
else {
    alert("Incorrcect Password")
}
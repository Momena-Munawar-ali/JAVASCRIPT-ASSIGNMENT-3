var num = +prompt("Enter time");
if(num === "1200"){
    alert("Good Morning")
}
else if(num > "1200" && num < "1700"){
    alert("Good Afternoon")
}
else if(num > "1700" && num < "2100"){
    alert("Good Evening")
}
else if(num > "2100" && num < "2359"){
    alert("Good Night")
}

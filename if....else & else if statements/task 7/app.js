var num1 = +prompt("Enter First number");
var num2 = +prompt("Enter Second number");
var operator = prompt("Enter operator");

if(operator === "+"){
    var ans = num1 + num2 
    alert( num1 + operator + num2 + " = " + ans)
}
else if(operator === "-"){
    var ans = num1 - num2 
    alert( num1 + operator + num2 + " = " + ans)
}
else if(operator === "*"){
    var ans = num1 * num2 
    alert( num1 + operator + num2 + " = " + ans)
}
else if(operator === "/"){
    var ans = num1 / num2 
    alert( num1 + operator + num2 + " = " + ans)
}
else if(operator === "%"){
    var ans = num1 % num2 
    alert( num1 + operator + num2 + " = " + ans)
}
function result(type) {
    var number1 = document. getElementById("number1");
    var number2 = document. getElementById("number2");
    var result;

    switch(type) {
        case "+":
            result = Number(number1.value) + Number(number2.value);
            break;
        case "-":
            result = Number(number1.value) - Number(number2.value);
            break;
        case "*":
            result = Number(number1.value) * Number(number2.value);
            break;
        case "/":
            result = Number(number1.value) / Number(number2.value);
            break;
    }
    document.getElementById("result").innerHTML = result;
}

function append(value) {
    document.getElementById('display').value += value;
}
function clearDisplay(value) {
    document.getElementById('display').value = '';
}
function result(value) {
    var displayValue = document.getElementById('display').value;
    var result = eval(displayValue);
    document.getElementById('display').value = result;
}
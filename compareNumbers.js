var firstNumber;
var secondNumber;

alert('Сравним пару чисел');

while (!firstNumber || isNaN(firstNumber) || !parseInt(firstNumber)) {
    firstNumber = prompt('Введите первое число:', '');
    if (!firstNumber || isNaN(firstNumber) || !parseInt(firstNumber)) {
        alert('Это не число!');
    };
};

while (!secondNumber || isNaN(secondNumber) || !parseInt(secondNumber)) {
    secondNumber = prompt('Введите второе число:', '');
    if (!secondNumber || isNaN(secondNumber) || !parseInt(secondNumber)) {
        alert('Это не число!');
    };
};

if (+firstNumber < +secondNumber) {
    alert(firstNumber + ' меньше, чем ' + secondNumber);
} else if (+firstNumber == +secondNumber) {
    alert(firstNumber + ' равно ' + secondNumber);
} else {
    alert(firstNumber + ' больше, чем ' + secondNumber);
};

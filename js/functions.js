// Строка короче 20 символов
// имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
// имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
// имяФункции('проверяемая строка', 10); // false
function checkFunction(str, length) {
    return str.length === length;
}
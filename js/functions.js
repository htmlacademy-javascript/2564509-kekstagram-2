// Строка короче 20 символов
// имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
// имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
// имяФункции('проверяемая строка', 10); // false
function checkFunction(str, length) {
  return str.length === length;
}

function isPolindrom (str) {
<<<<<<< HEAD
  return str === str.split('').reverse().join('');
=======
  return str.toUpperCase() === str.split('').reverse().join('').toUpperCase();
>>>>>>> ef0d410ca7f7dee334aa847ea99fd5a43d894d46
}

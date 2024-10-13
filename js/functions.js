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
  return str.toUpperCase() === str.split('').reverse().join('').toUpperCase();
}

function timeToMinutes (time) {
  const [hours, minutes] = time.split(':').map(Number);
  return 60 * hours + minutes;

}
function checkPeriodOfTime(beginWorkTime, endWorkTime, beginMeetingTime, duration){
  const beginWorkTimeInMinutes = timeToMinutes(beginWorkTime);
  const endWorkTimeInMinutes = timeToMinutes(endWorkTime);
  const beginMeetingTimeInMinutes = timeToMinutes(beginMeetingTime);
  const endMeetingTimeInMinute = beginMeetingTimeInMinutes + duration;
  // console.log(beginWorkTimeInMinutes, endWorkTimeInMinutes, beginMeetingTimeInMinutes, endMeetingTimeInMinute);
  return (beginMeetingTimeInMinutes >= beginWorkTimeInMinutes) && (endMeetingTimeInMinute <= endWorkTimeInMinutes);
}

// console.log(checkPeriodOfTime('8:00', '17:00', '16:00', 90));


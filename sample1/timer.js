// 2020년 7월 1일 0시 0분 0초
const date1 = new Date(2020, 6, 1, 0, 0, 0);
// 2020년 7월 1일 2시 30분 4초
const date2 = new Date(2020, 6, 1, 2, 30, 4);

const elapsedMSec = date2.getTime() - date1.getTime(); // 9004000
const elapsedSec = elapsedMSec / 1000; // 9004
const elapsedMin = elapsedMSec / 1000 / 60; // 150.0666...
const elapsedHour = elapsedMSec / 1000 / 60 / 60; // 2.501111...




document.writeln(elapsedMSec);
document.writeln(elapsedSec);
document.writeln(elapsedMin);
document.writeln(elapsedHour);



console.log(date2)
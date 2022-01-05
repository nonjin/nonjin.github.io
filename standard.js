const start = new Date(2022, 1, 4, 10, 30, 0); //

year = start.getFullYear();
month = start.getMonth();
date = start.getDate();
hour = start.getHours();
minutes = start.getMinutes();
seconds = start.getSeconds();

// const elapsedMSec = start_;
// const elapsedSec = elapsedMSec / 1000;
// const elapsedMin = elapsedMSec / 1000 / 60;
// const elapsedHour = elapsedMSec / 1000 / 60 / 60;

// const tmpHour = elapsedHour + 1535;


// document.writeln(elapsedHour + 1535);

document.writeln('<h2>기준 시각: </h2>')
document.writeln('<h1>' + year + '.0' + month + '.0' + date + '  ' + hour + ':' + minutes + ':0' + seconds + '</h1>')
document.writeln('<br>')
document.writeln('<h2>경과 시간: </h2>')
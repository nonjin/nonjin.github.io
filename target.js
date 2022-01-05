document.writeln('<br>')
document.writeln('<h2>목표 시간: </h2>')

const target = new Date(2022, 1, 4, 10, 30, 0); // 1월을 나타내기 위해 0 입력
target.setTime(target.getTime() + (1535*60*60*1000));

year = target.getFullYear();
month = target.getMonth();
date = target.getDate();
hour = target.getHours();
minutes = target.getMinutes();
seconds = target.getSeconds();

document.writeln('<h1>' + year + '.0' + month + '.0' + date + '  0' + hour + ':' + minutes + ':0' + seconds + '</h1>');
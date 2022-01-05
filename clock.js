const clock = document.querySelector('.h1-clock');

function getTime(){
    const start = new Date(2022, 1-(1), 4, 10, 30, 0); // 1월을 나타내기 위해 0 입력
    const now = new Date();

    const elapsedMSec = now - start;
    const elapsedSec = elapsedMSec / 1000;
    const elapsedMin = elapsedMSec / 1000 / 60;
    const elapsedHour = elapsedMSec / 1000 / 60 / 60;

    // document.writeln(start);

    // document.writeln(now);

    const hour = Math.floor(elapsedHour);
    const minutes = Math.floor(elapsedMin % 60);
    const seconds = Math.floor(elapsedSec % 60);


    // document.writeln(Hour + ':' + Min + ':' + Sec);
    // document.writeln('<br>');
    // document.writeln('<br>');

    // const hour = time.getHours();
    // const minutes = time.getMinutes();
    // const seconds = time.getSeconds();
    // document.writeln(hour);
    clock.innerHTML = hour +":" + minutes + ":"+seconds;
    clock.innerHTML = `${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
}

function init(){
    setInterval(getTime, 1000);
}

init();
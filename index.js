const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

function setClock() {
    var time = new Date();
    var seconds =  time.getSeconds() / 60;
    var minutes = (seconds + time.getMinutes()) / 60;
    var hours = (minutes + time.getHours()) / 12;

    setRotation(second, seconds);
    setRotation(minute, minutes);
    setRotation(hour, hours);
    
}

function setRotation(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(setClock, 1000);
setClock()

function init() {
    setInterval(function() {
        var time = document.getElementById('time');
        var c = new Date();
        time.innerText = `${c.getHours()}:${c.getMinutes()}:${c.getSeconds()}`;
    }, 1000)
};
    



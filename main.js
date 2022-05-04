const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const turnBlue = document.getElementById ('turnBlue');
const turnRed = document.getElementById ('turnRed');
const lamp = document.getElementById('lamp');


function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn () {

    if (!isLampBroken ()) {
        lamp.src = './ligada.png';
    }
}

function lampOff () {

    if (!isLampBroken ()) {
        lamp.src = './desligada.png';
    }   

}

function lampBlue () {

    if (!isLampBroken ()) {
        lamp.src = './ligada-blue.jpg';
    }
}

function lampRed () {
    
    if (!isLampBroken ()) {
        lamp.src = './ligada-red.png';
    }
}

function lampBroken () {

    if (!isLampBroken ()) {
        lamp.src = './quebrada.jfif';
    }   

}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
turnBlue.addEventListener ('click', lampBlue);
turnRed.addEventListener ('click', lampRed);

lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);
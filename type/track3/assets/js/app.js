
var i=0;
var txt = 'Lorem ipsum typing effect!';
var speed = 30;

function typeWriter () {
    if (i < txt.length) {
        document.getElementById("demo") .innerHTML +=txt.charAt (i);
        i++;
        setTimeout (typeWriter,speed);
    }
}
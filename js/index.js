var rotate = 30;

var pageX = document.body.clientWidth;
var pageY = document.body.clientHeight;
var initialOrientationX, initialOrientationY;
var xCenter = pageX / 2;
var yCenter = pageY / 2;
var mouseX = 0;
var mouseY = 0;
var rotateX = 0;
var rotateY = 0;
var nextRotateX = 0;
var nextRotateY = 0;
var friction = 1/35;

function changePerspective() {
    var deltaRotateX = nextRotateX - rotateX;
    var deltaRotateY = nextRotateY - rotateY;
    rotateX = rotateX + deltaRotateX * friction;
    rotateY = rotateY + deltaRotateY * friction;
    var elem = document.getElementById('name');
    elem.style.transform = `translateX(-50%) translateY(-50%) scale(1) perspective(1960px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

    window.requestAnimationFrame(changePerspective);
}

document.addEventListener('mousemove', function (event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
    nextRotateY = - (xCenter - mouseX) / xCenter * rotate;
    nextRotateX = (yCenter - mouseY) / yCenter * rotate;
});

window.addEventListener('deviceorientation', function (event) {
    if (!initialOrientationX || !initialOrientationY) {
        initialOrientationX = event.beta;
        initialOrientationY = event.gamma;
    }
    nextRotateX = - (event.beta - initialOrientationX);
    nextRotateY = event.gamma - initialOrientationY;
});

changePerspective();

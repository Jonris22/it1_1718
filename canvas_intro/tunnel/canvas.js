var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


function animate() {
    requestAnimationFrame(animate);


    c.fillStyle = 'rgba(0, 0, 0, 0.01)';
    c.fillRect(0, 0, canvas.width, canvas.height);

    for(var i = 0; i < 50; i++) {
        var x = i * 15;
        var y = 50 + i * 7;
        var radius = 10 + i * 10;
        var r = 255;
        var g = 0;
        var b = Math.round(Math.random()*255);
        c.beginPath();
        c.arc(x, y, radius, 0, 2 * Math.PI);
        c.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
        c.stroke();
    }
}
animate();
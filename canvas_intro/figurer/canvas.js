var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Rektangler
c.fillStyle = 'red';
c.fillRect(450, 200, 100, 100);
c.fillStyle = 'yellow';
c.fillRect(250, 500, 100, 100);
c.fillStyle = 'rgba(255, 0, 0, 0.2)';
c.fillRect(50, 100, 450, 450);

// Linjer
c.beginPath();
c.moveTo(50, 300);
c.lineTo(400, 250);
c.lineTo(500, 550);
c.lineTo(50, 300);
c.strokeStyle = 'green';
c.fillStyle = 'rgba(255, 255, 255, 0.5)';
c.fill();
c.stroke();

// Sirkel (arc)
c.beginPath();
c.arc(335, 353, 93, 0, 2*Math.PI);
c.strokeStyle = 'blue';
c.fillStyle = 'rgba(0, 0, 255, 0.4)';
c.fill();
c.stroke();

// Mange sirkler

for(var i = 1; i<=3; i++){
    c.beginPath();
    c.arc(150+i*20, 450+i*20, 93+i*5, 0, 2*Math.PI);
    c.strokeStyle = 'blue';
    c.fillStyle = 'rgba(0, 255, 0, 0.4)';
    c.fill();
    c.stroke();
}

for(var i2 = 1; i2<=15; i2++) {
    c.beginPath();
    c.arc(150+i2*10, 50+i2*10, 10+i2*10, 0, 2 * Math.PI);
    c.strokeStyle = 'blue';
    c.stroke();
}

// Tilfeldig
for(var i3 = 0; i3<5; i3++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    c.beginPath();
    c.arc(x, y, 20, 0, 2 * Math.PI);
    c.strokeStyle = 'rgba('+r+','+g+','+b+', 1)';
    c.stroke();
}
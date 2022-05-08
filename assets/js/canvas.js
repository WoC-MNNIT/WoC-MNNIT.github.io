var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x:undefined,
    y:undefined,
}

var maxRad = 40;
var minRad = 0;

var colArr = [ 
    '#9E1151',
    '#EBD200',
    '#EB026A',
    '#1ACBEB',
    '#05879E',
];

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse);
})

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init(); 
})

class Circle {
    constructor(x, y, dx, dy, rad) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.rad = rad;
        this.minRad = rad;
        this.col = colArr[Math.floor(Math.random()*colArr.length)];
    }

    draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.rad, 0, Math.PI *2, false);
        c.fillStyle = this.col;
        c.fill();
    }

    update = () => {
        if(this.x+this.rad>innerWidth || this.x-this.rad<0){
            this.dx = -this.dx;
        }
    
        if(this.y+this.rad>innerHeight || this.y-this.rad<0){
            this.dy = -this.dy;
        }
    
        this.x+=this.dx;
        this.y+=this.dy;

        // interactivity
        if(Math.abs(mouse.x - this.x) < 30 && Math.abs(mouse.y - this.y) < 30) {
            if(this.rad < maxRad) this.rad += 2;
        }
        else{
            this.rad -= 2;
            if(this.rad < this.minRad) this.rad += 2;
        }

        this.draw();
    }
}
var circleArray = [];

const init = () => {
    circleArray = [];
    for(var i=0; i<((innerHeight/100)*(innerWidth/100)*2); i++){
        var rad = Math.random()*4+1;
        var x = Math.random()*(innerWidth-rad*2)+rad;
        var y = Math.random()*(innerHeight-rad*2)+rad;
        var dx = (Math.random()-0.5)*3;
        var dy = (Math.random()-0.5)*3;
        circleArray.push(new Circle(x, y, dx, dy, rad));
    }
}

// console.log(circleArray);

const animate = ()=> {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for(var i=0; i<circleArray.length; i++){
        circleArray[i].update();
    }
    
}

animate();
init();

// document.body.style.background = "url(" + canvas.toDataURL() + ")";

class Bird {
    x
    y
    height
    width
    speed

    constructor(x, y, height, width, speed) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = speed;
    }

    drawBird() {
        let image = new Image();
        image.src = "img/bird.png";
        image.onload = () => {
            ctx.drawImage(image, this.x, this.y, this.width, this.height);
        }
        ctx.drawImage(image, this.x, this.y, this.width, this.height);
    }

    update() {
        this.y = this.y + this.speed;
        this.drawBird();
    }

}

class Object {

    constructor(x, y, height, speed, color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.speed = speed;
        this.color = color;
    }

    update() {
        this.x = this.x - this.speed;
        this.draw();

    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, size, this.height);
        ctx.closePath();
    }

}

class Background {
    x
    y
    height
    width

    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    drawBackRound(url) {
        let image = new Image();
        image.src = url;
        image.onload = () => {
            ctx.drawImage(image, this.x, this.y, this.width, this.height);
        }
        ctx.drawImage(image, this.x, this.y, this.width, this.height);
    }
    update(){

        this.drawBackRound();
    }


}


const bird = new Bird(10, 250, 30, 30, 1.5)
const background= new Background(0,0,700,600);
background.src="background.png";
let topObject = [];
let bottomObject = [];



function init() {
    let x = 200;
    for (let i = 0; i < 1000; i++) {
        let height = randomIntFromRange(200, 300)
        topObject.push(new Object(x, 0, height, 2, "green"));
        let y = height + randomIntFromRange(100, 200)
        bottomObject.push(new Object(x, y, canvas.height - y, 2, "green"));
        x += 200;
    }
    ;

}

init();

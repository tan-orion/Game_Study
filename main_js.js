const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const size = 30;
let score = 0;
let count = 0;
let countTime = 50000;
let gameOver = false;

function randomIntFromRange(max, min) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}


/////////// eventListeners/////
window.addEventListener('click', fly);


function checkCrash(obj1, obj2) {
    let left1 = obj1.x;
    let right1 = obj1.x + obj1.width;
    let top1 = obj1.y;
    let bottom1 = obj1.y + obj1.height;
    let left2 = obj2.x;
    let right2 = obj2.x + obj2.width;
    let top2 = obj2.y;
    let bottom2 = obj2.y + obj2.height;
    if (right1 < left2 || top1 > bottom2 || left1 > right2 || bottom1 < top2) {
        return false;
    } else {
        return true;
    }
}

function fly() {

    bird.y -= 40;
    this.speed = 0;
}

function animate() {
    if (gameOver) {
        window.location.reload();
        return;
    }
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bird.update();


    for (let i = 0; i < topObject.length; i++) {
        topObject[i].update();
        bottomObject[i].update();
        if (checkCrash(bird, topObject[i]) || checkCrash(bird, bottomObject[i])) {
alert("Game Over");
            gameOver = true;
        } else if (topObject[i].x + size < 0) {
            bottomObject.splice(0, 1);
            topObject.splice(0, 1);
        } else {
            count++;
            if (count > countTime) {
                score++;
                count = 0;
            }

        }
    }
    document.getElementById('score').innerHTML = "Score:" + score;

}

animate();

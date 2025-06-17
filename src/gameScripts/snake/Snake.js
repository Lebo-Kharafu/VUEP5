export class Snake {

    xPos;
    yPos;
    blockSize;
    sketch;
    ate;
    score;
    body = [];
    snakeSkin;
    snakeHead;
    dead = false;

    constructor(sketch, blockSize, skin, head) {
        this.xPos = sketch.width / 2;
        this.yPos = sketch.height / 2;
        this.sketch = sketch;
        this.blockSize = blockSize;
        this.body.push({ "x": this.xPos, "y": this.yPos });
        this.ate = false;
        this.score = 0;
        this.snakeSkin = skin;
        this.snakeHead = head;
    }

    death() {
        let headlessBody = this.body.slice(0, this.body.length - 1);
        let head = this.body[this.body.length - 1];
        headlessBody.forEach(part => {
            let distance = this.sketch.dist(head.x, head.y, part.x, part.y);
            if (distance < this.blockSize) {
                this.score = 0;
                this.body = [{ x: this.sketch.width / 2, y: this.sketch.height / 2 }];
                this.dead = true;
            }
        });
    }

    eat(apple) {
        let head = this.body[this.body.length - 1];
        let distance = this.sketch.dist(head.x + this.blockSize / 2, head.y + this.blockSize / 2, apple.x, apple.y);
        if (distance <= this.blockSize) {
            this.ate = true;
        }
    }

    show() {
        if(this.dead){
            this.gameOver(this.sketch);
            return;
        }
        for (let indx = 0; indx < this.body.length; indx++) {
            const point = this.body[indx];
            this.sketch.noStroke();
            if (indx !== this.body.length - 1) {
                // this.sketch.fill(101, 67, 33);
                this.sketch.image(this.snakeSkin, point.x, point.y);
                this.sketch.noFill();

            } else {
                //this.sketch.fill(81, 47, 13);
                this.sketch.image(this.snakeHead, point.x, point.y);
                this.sketch.noFill();
            }
            this.sketch.rect(point.x, point.y, this.blockSize, this.blockSize);
        }
    }

    move(direction) {
        let newPoint = this.body[this.body.length - 1];
        if (direction == 1 && (newPoint.y - this.blockSize) >= 0) {
            let nextPoint = { "x": newPoint.x, "y": newPoint.y - this.blockSize };
            this.body.push(nextPoint);
            if (!this.ate) {
                this.body.shift();
            } else {
                this.score++;
            }
        }
        else if (direction == 2 && (newPoint.x + this.blockSize) < this.sketch.width) {
            let nextPoint = { "x": newPoint.x + this.blockSize, "y": newPoint.y };
            this.body.push(nextPoint);
            if (!this.ate) {
                this.body.shift();
            } else {
                this.score++;
            }
        }
        else if (direction == 3 && (newPoint.y + this.blockSize) < this.sketch.height) {
            let nextPoint = { "x": newPoint.x, "y": newPoint.y + this.blockSize };
            this.body.push(nextPoint);
            if (!this.ate) {
                this.body.shift();
            } else {
                this.score++;
            }
        }
        else if (direction == 4 && (newPoint.x - this.blockSize) >= 0) {
            let nextPoint = { "x": newPoint.x - this.blockSize, "y": newPoint.y };
            this.body.push(nextPoint);
            if (!this.ate) {
                this.body.shift();
            } else {
                this.score++;
            }
        }
        this.ate = false;
    }

    update(direction, food) {
        this.move(direction);
        this.eat(food);
        this.death();
        this.show();
    }

    getBody() {
        return this.body;
    }

    getHead() {
        return this.body[this.body.length - 1];
    }

    getScore() {
        return this.score;
    }

    revive() {
        this.dead = false;
    }

    gameOver(sketch) {
        let deadText = "GAME OVER \nPRESS SPACE TO TRY AGAIN";
        sketch.textAlign(sketch.CENTER, sketch.CENTER);
        sketch.textSize(30);
        sketch.fill(0, 0, 0);

        sketch.text(deadText, sketch.width / 2, sketch.height / 2);
        sketch.noLoop();
    }

}
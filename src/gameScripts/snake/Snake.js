export class Snake {

    xPos;
    yPos;
    blockSize;
    sketch;
    ate;
    score;
    body = [];

    constructor(sketch, xPos, yPos, blockSize) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.sketch = sketch;
        this.blockSize = blockSize;
        this.body.push({ "x": xPos, "y": yPos });
        this.ate = false;
        this.score = 0;
    }

    show() {
        for (let indx = 0; indx < this.body.length; indx++) {
            const point = this.body[indx];
            if(indx !== this.body.length-1){this.sketch.fill(101, 67, 33);}else{this.sketch.fill(81, 47, 13);}
            this.sketch.noStroke();
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
            }else{
                this.score++;
            }
        }
        else if (direction == 2 && (newPoint.x + this.blockSize) < this.sketch.width) {
            let nextPoint = { "x": newPoint.x + this.blockSize, "y": newPoint.y };
            this.body.push(nextPoint);
            if (!this.ate) {
                this.body.shift();
            }else{
                this.score++;
            }
        }
        else if (direction == 3 && (newPoint.y + this.blockSize) < this.sketch.height) {
            let nextPoint = { "x": newPoint.x, "y": newPoint.y + this.blockSize };
            this.body.push(nextPoint);
            if (!this.ate) {
                this.body.shift();
            }else{
                this.score++;
            }
        }
        else if (direction == 4 && (newPoint.x - this.blockSize) >= 0) {
            let nextPoint = { "x": newPoint.x - this.blockSize, "y": newPoint.y };
            this.body.push(nextPoint);
            if (!this.ate) {
                this.body.shift();
            }else{
                this.score++;
            }
        }
        this.ate = false;
    }
    
    update(direction) {
        this.move(direction);
        this.show();
    }

    getBody() {
        return this.body;
    }

    getScore() {
        return this.score;
    }

}
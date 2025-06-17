export class Food {

    blockSize;
    sketch;
    blocked = [];
    food;

    constructor(sketch, body, blockSize) {
        this.sketch = sketch;
        this.blockSize = blockSize;
        this.blocked = body;
        this.remakeFood();
    }

    show() {
        this.sketch.fill(255, 0, 0);
        this.sketch.circle(this.food.x, this.food.y, this.blockSize);
    }

    remakeFood() {
        let added = false;
        while (!added) {
            let x = this.sketch.random(this.blockSize / 2, this.sketch.width - this.blockSize / 2);
            let y = this.sketch.random(this.blockSize / 2, this.sketch.height - this.blockSize / 2);
            let currentFood = { "x": x, "y": y };
            //https://www.geeksforgeeks.org/javascript/how-to-check-if-an-array-includes-an-object-in-javascript/
            if (!this.blocked.some(block => block.x === currentFood.x && block.y === currentFood.y)/* && (x % this.blockSize && y % this.blockSize)*/) {
            // if (!this.blocked.includes(currentFood)/* && (x % this.blockSize && y % this.blockSize)*/) {
                this.food = currentFood;
                added = true;
                break;
            }
        }
    }

    eaten() {
        let distance = this.sketch.dist(this.food.x, this.food.y, this.blocked[this.blocked.length - 1].x + this.blockSize / 2, this.blocked[this.blocked.length - 1].y + this.blockSize / 2);
        if (distance <= this.blockSize) {
            this.remakeFood();
        }
    }

    update(snake) {
        this.blocked = snake.getBody();
        this.eaten();
        this.show();
    }

    getFood() {
        return this.food;
    }

}
export class Food {

    blockSize;
    sketch;
    blocked = [];
    food = [];

    constructor(sketch, body, blockSize, featSize) {
        this.sketch = sketch;
        this.blockSize = blockSize;
        this.blocked = body;
        this.spawn(featSize);
        // this.food.push({ "x": 0, "y": 0 });
        // this.food.push({ "x": 0, "y": this.sketch.height });
        // this.food.push({ "x": this.sketch.width, "y":  0});
        // this.food.push({ "x": this.sketch.width, "y": this.sketch.height });
    }

    show() {
        this.food.forEach(point => {
            this.sketch.fill(255, 0, 0);
            this.sketch.circle(point.x, point.y, this.blockSize);
        });
    }

    addFood() {
        let added = false;
        while (!added) {
            let x = this.sketch.random(this.blockSize / 2, this.sketch.width - this.blockSize / 2);
            let y = this.sketch.random(this.blockSize / 2, this.sketch.height - this.blockSize / 2);
            let currentFood = { "x": x, "y": y };
            if (!this.food.includes(currentFood) && !this.blocked.includes(currentFood) && (x % this.blockSize && y % this.blockSize)) {
                this.food.push(currentFood);
                added = true;
            }
        }
    }

    spawn(amount) {
        for (var count = 0; count < amount; count++) {
            this.addFood();
        }
    }

    eaten(snake) {
        for (var indx = 0; indx < this.food.length; indx++) {
            for (var b = 0; b < this.blocked.length; b++) {
                let distance = this.sketch.dist(this.food[indx].x , this.food[indx].y, this.blocked[b].x, this.blocked[b].y);
                if (distance <= this.blockSize) {  
                    this.food.splice(indx, 1);
                    this.addFood();
                    indx--; 
                    snake.ate = true;
                    break;   
                }
            }
        }

    }

    update(snake) {
        this.blocked = snake.getBody();
        this.eaten(snake);
        this.show();
    }

    getFood(){
        return this.food;
    }

}
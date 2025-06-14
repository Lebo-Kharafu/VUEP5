export class Snake {

    xPos;
    yPos;
    blockSize;
    sketch;
    body = [];

//https://www.w3schools.com/typescript/typescript_enums.php first time using js-enums
    // Directions {
    //     UP = { "x": -1, "y": 0 },
    //     RIGHT = { "x": 0, "y": 1 },
    //     DOWN = { "x": 0, "y": 1 },
    //     LEFT = { "x": -1, "y": 1 }
    // };

    constructor(sketch, xPos, yPos, blockSize){
        this.xPos = xPos;
        this.yPos = yPos;
        this.sketch = sketch;
        this.blockSize = blockSize;
        this.body.push({ "x": xPos, "y": yPos });
        this.body.push({ "x": xPos, "y": yPos + blockSize });
        this.body.push({ "x": xPos, "y": yPos  + blockSize + blockSize});
    }

    show(){
        this.body.forEach(point => {
            this.sketch.rect(point.x, point.y, this.blockSize, this.blockSize);
        });
    }

    move(direction){
        let newPoint = this.body[this.body.length - 1];
        if(direction == 1){
            newPoint = { "x": newPoint.x, "y": newPoint.y - this.blockSize };
        }
        else if(direction == 2){
            newPoint = { "x": newPoint.x + this.blockSize, "y": newPoint.y };
        }
        else if(direction == 3){
            newPoint = { "x": newPoint.x , "y": newPoint.y + this.blockSize };
        }
        else if(direction == 4){
            newPoint = { "x": newPoint.x - this.blockSize, "y": newPoint.y };
        }
        this.body.push(newPoint);
        this.body.shift();
    }

    update(){
        this.body.forEach(point => {
            this.sketch.rect(point.x, point.y, this.blockSize, this.blockSize);
        });
    }

    

}
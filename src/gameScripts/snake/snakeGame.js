import { Snake } from "./snake";
var snake;
let count = 0;
export function createGame(sketch, width, height) {


    sketch.setup = () => {
        sketch.createCanvas(width, height);
        sketch.background(200);
        snake = new Snake(sketch,50,50,30);

    };

    sketch.draw = () => {
        sketch.background(200);
        snake.show();
        if(count < 4)
            snake.move(3);
        if(count < 8 && count > 3)
            snake.move(2);
        count++;

        sketch.frameRate(2);
    }; 
};
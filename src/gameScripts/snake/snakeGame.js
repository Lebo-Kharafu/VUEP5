import { Food } from "./Food.js";
import { Snake } from "./Snake.js";
import grassImage from "./recoures/bush-border/3858.jpg";
import skinImage from "./recoures/close-up-pattern-scales.jpg";
import headImage from "./recoures/freepik__adjust__51950.png";

var snake;
var food;
let dir = 2;
let scl = 20;
let currScore;
let score = 0;
let grass;
let snakeSkin;
let snakeHead;
let paused;

export function createGame(sketch, width, height) {

    sketch.setup = async () => {
        grass = await sketch.loadImage(grassImage);
        snakeSkin =  await sketch.loadImage(skinImage);
        snakeHead =  await sketch.loadImage(headImage);
        sketch.createCanvas(width, height);
        snakeSkin.resize(scl, scl);
        snakeHead.resize(scl, scl);

        snake = new Snake(sketch,scl,snakeSkin,snakeHead);
        food = new Food(sketch, snake.getBody(), scl);

        sketch.frameRate(10);
        sketch.textAlign(sketch.CENTER, sketch.TOP);
        sketch.textSize(28);
        paused = false;
    };

    sketch.draw = () => {
        if (paused) {
            sketch.noLoop();
        }
        sketch.image(grass, 0, 0,sketch.width, sketch.height);

        snake.update(dir, food.getFood());
        food.update(snake);

        score = snake.getScore();
        //drawScore(sketch,score);
        sketch.fill(0, 0, 0);
        currScore = `Snake Score: ${score}`;
        sketch.text(currScore, width / 2, 50);

    };

    sketch.keyPressed = (event) => {

        //movesnake
        if (sketch.keyCode === (38) && dir !== 3) {
            dir = 1;
        } else if (sketch.keyCode === (39) && dir !== 4) {
            dir = 2;
        }
        else if (sketch.keyCode === (40) && dir !== 1) {
            dir = 3;

        } else if (sketch.keyCode === (37) && dir !== 2) {
            dir = 4;
        }
        else if (sketch.keyCode === (32)) {
            if (paused) {
                paused = false;
                sketch.loop();

            } else {
                paused = true;
            }
        }

        return false;
    }
};


function gameOver(sketch) {
    let deadText = "GAME OVER \nPRESS SPACE TO TRY AGAIN";
    sketch.textAlign(sketch.CENTER, sketch.CENTER);
    sketch.textSize(28);
    sketch.fill(0, 0, 0);

    sketch.text(deadText, width / 2, height / 2);

}

function drawScore(sketch,score) {
    sketch.textAlign(sketch.CENTER, sketch.TOP);
    sketch.textSize(28);
    sketch.fill(0, 0, 0);

    let text = currScore = `Snake Score: ${score}`;
    sketch.text(text, width / 2, 50);
}

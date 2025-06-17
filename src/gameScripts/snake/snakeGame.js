import { Food } from "./Food.js";
import { Snake } from "./Snake.js";
import grassImage from "./recoures/bush-border/3858.jpg";
import skinImage from "./recoures/close-up-pattern-scales.jpg";
import headImage from "./recoures/freepik__adjust__51950.png";

var snake;
var food;
let dir = 2;
let scl = 20;
let score = 0;
let grass;
let snakeSkin;
let snakeHead;
let initial = true;

export function createGame(sketch, width, height) {

    sketch.setup = async () => {
        grass = await sketch.loadImage(grassImage);
        snakeSkin = await sketch.loadImage(skinImage);
        snakeHead = await sketch.loadImage(headImage);
        sketch.createCanvas(width, height);
        snakeSkin.resize(scl, scl);
        snakeHead.resize(scl, scl);

        snake = new Snake(sketch, scl, snakeSkin, snakeHead);
        food = new Food(sketch, snake.getBody(), scl);

        sketch.frameRate(10);
        sketch.textAlign(sketch.CENTER, sketch.TOP);
        sketch.textSize(28);
        initial = true;
                
    };

    sketch.draw = () => {
        
        sketch.image(grass, 0, 0, sketch.width, sketch.height);

        snake.update(dir, food.getFood());
        food.update(snake);

        score = snake.getScore();
        drawScore(sketch, score);

        if (initial) {
            gameStart(sketch);
            sketch.noLoop();
        }
    };

    sketch.keyPressed = (event) => {

        //https://www.toptal.com/developers/keycode
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
            if (!sketch.isLooping()) {
                sketch.loop();
                snake.revive();
            }

        }

        return false;
    }
}

function drawScore(sketch, score) {
    sketch.textAlign(sketch.CENTER, sketch.TOP);
    sketch.textSize(28);
    sketch.fill(0, 0, 0);

    let textStr = `Snake Score: ${score}`;
    sketch.text(textStr, sketch.width / 2, 50);
}


function gameStart(sketch) {
    let startText = "PRESS SPACE TO TRY";
    sketch.textAlign(sketch.CENTER, sketch.CENTER);
    sketch.textSize(30);
    sketch.fill(0, 0, 0);

    sketch.text(startText, sketch.width / 2, sketch.height / 2);
    initial = false;
}

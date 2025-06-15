import { Food } from "./FoodManager";
import { Snake } from "./snake";
import grassImage from "./recoures/bush-border/3858.jpg";
import skinImage from "./recoures/close-up-pattern-scales.jpg";
import headImage from "./recoures/freepik__adjust__51950.png";

var snake;
var foodManager;
var foodArr;
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
        sketch.background(200);
        snakeSkin.resize(scl, scl);
        snakeHead.resize(scl, scl);
        snake = new Snake(sketch, 0, 0, scl,snakeSkin,snakeHead);
        foodManager = new Food(sketch, snake.getBody(), scl, 3);
        foodArr = foodManager.getFood();
        sketch.frameRate(10);
        sketch.textAlign(sketch.CENTER, sketch.TOP);
        sketch.textSize(28);
        paused = false;
    };

    sketch.draw = () => {
        if (paused) {
            sketch.noLoop();
        }
        sketch.background(200);
        sketch.image(grass, 0, 0,sketch.width, sketch.height);
        foodManager.update(snake);
        snake.update(dir);
        foodArr = foodManager.getFood();
        score = snake.getScore();
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
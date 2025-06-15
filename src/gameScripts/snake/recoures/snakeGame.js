import { Food } from "./FoodManager";
import { Snake } from "./snake";
import grassImage from "./recoures/bush-border/3858.jpg";

var snake;
var foodManager;
var foodArr;
let dir = 2;
let scl = 30;
let currScore;
let score = 0;


export function createGame(sketch, width, height) {

    let grass;

    sketch.preload = () => {
        // grass = sketch.loadImage(grassImage);
        grass = sketch.loadImage("./recoures/bush-border/3858.jpg");
    };

    sketch.setup = () => {
        sketch.createCanvas(width, height);
        sketch.background(200);
        snake = new Snake(sketch, 0, 0, scl);
        foodManager = new Food(sketch,snake.getBody(),scl,3);
        foodArr = foodManager.getFood();
        sketch.frameRate(10);
        sketch.textAlign(sketch.CENTER, sketch.TOP);
        sketch.textSize(28);
                // grass = sketch.loadImage(grassImage);

        
    };

    sketch.draw = () => {
        //sketch.background(200);
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
        if (sketch.keyCode === (38)) {
            dir = 1;
        } else if (sketch.keyCode === (39)) {
            dir = 2;
        }
        else if (sketch.keyCode === (40)) {
            dir = 3;

        } else if (sketch.keyCode === (37)) {
            dir = 4;
        }

        //return false;
    }
};
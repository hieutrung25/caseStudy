class game{
    constructor() {
        this.canvas = null;
        this.context = null;
        this.can();
        this.loop();
    }
    can(){
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 400;
        this.canvas.height = 400;
        document.body.appendChild(this.canvas);
        this.snake = new snake(this);
        this.food = new food(this);
    }
    drawScore(){
    }
    loop(){
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 1);
        this.drawScore();
    }
    update(){
        this.snake.update();
        if (this.snake.eat(this.food.x, this.food.y)){
            this.food.update();
        }
    }
    draw(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.draw();
        this.food.draw();
    }
}

var g = new game();

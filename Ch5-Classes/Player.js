//Player Class
class Player 
{
    //these are methods as they are associated with an object, so no need for the "function" prefix
    constructor(startX, StartY) //constructor method called automatically anytime object of class is created
    {
        this.x = startX; //means "take the value of startX and assign it to the new Player object's x property"
        this.y = StartY;
    }
    move (dx, dy)
    {
        this.x += dx;
        this.y += dy;
    }
}

//Object of Player Class
//This 1. Creates a new, empty object and 2. The class Constructor is called automatically
player1 = new Player(0, 0);
player1.move(3, 4);
console.log(player1);

//new instance of player
player2 = new Player(0, 0);
player2.move(10, 6);
console.log(player2);



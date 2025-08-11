//Player Class
// class Player 
// {
//     //these are methods as they are associated with an object, so no need for the "function" prefix
//     constructor(startX, StartY) //constructor method called automatically anytime object of class is created
//     {
//         this.x = startX; //means "take the value of startX and assign it to the new Player object's x property"
//         this.y = StartY;
//     }
//     move (dx, dy)
//     {
//         this.x += dx;
//         this.y += dy;
//     }
// }

class Actor //an abstract class and Superclass 
{
    constructor(startX, StartY)
    {
        this.x = startX;
        this.y = StartY;
    }

    move (dx, dy)
    {
        this.x += dx;
        this.y += dy;
    }

    distanceTo(otherActor)
    {
        let dx = otherActor.x - this.x;
        let dy = otherActor.y - this.y;
        return Math.hypot(dx, dy);
    }
}

class Player extends Actor //extends establishes that Player is subclass of Actor
{
    //Only have to write constructor as inherits move and DistanceTo methods from Actor class
    constructor(startX, StartY) 
    {
        super(startX, StartY); //super refers to constructor from super class and calls the actor's constructor
        this.hp = 100;
    }
}

class Enemy extends Actor
{
    //Does not have constructor method as it doesn't have extra properties, only unique method is attack
    attack(player)
    {
        if (this.distanceTo(player) < 4)
        {
            player.hp -= 10;
        }
        else
        {
            return false;
        }
    }
}

class Flower extends Actor
{
    constructor(startX, StartY, player)
    {
        super(startX, StartY)
    }
}

//Object of Player Class
//This 1. Creates a new, empty object and 2. The class Constructor is called automatically
// player1 = new Player(0, 0);
// player1.move(3, 4);
// console.log(player1);
// Output: Player { x: 3, y: 4, hp: 100 }

//new instance of player
// player2 = new Player(0, 0);
// player2.move(10, 6);
// console.log(player2);
// Output: Player { x: 10, y: 6, hp: 100 }

let player = new Player(1, 2);
let enemy = new Enemy(3, 4);
console.log(player);
// Output: Player { x: 1, y: 2, hp: 100 }
console.log(enemy);
// Output: Enemy { x: 3, y: 4 }




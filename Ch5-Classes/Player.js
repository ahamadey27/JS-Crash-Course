//Player Class
class Player 
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
}
var bullets = '';
var bulletSpeed = 10;

function Bullet(direc)
{
	var shot = $("<audio/>").appendTo("body");
	shot[0].src = "sound/gun.wav";

	this.left = create.position().left + create.width()/2;
	this.top = create.position().top + create.height()/2;
	
	this.direction = direc;
	
	this.speed = 10;
	
	this.bullet = $("<img id = 'bullets' src='images/bullets_"+this.direction+".png'style='position:absolute; top:" + this.top + "px; left:" + this.left + "px;'>");
	
	background.append(this.bullet);
	
	this.move = function()
	{
		if(this.direction == 'left' && this.bullet.position().left > 0)
		{
			this.bullet.css("left", (this.bullet.position().left - this.speed) + "px");
			shot[0].play();
		}
		else if(this.direction == 'left' && this.bullet.position().left <= 0)
		{
			this.bullet.remove();
		}
		
		if(this.direction == 'up' && this.bullet.position().top > 0)
		{
			this.bullet.css("top", (this.bullet.position().top - this.speed) + "px");
			shot[0].play();
		}
		else if(this.direction == 'up' && this.bullet.position().top <= 0)
		{
			this.bullet.remove();
		}
		
		if(this.direction == 'right' && this.bullet.position().left < (background.width() - this.bullet.width()))
		{
			this.bullet.css("left", (this.bullet.position().left + this.speed) + "px");
			shot[0].play();
		}
		else if(this.direction == 'right' && this.bullet.position().left >= (background.width() - this.bullet.width()))
		{
			this.bullet.remove();
		}
		
		if(this.direction == 'down' && this.bullet.position().top < (background.height() - this.bullet.height()))
		{
			this.bullet.css("top", (this.bullet.position().top + this.speed) + "px");
			shot[0].play();
		}
		else if(this.direction == 'down' && this.bullet.position().top >= (background.width() - this.bullet.width()))
		{
			this.bullet.remove();
		}
	};
}
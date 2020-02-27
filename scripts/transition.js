function ToMap(nme, rdo, hnd){

	this.name = nme;
	this.radio = rdo;
	this.hand = hnd;

	this.health = 3;
	this.point = 100;
	this.money = 1000;

	this.source = function(){
		if(this.radio == 2){
			this.src = 2;
		}
		else{
			this.src = 1;
		}

	};

	this.part = function(){
		if(this.hand == "left"){
			steps(65, 68, 87, 83, this.src);
		}
		else{
			steps(37, 39, 38, 40, this.src);
		}
		console.log(this.name, this.radio, this.hand);

		console.log("this.src" + this.src);

		this.create = $("<div id='create' style='Background-image:url(images/"+this.src+"_a.png"+"); background-size: 50px 100px; width: 50px; height: 100px; top: 1%; left: 3%; position: absolute; background-repeat: no-repeat; /*z-index:1;*/'>");
		$("#map1").append(this.create);

		create = this.create;	
	};

	//return this.create;
}

function Enemy()
{
	player1 = new ToMap();

	this.weapon=function(wpn, str){//unused
		this.weapon = wpn;
		this.strength = str;	
	};

	this.beat=function()
	{
		player1.health--;
		console.log(player1.health);
	};

	this.mark_e=function()
	{
		player1.point -= 10;
		player1.money -= 300;
		console.log(player1.point, player1.money);	
	};

}

function Coins(i)
{
	player1 = new ToMap();

	this.quantity = i;
	console.log(this.quantity);

	this.mark_c=function(){
		player1.point += 100;
		player1.money += 300;	
		console.log(player1.point, player1.money);
	};
}

function Bullets()
{
	player1 = new ToMap();
	
	this.mark_b=function(){
		player1.point += 500;
		player1.money += 500;	
		console.log(player1.point, player1.money);
	};
}

function wall(){
	$("#map").empty();

	var walls = new Walls();
	walls.walls_inside_ver;
}
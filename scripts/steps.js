function steps(a, w, d, s, src){

	var speed = 4;

	$("#map").remove();

	var menu_div1 = $("<div/>").appendTo("body").attr("id", "map1").css({"position": "absolute", 
																	   "width":"1325px", 
																	   "height":"790px",
																	   "background-color":"rgb(208, 239, 239)",
																	   "top":"5%", 
																	   "left":"5%"});
	var player = new ToMap();
	player.source();

	var directions = {};

	background = $("#map1");

	enemy = $("<div class='enemy' style='Background:url(images/enemy.png);top: 77%; left: 5%;'>");
		$("#map1").append(enemy);
		enemy1 = $("<div class='enemy' style='Background:url(images/enemy.png);top: 48%; left: 92%;'>");
		$("#map1").append(enemy1);

	coin = $("<img  src='images/coin.png' class='coin' style='top: 30%; left: 13%;'>");
		$("#map1").append(coin);
		coin1 = $("<img  src='images/coin.png' class='coin' style='top: 49%; left: 38%;'>");
		$("#map1").append(coin1);
		coin2 = $("<img  src='images/coin.png' class='coin' style='top: 86%; left: 56%;'>");
		$("#map1").append(coin2);
		coin3 = $("<img  src='images/coin.png' class='coin' style='top: 52%; left: 70%;'>");
		$("#map1").append(coin3);

	arrow = $("<img  src='images/win.png' class='win' style='top: 85%; left: 89%;'>");
		$("#map1").append(arrow);

	var coins = [coin, coin1, coin2, coin3];
	var enemies = [enemy, enemy1];

	var touch = $("<audio/>").appendTo("body");
	touch[0].src = "sound/touch.wav";

	var eat = $("<audio/>").appendTo("body");
	eat[0].src = "sound/eat.mp3";

	var hit = $("<audio/>").appendTo("body");
	hit[0].src = "sound/hit.wav";

	var bullet = '';
	var lastDirection = "";

	$("html").keyup(stop).keydown(charMovement);

    function charMovement(e){
    	directions[e.which] = true;
    }
    function stop(e){
    	delete directions[e.which];
    }
    function move(e)
    {
		for (var i in directions) 
		{
			
			if(create.position().left > 0 && i == a)
			{
				create.css("left", (create.position().left - speed) + "px");
				lastDirection = "left";
				create.css('background-image', 'url(images/'+src+"_a_"+lastDirection+".png"+')');
			}

			if(create.position().left <($("#map1").width() - create.width()) && i == w)
			{
				create.css("left", (create.position().left + speed) + "px");
				lastDirection = "right";
				create.css('background-image', 'url(images/'+src+"_a_"+lastDirection+".png"+')');
			}
			
			if(create.position().top > 0 && i == d)
			{
				create.css("top", (create.position().top - speed) + "px");
				lastDirection = "up";
				create.css('background-image', 'url(images/'+src+"_a_"+lastDirection+".png"+')');
			}

			if(create.position().top < ($("#map1").height() - create.height()) && i == s)
			{
				create.css("top", (create.position().top + speed) + "px");
				lastDirection = "down";
				create.css('background-image', 'url(images/'+src+"_a_"+lastDirection+".png"+')');
			}

				if(i == 32 && !background.find("#bullets").length)
				{			
					bullet = new Bullet(lastDirection);
				}

		}

		checkCollision_coin();
		checkCollision_enemy();
		checkCollision_arrow();	

		checkCollision_wall_ver1();
		checkCollision_wall_hor1();

		checkCollision_wall_ver2();
		checkCollision_wall_hor2();

		if(bullet && enemies)
		{
			checkColBul();
			bullet.move();
		}
	}

					function col_key_check(current_wall, f, b){
						for (var j in directions){ 
							if(j == 37 || j == 65) {
							   create.css("left", create.position().left+current_wall.width()/f);//5//40
							}
		   					if(j == 38 || j == 87) {
							   create.css("top", create.position().top+current_wall.height()/b);//30//5
							}
		 					if(j == 39 || j == 68) {
							   create.css("left", create.position().left-current_wall.width()/f);//5//40
							}
		  					if(j == 40 || j == 83) {
							   create.css("top", create.position().top-current_wall.height()/b);//30//5
							}
						 }
					}

    function checkCollision_coin(){
		for(var i in coins){
	            STATIC_HOR_CENTER_C = coins[i].position().left + coins[i].width()/2;
	            STATIC_VER_CENTER_C = coins[i].position().top + coins[i].height()/2;

	            WIDTH_DIFFERENCE_C= create.width()/2 + coins[i].width()/2;
	            HEIGHT_DIFFERENCE_C = create.height()/2 + coins[i].height()/2;        

	        DYNAMIC_HOR_CNTER_C = create.position().left + create.width()/2;
	    	DYNAMIC_VER_CENTER_C = create.position().top + create.height()/2;

	    	if( Math.abs(DYNAMIC_HOR_CNTER_C - STATIC_HOR_CENTER_C)<= WIDTH_DIFFERENCE_C && 
	    		Math.abs(DYNAMIC_VER_CENTER_C - STATIC_VER_CENTER_C)<=  HEIGHT_DIFFERENCE_C){
				console.log("You took coin");
				eat[0].play();
				coins[i].remove();

				var coins1 = new Coins(i);
				coins1.quantity;
				coins1.mark_c();

	    	}
	    }
	}

	function checkCollision_enemy(){
		for(var i in enemies){
	            STATIC_HOR_CENTER_E = enemies[i].position().left + enemies[i].width()/2;
	            STATIC_VER_CENTER_E = enemies[i].position().top + enemies[i].height()/2;

	            WIDTH_DIFFERENCE_E= create.width()/2 + enemies[i].width()/2;
	            HEIGHT_DIFFERENCE_E = create.height()/2 + enemies[i].height()/2;        

	        DYNAMIC_HOR_CNTER_E = create.position().left + create.width()/2;
	    	DYNAMIC_VER_CENTER_E = create.position().top + create.height()/2;

	    	if( Math.abs(DYNAMIC_HOR_CNTER_E - STATIC_HOR_CENTER_E)<= WIDTH_DIFFERENCE_E && 
	    		Math.abs(DYNAMIC_VER_CENTER_E - STATIC_VER_CENTER_E)<=  HEIGHT_DIFFERENCE_E){
				console.log("Be careful");
				touch[0].play();

				var enemies1 = new Enemy();
				enemies1.beat();
				enemies1.mark_e();
	    	}
	    }
	}

	function checkCollision_arrow(){
            STATIC_HOR_CENTER_E = arrow.position().left + arrow.width()/2;
            STATIC_VER_CENTER_E = arrow.position().top + arrow.height()/2;

            WIDTH_DIFFERENCE_E= create.width()/2 + arrow.width()/2;
            HEIGHT_DIFFERENCE_E = create.height()/2 + arrow.height()/2;        

        DYNAMIC_HOR_CNTER_E = create.position().left + create.width()/2;
    	DYNAMIC_VER_CENTER_E = create.position().top + create.height()/2;

    	if( Math.abs(DYNAMIC_HOR_CNTER_E - STATIC_HOR_CENTER_E)<= WIDTH_DIFFERENCE_E && 
    		Math.abs(DYNAMIC_VER_CENTER_E - STATIC_VER_CENTER_E)<=  HEIGHT_DIFFERENCE_E){
			console.log("You won!");

			var coins2 = new Coins();
			coins2.mark_c();
    	}
	}

	function checkCollision_wall_ver1(){
		for(var i in wall_ver1){
	            STATIC_HOR_CENTER_C = wall_ver1[i].position().left + wall_ver1[i].width()/2;
	            STATIC_VER_CENTER_C = wall_ver1[i].position().top + wall_ver1[i].height()/2;

	            WIDTH_DIFFERENCE_C= create.width()/2 + wall_ver1[i].width()/2;
	            HEIGHT_DIFFERENCE_C = create.height()/2 + wall_ver1[i].height()/2;        

	        DYNAMIC_HOR_CNTER_C = create.position().left + create.width()/2;
	    	DYNAMIC_VER_CENTER_C = create.position().top + create.height()/2;

	    	if( Math.abs(DYNAMIC_HOR_CNTER_C - STATIC_HOR_CENTER_C)<= WIDTH_DIFFERENCE_C && 
	    		Math.abs(DYNAMIC_VER_CENTER_C - STATIC_VER_CENTER_C)<=  HEIGHT_DIFFERENCE_C){
				console.log("Wall_ver1");

				col_key_check(wall_ver1[i], 5, 35);
	    	}
		}
	}

		walls = new Walls();
		ver2 = walls.walls_inside_ver;
		hor2 = walls.walls_inside;

	function checkCollision_wall_ver2(){

		for(var i in ver2){
	            STATIC_HOR_CENTER_C = ver2[i].position().left + ver2[i].width()/2;
	            STATIC_VER_CENTER_C = ver2[i].position().top + ver2[i].height()/2;

	            WIDTH_DIFFERENCE_C= create.width()/2 + ver2[i].width()/2;
	            HEIGHT_DIFFERENCE_C = create.height()/2 + ver2[i].height()/2;        

	        DYNAMIC_HOR_CNTER_C = create.position().left + create.width()/2;
	    	DYNAMIC_VER_CENTER_C = create.position().top + create.height()/2;

	    	if( Math.abs(DYNAMIC_HOR_CNTER_C - STATIC_HOR_CENTER_C)<= WIDTH_DIFFERENCE_C && 
	    		Math.abs(DYNAMIC_VER_CENTER_C - STATIC_VER_CENTER_C)<=  HEIGHT_DIFFERENCE_C){
				console.log("Wall_ver2");

				col_key_check(ver2[i], 5, 35);
	    	}
		}
	}

	function checkCollision_wall_hor2(){

		for(var i in hor2){
	            STATIC_HOR_CENTER_C = hor2[i].position().left + hor2[i].width()/2;
	            STATIC_VER_CENTER_C = hor2[i].position().top + hor2[i].height()/2;

	            WIDTH_DIFFERENCE_C= create.width()/2 + hor2[i].width()/2;
	            HEIGHT_DIFFERENCE_C = create.height()/2 + hor2[i].height()/2;        

	        DYNAMIC_HOR_CNTER_C = create.position().left + create.width()/2;
	    	DYNAMIC_VER_CENTER_C = create.position().top + create.height()/2;

	    	if( Math.abs(DYNAMIC_HOR_CNTER_C - STATIC_HOR_CENTER_C)<= WIDTH_DIFFERENCE_C && 
	    		Math.abs(DYNAMIC_VER_CENTER_C - STATIC_VER_CENTER_C)<=  HEIGHT_DIFFERENCE_C){
				console.log("Wall_hor2");

				col_key_check(hor2[i], 35, 5);
	    	}
		}
	}

	function checkCollision_wall_hor1(){
		for(var i in wall_hor1){
	            STATIC_HOR_CENTER_C = wall_hor1[i].position().left + wall_hor1[i].width()/2;
	            STATIC_VER_CENTER_C = wall_hor1[i].position().top + wall_hor1[i].height()/2;

	            WIDTH_DIFFERENCE_C= create.width()/2 + wall_hor1[i].width()/2;
	            HEIGHT_DIFFERENCE_C = create.height()/2 + wall_hor1[i].height()/2;        

	        DYNAMIC_HOR_CNTER_C = create.position().left + create.width()/2;
	    	DYNAMIC_VER_CENTER_C = create.position().top + create.height()/2;

	    	if( Math.abs(DYNAMIC_HOR_CNTER_C - STATIC_HOR_CENTER_C)<= WIDTH_DIFFERENCE_C && 
	    		Math.abs(DYNAMIC_VER_CENTER_C - STATIC_VER_CENTER_C)<=  HEIGHT_DIFFERENCE_C){
				console.log("Wall_hor1");

				col_key_check(wall_hor1[i], 40, 5);
	    	}
		}
	}

	function checkColBul()
	{
		for(var i in enemies){
			var bulletXcenter = bullet.bullet.position().left + bullet.bullet.width()/2;
			var bulletYcenter = bullet.bullet.position().top + bullet.bullet.height()/2;

			var objectXcenter = enemies[i].position().left + enemies[i].width()/2;
			var objectYcenter = enemies[i].position().top + enemies[i].height()/2;

			var horizontalCenterDistance = Math.abs(bulletXcenter - objectXcenter);
			var verticalCenterDistance = Math.abs(bulletYcenter - objectYcenter);

			var totalWidth = bullet.bullet.width()/2 + enemies[i].width()/2;
			var totalHeight = bullet.bullet.height()/2 + enemies[i].height()/2;

			if(horizontalCenterDistance <= totalWidth && verticalCenterDistance <= totalHeight){
				hit[0].play();
				bullet.bullet.remove();
				bullet = "";

				enemies[i].remove();
				
				var bullet1 = new Bullets();
				bullet1.mark_b();		
			}
		}
	}

    var interval = setInterval(move, 15);//15
}
function Walls()
{
	this.matrix = [
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
				];
	this.walls_inside = [];

	for(var h = 0; h < this.matrix.length; h++)
	{
		for(var w = 0; w < this.matrix[h].length; w++)
		{
			if(this.matrix[h][w] == 1)
			{
				window.wall_hors = 
					$("<img>")
					.attr({"src":"images/Line.png", "class":"wall_hor"})
					.css({top:(h*20)+60+"px", left:(w*95)+20+"px", "width": "165px", "height": "20px"});
					this.walls_inside.push(wall_hors);
				$("#map1").append(this.walls_inside[this.walls_inside.length-1]);
			}
		}
	}
	var wall_ver_1 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"20px", "height":"140px", "top":"360px", "left":"300px"});
	var wall_ver_2 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"20px", "height":"140px", "top":"480px", "left":"450px"});
	var wall_ver_3 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"20px", "height":"120px", "top":"360px", "left":"600px"});
	var wall_ver_4 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"20px", "height":"80px", "top":"20px", "left":"400px"});
	var wall_ver_5 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"20px", "height":"140px", "top":"200px", "left":"735px"});
	var wall_ver_6 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"20px", "height":"160px", "top":"340px", "left":"875px"});
	var wall_ver_7 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"20px", "height":"140px", "top":"630px", "left":"600px"});
	var wall_ver_8 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"20px", "height":"130px", "top":"640px", "left":"840px"});
	var wall_ver_9 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"20px", "height":"140px", "top":"20px", "left":"875px"});
	var wall_ver_10 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"20px", "height":"140px", "top":"360px", "left":"1020px"});
	var wall_ver_11 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"20px", "height":"140px", "top":"220px", "left":"1020px"});
	var wall_ver_12 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"20px", "height":"140px", "top":"480px", "left":"735px"});
	var wall_ver_13 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"20px", "height":"120px", "top":"500px", "left":"925px"});

	var wall_hor_1 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"150px", "height":"20px", "top":"480px", "left":"470px"});
	var wall_hor_2 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"140px", "height":"20px", "top":"340px", "left":"480px"});
	var wall_hor_3 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"140px", "height":"20px", "top":"340px", "left":"735px"});
	var wall_hor_4 = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"120px", "height":"20px", "top":"620px", "left":"735px"});

	this.matrix_ver = [
					[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				];
	this.walls_inside_ver = [];
	
	for(var h = 0; h < this.matrix_ver.length; h++)
	{
		for(var w = 0; w < this.matrix_ver[h].length; w++)
		{
			if(this.matrix_ver[h][w] == 1)
			{
				window.wall_vers = 
					$("<img>")
					.attr({"src":"images/Line.png", "class":"wall_ver"})
					.css({top:(h*100)+100+"px", left:(w*95)+20+"px", "width": "20px", "height": "140px"});
				this.walls_inside_ver.push(window.wall_vers);

				$("#map1").append(this.walls_inside_ver[this.walls_inside_ver.length-1]);
			}
		}
	}

	var wall_left = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"width":"20px", "height":"780px"});
	var wall_top = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"left":"115px","width":"1210px","height":"20px"});
	var wall_button = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"top":"770px","width":"1165px","height":"20px"});
	var wall_right = $("<img/>").appendTo("#map1").attr("src", "images/Line.png").css({"top":"20px","left":"1305px", "width":"20px","height":"770px"});

	window.wall_ver1 = [wall_ver_1, wall_ver_2, wall_ver_3, wall_ver_4, wall_ver_5, wall_ver_6, wall_ver_7, wall_ver_8, wall_ver_9, wall_ver_10, wall_ver_11, wall_ver_12, wall_ver_13, wall_left, wall_right];
	window.wall_hor1 = [wall_hor_1, wall_hor_2, wall_hor_3, wall_hor_4, wall_top, wall_button];
}
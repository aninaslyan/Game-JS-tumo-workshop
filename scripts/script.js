$(document).ready(function () {
    var menu_div = $("<div/>").appendTo("body").attr("id", "map").css({
        "position": "absolute",
        "width": "1325px",
        "height": "790px",
        "background-color": "rgb(208, 239, 239)",
        "top": "5%",
        "left": "5%"
    });
    var image_title = $("<img/>").appendTo(menu_div).attr({"src": "images/title.png", "id": "title"}).css({
        "width": "95%",
        "height": "25%",
        "margin": "0 2%",
        "position": "absolute",
        "top": "5%"
    });
    var button = $("<button/>").appendTo(menu_div).attr("id", "button").text("PLAY").css({
        "position": "absolute",
        "background-color": "#0077b3",
        "border": "none",
        "color": "white",
        "padding": "15px 32px",
        "text-align": "center",
        "text-decoration": "none",
        "display": "inline-block",
        "font-size": "77px",
        "margin": "4px 2px",
        "cursor": "pointer",
        "border-radius": "15px",
        "font-family": "verdana",
        "top": "70%",
        "left": "43%",
        "box-shadow": "0 9px #999"
    });
    var sound = $("<audio/>").appendTo("body");
    sound[0].src = "sound/Track9.mp3";
    sound[0].play();

    var click_sound = $("<audio/>").appendTo("body");
    click_sound[0].src = "sound/click.wav";

    var imageDivs = [];
    var image_append = ["title.png", "sound.png", "click.png", "instruction.png"];
    for (let i = 0; i < 3; i++) {
        imageDivs.push($("<div/>").attr("id", "i" + i).append($("<img/>").attr("id", "img" + i)).appendTo(menu_div));
    }

    for (let i in $("img")) {
        $("img").eq(i).attr("src", "images/" + image_append[i]);
    }

    $("#img0, #img1, #img2").css({"position": "absolute", "top": "50%", "width": "70px"});
    $("#img0").css("left", "2%");
    $("#img1").css("left", "13%");
    $("#img2").css({"left": "75%"});

    imageDivs[0].click(function () {
        click_sound[0].play();

        if ($(this).children("img").attr("src") === "images/sound.png") {
            $(this).children("img").attr("src", "images/sound_off.png");

            sound[0].pause();
            sound[0].currentTime = 0;

            $(this).mouseover(function () {
                $("<div/>").appendTo("#i0").attr("class", "over_div");
                $("<p/>").attr("class", "over_div_p").appendTo($(".over_div")).text("Sound OFF");
                $(".over_div").show();//Function
            });
            $(this).mouseout(function () {
                $(".over_div").remove();
            });
        } else {
            $(this).children("img").attr("src", "images/sound.png");

            sound[0].play();

            $(this).mouseover(function () {
                $("<div/>").appendTo("#i0").attr("class", "over_div");
                $("<p/>").attr("class", "over_div_p").appendTo($(".over_div")).text("Sound ON");
                $(".over_div").show();
            });
            $(this).mouseout(function () {
                $(".over_div").remove();
            });
        }
    });

    imageDivs[1].click(function () {
        if ($(this).children("img").attr("src") === "images/click.png") {
            $(this).children("img").attr("src", "images/click_off.png");

            click_sound[0].play();
            click_sound[0].src = "";

            $(this).mouseover(function () {
                $("<div/>").appendTo("#i1").attr("class", "over_div1")/*.show('slow')*/;
                $("<p/>").attr("class", "over_div_p").appendTo($(".over_div1")).text("Click sound OFF");
                $(".over_div1").show();
            });
            $(this).mouseout(function () {
                $(".over_div1").remove();
            });
        } else {
            $(this).children("img").attr("src", "images/click.png");

            click_sound[0].play();
            click_sound[0].src = "sound/click.wav";

            $(this).mouseover(function () {
                $("<div/>").appendTo("#i1").attr("class", "over_div1")/*.show('slow')*/;
                $("<p/>").attr("class", "over_div_p").appendTo($(".over_div1")).text("Click Sound ON");
                $(".over_div1").show();
            });
            $(this).mouseout(function () {
                $(".over_div1").remove();
            });
        }
    });

    imageDivs[2].mouseover(function () {

        $("#img2").attr("src", "images/instruction_opened.png");
        $("<div/>").appendTo("#i2").attr("class", "over_div1").css({
            "height": "30%",
            "width": "19%",
            "left": "75%",
            "top": "58%",
            "font-weigth": "bold",
            "background-color": "rgb(111, 164, 189)",
            "border": "1px solid rgb(32, 4, 86)"
        });
        $("<p/>").attr("class", "over_div_ins_p").appendTo($(".over_div1")).text("There are two buttons on the left side of the page. Using them you can control the sound of the game. Press PLAY for starting the game. Then write your name in the input field, choose your character and the keyboard keys. During the game you can collect coins and kill the enemies. Try to solve the maze and reach to the green arrow. Good Luck!");
        $(".over_div1").show();
    });
    imageDivs[2].mouseout(function () {

        $("#img2").attr("src", "images/instruction.png");
        $(".over_div1").remove();
    });

    $("#button").click(function () {
        click_sound[0].play();
        start(click_sound);
    });
});

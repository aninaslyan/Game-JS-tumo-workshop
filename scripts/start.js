function start(click_sound) {
    $("#button").css({
        "background-color": "rgb(5, 50, 72)",
        "box-shadow": "0 5px #666",
        "transform": "translateY(4px)"
    });
    setTimeout(function () {
        $("#map").empty();

        var image_title = $("<img/>").appendTo("#map").attr({"src": "images/title.png", "id": "title"}).css({
            "width": "95%",
            "height": "25%",
            "margin": "0 2%",
            "top": "5%",
            "z-index": "1"
        });
        var form = $("<form/>").appendTo("#map");
        var par = $("<p/>").appendTo(form).css({"position": "absolute", "top": "40%", "left": "5%"});
        var label = $("<label/>").appendTo(par).text("Name").css({"font-size": "35px", "color": "rgb(8, 41, 58)"});
        $("<br/>").appendTo(label);
        var input = $("<input/>").appendTo(par).attr({"class": "txt_name", "type": "text", "name": "text"});

        var form1 = $("<form/>").appendTo("#map").css({
            "position": "absolute",
            "top": "65%",
            "left": "5%"
        }).attr("id", "myForm");
        var input1 = $("<input/>").appendTo(form1).attr({
            "class": "radio_value",
            "type": "radio",
            "name": "character",
            "value": "1",
            "id": "ch1",
            "checked": "checked"
        });
        var label1 = $("<label/>").appendTo(form1).attr({"class": "drinkcard-cc drinkcard img1"});
        var input2 = $("<input/>").appendTo(form1).attr({
            "class": "radio_value",
            "type": "radio",
            "name": "character",
            "value": "2",
            "id": "ch2"
        });
        var label2 = $("<label/>").appendTo(form1).attr({"class": "drinkcard-cc drinkcard img2"});

        var form2 = $("<form/>").appendTo("#map").css({
            "position": "absolute",
            "top": "45%",
            "left": "55%"
        }).attr("id", "myForm1");
        var input1 = $("<input/>").appendTo(form2).attr({
            "class": "radio_value",
            "type": "radio",
            "name": "hand",
            "value": "left"
        });
        var label1 = $("<label/>").appendTo(form2).attr({"class": "drinkcard-cc1 drinkcard imgL"});
        var input2 = $("<input/>").appendTo(form2).attr({
            "class": "radio_value",
            "type": "radio",
            "name": "hand",
            "value": "right",
            "checked": "checked"
        });
        var label2 = $("<label/>").appendTo(form2).attr({"class": "drinkcard-cc1 drinkcard imgR"});

        $("form, form1, form2").click(function () {
            click_sound[0].play();
        });

        var button1 = $("<button/>").appendTo("#map").attr("id", "button_next").text("Next").css({
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
            "top": "75%",
            "left": "66%"
        });

        $("#button_next").click(function () {
            click_sound[0].play();

            var name = $(".txt_name").val();

            var radio = $('input[name=character]:checked', '#myForm').val();

            var hand = $('input[name=hand]:checked', '#myForm1').val();

            //console.log(name, radio, hand);

            var player1 = new ToMap(name, radio, hand);
            player1.source();
            player1.part();
            player1.create;

            wall();
        });

    }, 1000);
}

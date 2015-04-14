jQuery(document).ready(function() {
  $("#new-tamagotchi").submit(function(event) {
    event.preventDefault();
    $("#message").hide();
    var newName = $("#name").val();

    var newTamagotchi = {
      name: newName,
      hunger: 5,
      rest: 5,
      happiness: 5,

      getStatus: function() {
        // any status at 0 or 10 = death
        if (this.hunger < 1) {
          $("#" + this.name + " .print-message").text(this.name + " died of starved!");
          $("#" + this.name + " .message").show();
        } else if (this.rest < 1) {
          $("#" + this.name + " .print-message").text(this.name + " died of exhausted!");
          $("#" + this.name + " .message").show();
        } else if (this.happiness < 1) {
          $("#" + this.name + " .print-message").text(this.name + " died of suicide!");
          $("#" + this.name + " .message").show();
        } else if (this.hunger > 9) {
          $("#" + this.name + " .print-message").text(this.name + " died of exploded!");
          $("#" + this.name + " .message").show();
        } else if (this.happiness > 9) {
          $("#" + this.name + " .print-message").text(this.name + " died of too many happiness!");
          $("#" + this.name + " .message").show();
        } else if (this.rest > 9) {
          $("#" + this.name + " .print-message").text(this.name + " died of too many sleeps!");
          $("#" + this.name + " .message").show();
        } else {
          $("#" + this.name + " .message").hide();
          $("#" + this.name + " .hunger").text(this.hunger);
          $("#" + this.name + " .rest").text(this.rest);
          $("#" + this.name + " .happiness").text(this.happiness);
        }
      },

      doStuff: function(buttonClicked) {
        if (buttonClicked === "food") {
          this.hunger += 2;
          this.rest -= 1;
          this.happiness -= 1;
        } else if (buttonClicked === "rest") {
          this.hunger -= 1;
          this.rest += 2;
          this.happiness -= 1;
        } else if (buttonClicked === "play") {
          this.hunger -= 1;
          this.rest -= 1;
          this.happiness += 2;
        } else if (buttonClicked === "time") {
          this.hunger -= 1;
          this.rest -= 1;
          this.happiness -= 1;
        } else if (buttonClicked === "kick") {
          this.hunger -= 0;
          this.rest -= 0;
          this.happiness -= 4;
        }


        this.getStatus();
      },

      showThis: function() {
        $("#unique").append("<li id='" + this.name + "'></li>");
        $("#" + this.name).html("<div class='row' class='message'><h2 class='print-message text-danger'></h2></div><div class='stats row'><h2 class='tamagotchi-name'></h2><div class='col-md-4'><h3>Hunger: <span class='hunger text-danger'></span></h3></div><div class='col-md-4'><h3>Rest: <span class='rest text-danger'></span></h3></div><div class='col-md-4'>         <h3>Happiness: <span class='happiness text-danger'></span></h3>        </div></div><div class='action-buttons row'><button class='button-food' name='food'>Feed Me!</button><button class='button-rest' name='rest'>Im Tired!</button><button class='button-play' name='play'>Play with me!</button><button class='button-time' name='time'>Leave me Alone!</button><button name='kick'>Dont kick me!</button></div>");
      }
    }
    $("#new").hide();
    newTamagotchi.showThis();

    $("#new-button").show();
    $("#" + newTamagotchi.name + " .tamagotchi-name").text(newTamagotchi.name);
    newTamagotchi.getStatus();

    $("#" + newTamagotchi.name + " .button-food").click(function(event) {
      event.preventDefault();
      var buttonClicked = $(this).attr("name");
      newTamagotchi.doStuff(buttonClicked);
    });

    $("#" + newTamagotchi.name + " .button-rest").click(function(event) {
      event.preventDefault();
      var buttonClicked = $(this).attr("name");
      newTamagotchi.doStuff(buttonClicked);
    });

    $("#" + newTamagotchi.name + " .button-play").click(function(event) {
      event.preventDefault();
      var buttonClicked = $(this).attr("name");
      newTamagotchi.doStuff(buttonClicked);
    });

    $("#" + newTamagotchi.name + " .button-time").click(function(event) {
      event.preventDefault();
      var buttonClicked = $(this).attr("name");
      newTamagotchi.doStuff(buttonClicked);
    });

    $("#new-button-form").submit(function(event) {
      event.preventDefault();
      $("#new").show();
    });

  });

});

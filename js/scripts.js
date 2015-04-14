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
          $("#print-message").text(this.name + " died of starved!");
          $("#message").show();
        } else if (this.rest < 1) {
          $("#print-message").text(this.name + " died of exhausted!");
          $("#message").show();
        } else if (this.happiness < 1) {
          $("#print-message").text(this.name + " died of suicide!");
          $("#message").show();
        } else if (this.hunger > 9) {
          $("#print-message").text(this.name + " died of exploded!");
          $("#message").show();
        } else if (this.happiness > 9) {
          $("#print-message").text(this.name + " died of too many happiness!");
          $("#message").show();
        } else if (this.rest > 9) {
          $("#print-message").text(this.name + " died of too many sleeps!");
          $("#message").show();
        } else {
          $("#message").hide();
          $("#" + this.name + " #hunger").text(this.hunger);
          $("#" + this.name + " #rest").text(this.rest);
          $("#" + this.name + " #happiness").text(this.happiness);
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
        $("#" + this.name).html("<div id='stats' class='row'><h2 id='tamagotchi-name'></h2><div class='col-md-4'><h3>Hunger: <span id='hunger' class='text-danger'></span></h3></div><div class='col-md-4'><h3>Rest: <span id='rest' class='text-danger'></span></h3></div><div class='col-md-4'>         <h3>Happiness: <span id='happiness' class='text-danger'></span></h3>        </div></div><div id='action-buttons' class='row'><form id='buttons'>          <button name='food' type='submit'>Feed Me!</button><button name='rest' type='submit'>Im Tired!</button><button name='play' type='submit'>Play with me!</button><button name='time' type='submit'>Leave me Alone!</button>            <button name='kick' type='submit'>Dont kick me!</button></form></div>");
      }
    }
    $("#new").hide();
    newTamagotchi.showThis();

    $("#new-button").show();
    $("#tamagotchi-name").text(newTamagotchi.name);
    newTamagotchi.getStatus();

    $("#buttons").submit(function(event) {
      event.preventDefault();
      var buttonClicked = $(this.id).context.activeElement;
      newTamagotchi.doStuff(buttonClicked.name);
    });

    $("#new-button-form").submit(function(event) {
      event.preventDefault();
      $("#new").show();
    });

  });

});

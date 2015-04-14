jQuery(document).ready(function() {
  $("#new-tamagotchi").submit(function(event) {
    $("#message").hide();
    var newName = $("#name").val();

    var newTamagotchi = {
      name: newName,
      hunger: 5,
      rest: 5,
      activity: 5,

      getStatus: function() {
        // any status at 0 or 10 = death
        if (this.hunger < 1) {
          $("#print-message").text(this.name + " died of starved!");
          $("#message").show();
        } else if (this.rest < 1) {
          $("#print-message").text(this.name + " died of exhausted!");
          $("#message").show();
        } else if (this.activity < 1) {
          $("#print-message").text(this.name + " died of bored!");
          $("#message").show();
        } else if (this.hunger > 9) {
          $("#print-message").text(this.name + " died of exploded!");
          $("#message").show();
        } else if (this.activity > 9) {
          $("#print-message").text(this.name + " died of too many activity!");
          $("#message").show();
        } else if (this.rest > 9) {
          $("#print-message").text(this.name + " died of too many sleeps!");
          $("#message").show();
        } else {
          $("#message").hide();
          $("#hunger").text(this.hunger);
          $("#rest").text(this.rest);
          $("#activity").text(this.activity);
        }
      }
    }
    $("#new").hide();
    $("#stats").show();
    $("#action-buttons").show();
    $("#tamagotchi-name").text(newTamagotchi.name);
    newTamagotchi.getStatus();

    event.preventDefault();
  });

});

jQuery(document).ready(function() {
  $("#sideA").focus();
  $("#triangle").submit(function(event) {
    $("#warning").hide();
    var newSideA = parseInt($("#sideA").val());
    var newSideB = parseInt($("#sideB").val());
    var newSideC = parseInt($("#sideC").val());
    // var result = getTriangle(sideA, sideB, sideC);
    var newTriangle = {
      sideA: newSideA,
      sideB: newSideB,
      sideC: newSideC,

      printTriangle: function() {
        return "<li>" + this.sideA + ", " + this.sideB + ", "+ this.sideC + "</li>";
      },

      getTriangle: function() {
        // sides cannot be 0 and one side cannot be longer than the other
        // two combined
        if (this.sideA === 0 || this.sideB === 0 || this.sideC === 0 ||
            this.sideA + this.sideB < this.sideC ||
            this.sideB + this.sideC < this.sideA ||
            this.sideA + this.sideC < this.sideB) {
          $("#print-message").text("Not a triangle!");
          $("#message").show();
        } else if (this.sideA === this.sideB && this.sideA === this.sideC) {
          $(".equilateral").append(this.printTriangle());
          $("#print-message").text("Equilateral!");
          $("#message").show();
        } else if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB ===this.sideC) {
          $(".isosceles").append(this.printTriangle());
          $("#print-message").text("Isosceles!");
          $("#message").show();
        } else {
          $(".scalene").append(this.printTriangle());
          $("#print-message").text("Scalene!");
          $("#message").show();
        }
      }
    }
    newTriangle.getTriangle();

    event.preventDefault();
  });
});

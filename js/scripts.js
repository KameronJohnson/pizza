var Pizza = {
    pizzaProps: function ( size, type ) {
      this.size = size,
      this.type = type;
    },

    pizzaSlice: function () {
      if ( this.size > 14 ) {
        return 10;
      } else if ( this.size >= 10 ) {
        return 8;
      } else if ( this.size >= 6 ) {
        return 6;
      }
    },

    pizzaValid: function () {
      if ( this.size < 6 || this.size > 22 ) {
        return false;
      }
      return true;
    }
  };

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {



    var inputtedSize = parseInt($("input#input-size").val());
    var inputtedType = $("input#input-type").val();

    $("#input-size").val("");

    var newPizza = Object.create(Pizza);
    newPizza.pizzaProps(inputtedSize, inputtedType);

    if (newPizza.pizzaValid()) {
      var slices = newPizza.pizzaSlice();
      $("#show-pizza h4").text("Your pizza is " + slices + " slices. Pig out!" )
      $("#show-pizza").show();
    } else {
      $("#invalid h4").text("Enter a valid size.")
      $("#invalid").show()
    }
    event.preventDefault();
  });
});

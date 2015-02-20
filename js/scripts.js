var Pizza = {
    pizzaProps: function ( size, type ) {
      this.size = size,
      this.type = type;
    },

    pizzaSlices: function () {
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

    var inputtedSize = parseInt($("input#size").val());
    var inputtedType = $("input#type").val();

    var newPizza = Object.create(Pizza);
    newPizza.pizzaProps(inputtedSize, inputtedType);

    $("input#size").val("");

    if (newPizza.pizzaValid()) {
      var slicesNumber = newPizza.pizzaSlices();
      $("#show-pizza h4").text("Your " + newPizza.size + " inch pizza is " + slicesNumber + " slices. Pig out!" )
      $("#show-pizza").show();
    } else {
      $("#invalid h4").text("Enter a valid size between 6-22 inches, refresh page and try again.")
      $("#invalid").show()
    }
    event.preventDefault();
  });
});

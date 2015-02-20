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
      if ( this.size < 6 || this.size > 20 ) {
        return false;
      }
    }
  }

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = parseInt($("input#input-size")).val();
    var inputtedType = $("input#type").val();

    var newPizza = Object.create(Pizza);
    newPizza.pizzaProps(inputtedSize, inputtedType);

    if (newPizza.pizzaValid()) {
      var slices = newPizza.pizzaSlice();
      $("#results h4").text("Your pizza is " + slices + " slices. Pig out!"  )
      $("#results").show();
    } else {
      $("#invalid h4").text("Enter a valid size.")
      $("#invalid").show()
    }
  });
});

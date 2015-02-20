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

    // $("#input-size").val("");

    var newPizza = Object.create(Pizza);
    newPizza.pizzaProps(inputtedSize, inputtedType);

    if (newPizza.pizzaValid()) {
      var slices = newPizza.pizzaSlice();
      $("#results h4").text("Your pizza is " + slices + " slices. Pig out!" )
      $("#results").show();
    } else {
      $("#invalid h4").text("Enter a valid size.")
      $("#invalid").show()
    }
    event.preventDefault();
  });
});

// $("#form-pizza").submit(function(event) {
//   var inputtedSize = parseInt($("#input-size").val());
//   var inputtedTopping = $("#input-topping").val();
//   cleanPage();
//   var pizza = Object.create(Pizza);
//   pizza.init(inputtedSize, inputtedTopping);
//   if (pizza.legit()) {
//     var slices = pizza.numSlices();
//     if(slices === 1) {
//       $("#results h5").text("We don't cut tiny " + pizza.topping + " pizzas!");
//     } else {
//       $("#results h5").text("We cut your " + pizza.size + " inch " + pizza.topping + " pizza into " + slices + " slices.");
//     }
//     displayImg(slices, pizza.topping);
//     $("#results").show();
//   } else {
//     $("#error h5").text("How do you expect us to slice a " + pizza.size + " inch pizza?!?");
//     $("#error").show();
//   }
//
//   event.preventDefault();

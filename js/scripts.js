var Pizza = {
    pizzaProp: function ( size, type ) {
      this.size = size,
      this.type = type;
    },

    pizzaSlice: function () {
      if ( this.size > 14 && this.type === "cheese" ) {
        return 10;
      } else if ( this.size > 10 && this.type === "cheese") {
        return 8;
      } else if ( this.size > 6 && this.type === "cheese") {
        return 6;
      }

    }
  }

describe("Pizza", function() {

  describe("pizzaProps", function() {
    it("assigns the size and type of a pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaProps(12, "Cheese");
      expect(testPizza.size).to.equal(12);
    });
  });

  describe("pizzaSlice", function() {
    it("informs user how many slices based on size", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaProps(9, "Cheese");
      expect(testPizza.pizzaSlice()).to.equal(6);
    });
  });

  describe("pizzaValid", function() {
    it("tells user if input is invalid", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaProps(5, "Cheese");
      expect(testPizza.pizzaValid()).to.equal(false);
    });
  });
});

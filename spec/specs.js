describe("Pizza", function() {

  describe("pizzaProps", function() {
    it("assigns the size and type of a pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaProps(12, "cheese");
      expect(testPizza.size).to.equal(12);
    });
  });

  describe("pizzaSlice", function() {
    it("informs user how many slices based on size", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaProps(12, "cheese");
      expect(testPizza.pizzaSlice()).to.equal(8);
    });
  });

  describe("pizzaValid", function() {
    it("tells user if input is invalid", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaProps(5, "cheese");
      expect(testPizza.pizzaValid()).to.equal(false);
    });
  });
});

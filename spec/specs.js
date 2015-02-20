describe("Pizza", function() {

  describe("pizzaProp", function() {
    it("assigns the size and type of a pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaProp(12, "cheese");
      expect(testPizza.size).to.equal(12);
    });
  });

  describe("pizzaSlice", function() {
    it("informs user how many slices based on size", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaProp(12, "cheese");
      expect(testPizza.pizzaSlice()).to.equal(8);
    });
  });
});

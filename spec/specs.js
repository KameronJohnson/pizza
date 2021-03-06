describe("Pizza", function() {

  describe("pizzaProps", function() {
    it("assigns the size and type properties of a pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaProps(12, "Pepperoni");
      expect(testPizza.size).to.equal(12);
    });
  });

  describe("pizzaSlices", function() {
    it("informs user how many slices based on size of pizza", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaProps(9, "Pepperoni");
      expect(testPizza.pizzaSlices()).to.equal(6);
    });
  });

  describe("pizzaValid", function() {
    it("tells user if input is valid", function() {
      var testPizza = Object.create(Pizza);
      testPizza.pizzaProps(5, "Pepperoni");
      expect(testPizza.pizzaValid()).to.equal(false);
    });
  });
});

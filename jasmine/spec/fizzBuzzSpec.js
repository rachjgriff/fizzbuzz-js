describe("Fizzbuzz", function() {

  var fizzBuzz;

  it("prints number 1", function() {
    fizzBuzz = new Fizzbuzz();
    expect(fizzBuzz.play(1)).toEqual(1);
  });
});

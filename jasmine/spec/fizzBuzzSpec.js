describe("Fizzbuzz", function() {

  var fizzBuzz;

  it("prints number 1", function() {
    fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.play(1)).toEqual(1);
  });

  it("prints number 2", function() {
    fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.play(2)).toEqual(2);
  });
});

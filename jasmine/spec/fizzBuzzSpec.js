describe("Fizzbuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("prints number 1", function() {
    expect(fizzBuzz.play(1)).toEqual(1);
  });

  it("prints number 2", function() {
    expect(fizzBuzz.play(2)).toEqual(2);
  });

  it("prints Fizz instead of 3", function() {
    expect(fizzBuzz.play(3)).toEqual('Fizz');
  });

  it("prints Buzz instead of 5", function() {
    expect(fizzBuzz.play(5)).toEqual('Buzz');
  });

  it("prints Fizz instead of 6", function() {
    expect(fizzBuzz.play(6)).toEqual('Fizz');
  });
});

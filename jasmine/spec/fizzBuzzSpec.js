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

  describe("Prints Fizz for mulitples of 3", function() {
    it("prints Fizz instead of 3", function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it("prints Fizz for multiples of 3", function() {
      expect(fizzBuzz.play(9)).toEqual('Fizz');
    });
  });

  describe("Prints Buzz for multiples of 5", function() {
    it("prints Buzz instead of 5", function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it("prints Buzz for multiples of 5", function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
  });

  describe("Prints FizzBuzz for multiples of 15", function() {
    it("prints FizzBuzz instead 15", function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
  });
});

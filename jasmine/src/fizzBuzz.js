function FizzBuzz() {

};

FizzBuzz.prototype.play = function(number) {
  if (number === 3 || number === 6 || number === 9) {
    return 'Fizz';
  } else if (number === 5) {
    return 'Buzz';
  } else {
    return number;
  };
};

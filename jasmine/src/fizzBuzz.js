function FizzBuzz() {

};

FizzBuzz.prototype.play = function(number) {
  if (number === 3) {
    return 'Fizz';
  } else {
    return number;
  };
};

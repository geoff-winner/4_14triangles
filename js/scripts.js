var triangulator = function(input1, input2, input3) {
    var isosceles = 'Isosceles';
    var equilateral = 'Equilateral';
    var scalene = 'Scalene';
    var notatriangle = 'Not a triangle';

    if (input1 === input2 && input1 === input3 && input2 === input3) {
      return equilateral;
    };

    if (input1 !== input2 && input2 !== input3 && input3 !== input1) {
      return scalene;
    };

    if (input1 !== input3 && input3 === input2 && input1 !== input2) {
      return isosceles;
    };

};









$(document).ready(function() {
  $('form#input').submit(function(event) {

  })



    $('#result').show();
    event.preventDefault();
})

var triangulator = function(input1, input2, input3) {
    var isosceles = 'Isosceles';
    var equilateral = 'Equilateral';
    var scalene = 'Scalene';

    if (input1 === input2) {
      return isosceles;
    } else if (input1 === input3) {
      return isosceles;
    } else if (input2 === input3) {
      return isosceles;
    };
};









$(document).ready(function() {
  $('form#input').submit(function(event) {

  })



    $('#result').show();
    event.preventDefault();
})

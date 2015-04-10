debugger;
var triangulator = function(input1, input2, input3) {
    var typeoftriangle = '';
    var notatriangle = 'Not a triangle';
    var input4 = input1 + input2;
    var input5 = input2 + input3;
    var input6 = input1 + input3;

    if (input4 < input3){
      return notatriangle;
    };
    if (input5 < input1){
      return notatriangle;
    };
    if (input6 < input2){
      return notatriangle;
    };

    if (input1 === input2 && input1 === input3 && input2 === input3) {
      var typeoftriangle = 'Equilateral';
    } else if (input1 !== input2 && input2 !== input3 && input3 !== input1) {
      var typeoftriangle = 'Scalene';
    } else if (input1 !== input3 && input3 === input2 && input1 !== input2) {
      var typeoftriangle = 'Isosceles';
    } else {
      var typeoftriangle = 'Not a triangle';
    };
    return typeoftriangle;

};

// $(document).ready(function() {
//   $('form#input').submit(function(event) {
//       var input1 = parseInt($('input#input1').val());
//       var input2 = parseInt($('input#input2').val());
//       var input3 = parseInt($('input#input3').val());
//       var typeoftriangle
//   })
//
//
//
//     $('#result').show();
//     event.preventDefault();
// })

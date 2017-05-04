//Business Logic (Back-End)
var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];


var romanConverter = function(input) {
var romanNumbers = "";
  for (var index = 0; index < romans.length; index += 1) {
    if (input >= numbers[index]) {
      romanNumbers = romanNumbers + romans[index];
      input = input - numbers[index];
      index = index - 1;
    }
  }
  return romanNumbers;
}














// var roman = function(input){
//
//   if (input === 0) {
//     return " ";
//   }
//   else if (input > 0) {
//     // run the function to convert number to roman numeral
//   }
//   else {
//     return "Nice Try!!";
//   }
// };

//User Interface Logic (Front-End)
$(document).ready(function(){
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    var result = romanConverter(userInput);
    $("#result").text(result);
    $("#result").show();
  });
});

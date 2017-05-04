//Business Logic (Back-End)

//


var roman = function(input){

  if (input === 0) {
    return " ";
  }
  else if (input > 0) {
    // run the function to convert number to roman numeral
  }
  else {
    return "Nice Try!!";
  }
};

//User Interface Logic (Front-End)
$(document).ready(function(){
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    var result = roman(userInput);
    $("#result").text(result);
    $("#result").show();
  });
});

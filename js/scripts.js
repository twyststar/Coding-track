$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault()

    var inputOne = parseInt($("#quest1").val());
    var inputTwo = parseInt($("#quest2").val());
    var inputThree = parseInt($("#quest3").val());
    var inputFour = parseInt($("#quest4").val());
    var inputFive = parseInt($("#quest5").val());
    var inputSix = parseInt($("#quest6").val());
    var total = (inputOne + inputTwo + inputThree + inputFour + inputFive + inputSix);
    alert(total); 
  });
});

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault()
    $(".track").hide();

    var inputOne = parseInt($("#quest1").val());
    var inputTwo = parseInt($("#quest2").val());
    var inputThree = parseInt($("#quest3").val());
    var inputFour = parseInt($("#quest4").val());
    var inputFive = parseInt($("#quest5").val());
    var inputSix = parseInt($("#quest6").val());
    var total = (inputOne + inputTwo + inputThree + inputFour + inputFive + inputSix);
    var myName = $("input#name").val();
    $(".nameHere").text(myName);

    var result;
      if (total <= 3){
        $("#css").show();
      } else if (total <= 8){
        $("#ruby").show();
      } else if (total <= 14){
        $("#java").show();
      } else if (total <= 17){
        $("#cSharp").show();
      } else {
        $("#PHP").show();
      }
  });
});

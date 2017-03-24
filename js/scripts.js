(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault()

    var inputOne = parseInt($("#quest1").val());
    alert(inputOne);
  });
});

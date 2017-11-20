$(document).ready(function(){



  $("#add").on("click",function(){
    var x=parseFloat($("#a").val());
    var y=parseFloat($("#b").val());
    $("#result").text(x+y).val("");
    $("#a","#b").val("");
  });

  $("#minus").on("click",function(){
    var x=parseFloat($("#a").val());
    var y=parseFloat($("#b").val());
    $("#result").text(x-y).val("");
    $("#a","#b").val("");



  });

  $("#multi").on("click",function(){
    var x=parseFloat($("#a").val());
    var y=parseFloat($("#b").val());
    $("#result").text(x*y).val("");
    $("#a","#b").val("");

  });

  $("#divide").on("click",function(){
    var x=parseFlaot($("#a").val());
    var y=parseFloat($("#b").val());
    $("#result").text(x/y).val("");
    $("#a","#b").val("");


  });






















});

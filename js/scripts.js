$(document).ready(function() {
  var userscore=0;
  var user=0;
  $(".negative").hide();
  $(".positive").hide();
  $(".balanced").hide();
  $(".output").hide();
  $("#stress").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=indicator]:checked").each(function() {
      var indicator = parseInt($(this).val());
      userscore += indicator;
    });
    $("input:checkbox[name=activities]:checked").each(function() {
      var activities = parseInt($(this).val());
      user += activities;
    });
    var total= userscore + user;
    console.log(total)
    if (total<0) {
      $(".negative").show();
    } else if (total === 0){
      $(".balanced").show();
      $(".output").show();

    } else if (total>0){
      $(".positive").show();

    }



  });
});

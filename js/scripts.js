$(function() {
  $("#vacationForm form").submit(function(event) {

  var mntScore
  var beachScore
  var cityScore
  var southScore

  var name = $("input#user").val();
  $(".user").text(name);

  var foodChoice = $("input#food").val();
  if (foodChoice==="1") {
    mntScore +=1
  if (foodChoice==="2") {
    beachScore +=1
  if (foodChoice==="3") {
    cityScore +=1
  if (foodChoice==="4") {
    southScore +=1
  }

  var lodgingChoice= $("input#lodging").val();
  var activityInput = $("input#activity").val();
  var architectureInput = $("input#architecture").val();
  var likesInput = $("input#likes").val();

  $("#output").show();

  event.preventDefault();
  });
});

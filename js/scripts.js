$(function() {
  $("#vacationForm form").submit(function(event) {
  event.preventDefault();
// username
  var name = $("input#user").val();
  $(".user").text(name);

// collect input from form, and score each option
  var mntScore = 0;
  var beachScore = 0;
  var cityScore = 0;
  var southScore = 0;

  var foodInput = $("#food").val();
  if (foodInput==="1") {
    mntScore +=1
  } else if (foodInput==="2") {
    beachScore +=1
  } else if (foodInput==="3") {
    cityScore +=1
  } else if (foodInput==="4") {
    southScore +=1
  }

  var lodgingChoice = $("input:radio[name=lodging]:checked").val();
  if (lodgingChoice==="lodge") {
    mntScore +=1
  } else if (lodgingChoice==="bungalo") {
    beachScore +=1
  } else if (lodgingChoice==="hotel") {
    cityScore +=1
  } else if (lodgingChoice==="bandb") {
    southScore +=1
  }

  var activityInput = $("#activity").val();
  if (activityInput==="1") {
    mntScore +=1
  } else if (activityInput==="2") {
    beachScore +=1
  } else if (activityInput==="3") {
    cityScore +=1
  } else if (activityInput==="4") {
    southScore +=1
  }

  var archInput = $("input:radio[name=architecture]:checked").val();
  if (archInput==="log") {
    mntScore +=1
  } else if (archInput==="pastel") {
    beachScore +=1
  } else if (archInput==="highRise") {
    cityScore +=1
  } else if (archInput==="iron") {
    southScore +=1
  }

  var likesInput = $("#likes").val();
  if (likesInput==="1") {
    mntScore +=1
  } else if (likesInput==="2") {
    beachScore +=1
  } else if (likesInput==="3") {
    cityScore +=1
  } else if (likesInput==="4") {
    southScore +=1
  }

// (temp) show scores
//  $("#mnt").text(mntScore);
//  $("#beach").text(beachScore);
//  $("#city").text(cityScore);
//  $("#south").text(southScore);

// logic to select top scoring destination and show output content

  var maxScore = Math.max(mntScore, beachScore, cityScore, southScore);

  if (mntScore===maxScore) {
    $(".mntWin").show();
  }

  if (beachScore===maxScore) {
    $(".beachWin").show();
  }

  if (cityScore===maxScore) {
    $(".cityWin").show();
  }

  if (southScore===maxScore) {
    $(".southWin").show();
  }

  $("#output").show();
  });
});

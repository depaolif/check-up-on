function setNoUserFound(twitterHandle) {
  $("#search-field").val("No User Found!")
  $("#search-field").addClass("errorAnimator")
}

function normalizeSearchField() {
  // if the search text field is in wrong user error mode, this will reset text/color
  if ($("#search-field").hasClass("errorAnimator")) {
    $("#search-field").val("")
    $("#search-field").removeClass("errorAnimator")
  }
}

$(() => {
  $("#search-field").click(() => { normalizeSearchField() })
  $('[data-toggle="tooltip"]').tooltip()

//  $("#query").click(googleCall)
//  $("#search-field").keypress((e) => {
//    if (e.which == 13) {
//    googleCall()
//  }

  $("#query").click(function() {
    let twitterHandle = ($("#search-field").val() == "") ? "realDonaldTrump" : $("#search-field").val()
    $.ajax({
      url: `http://localhost:3000/users/${twitterHandle}/get_tweet_text_block`,
      success: (data) => {
        let userPhotos = data.user_photos
        GoogleApi.parseSentiment(data.tweet_text, twitterHandle)
      },
      error: () => { setNoUserFound(twitterHandle) }
    })
  })
})

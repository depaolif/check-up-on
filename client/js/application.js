function passTextToGoogleApi(tweetText) {
  GoogleApi.parseSentiment(tweetText, twitterHandle)
}

function setNoUserFound() {
  $("#search-field").val("User Not Found!")
}

$(() => {
  $('[data-toggle="tooltip"]').tooltip()
  $("#query").click(function() {
    let twitterHandle = $("#search-field").val() || "realDonaldTrump"
    $.ajax({
      url: `http://localhost:3000/users/${twitterHandle}/get_tweet_text_block`,
      success: (data) => { passTextToGoogleApi(data.tweet_text, twitterHandle) },
      error: () => { setNoUserFound() }
    })
  })
})

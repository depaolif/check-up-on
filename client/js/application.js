function passTextToGoogleApi(tweetText, twitterHandle) {
  GoogleApi.parseSentiment(tweetText, twitterHandle)
}

function setNoUserFound(twitterHandle) {
  $("#search-field").val("")
  alert(`No user named ${twitterHandle} found!`)
}

$(() => {
  $('[data-toggle="tooltip"]').tooltip()
  $("#query").click(function() {
    let twitterHandle = $("#search-field").val() || "realDonaldTrump"
    $.ajax({
      url: `http://localhost:3000/users/${twitterHandle}/get_tweet_text_block`,
      success: (data) => { GoogleApi.parseSentiment(data.tweet_text, twitterHandle) },
      error: () => { setNoUserFound(twitterHandle) }
    })
  })
})

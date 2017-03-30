$("#query").on("click", function() {
  let twitter_handle = $("#search_field").val()
  $.ajax(`http://localhost:3000/users/${twitter_handle}/get_tweet_text_block`).then((a) => {
    var tweet = a.tweet_text
    GoogleApi.parseSentiment(tweet)
  })
})

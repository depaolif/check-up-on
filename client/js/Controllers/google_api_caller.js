function googleCall() {
  let twitterHandle = $("#search-field").val()
  $.ajax({
    url: `http://localhost:3000/users/${twitterHandle}/get_tweet_text_block`,
    success: (data) => {
      let userPhoto = data.user_photo
      $("#twitter-photo").attr("src", userPhoto)
      GoogleApi.parseSentiment(data.tweet_text, twitterHandle)
    },
    error: () => { setNoUserFound(twitterHandle) }
  })
}

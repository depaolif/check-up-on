function googleCall() {
  let twitterHandle = $("#search-field").val()
  $.ajax({
    url: `http://localhost:3000/users/${twitterHandle}/get_tweet_text_block`,
    success: (data) => {
      let userPhotos = data.user_photos
      GoogleApi.parseSentiment(data.tweet_text, twitterHandle)
    },
    error: () => { setNoUserFound(twitterHandle) }
  })
}

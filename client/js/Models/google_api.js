class GoogleApi {

  // sets the request url to the google NL api
  static requestURL() {
    return "https://language.googleapis.com/v1/documents:analyzeSentiment?key=" + google_api_key
  }

  // creates the response body for the request, using text as the content
  static responseBody(text) {
    return {
      "document":{
        "type":"PLAIN_TEXT",
        "content":text
      },
      "encodingType":"UTF8"
    }
  }

  // makes an ajax request to the google api using this.requestURL and this.requestBody
  static parseSentiment(text, twitterHandle) {
    $.ajax({
      url: this.requestURL(),
      contentType: "application/json",
      type: "POST",
      data: JSON.stringify(this.responseBody(text))
    }).then(function(data) {
      let sentiment = data.documentSentiment.score
      let magnitude = data.documentSentiment.magnitude
      let analyzedText = new TextAnalyzer(sentiment, magnitude, text)
      ViewController.renderMood(analyzedText)
    })
  }
}


var text = "Michaelangelo was one of the best painters. No others came close. A lot of them tried to reach his level but failed. In him, there was a singular genius. An unprecedented prodigy, he created some of the most moving pieces of all time."
var text1 = "Everything is amazing! I love everyone at this company. I am thrilled to be an employee here; we really are changing the world for the better!"
var text2 = "I am NOT doing well. I want to crawl in bed and die. I hate this company; I cannot believe I joined it. I can slowly feel my life being drained away with each passing hour, sitting here in this gray cubicle, sending thank you email after thank you email."
var text3 = "Everything is absolutely awful. I hate everything; I'm quitting my job today. It was a complete mistake to join in the first place, and I woefully regret it."

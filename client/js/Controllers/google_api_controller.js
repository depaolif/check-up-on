class GoogleApiController {
  static renderSentiment(sentiment,magnitude) {
    $("#sentiment").text(AnalyzedText.getSentimentPhrase())
    $("#sentiment").attr('style','color: ' + AnalyzedText.getColor())
    $("#sentiment-score").text(sentiment)
    $("#magnitude-score").text(magnitude)
    $("#results").attr('style','visibility: visible')
  }
}

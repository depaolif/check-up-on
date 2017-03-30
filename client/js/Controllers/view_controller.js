var currView = false

class ViewController {

  static displayScore(analyzedText) {
    var snippet, color, sentiment, magnitude
    ({snippet, color, sentiment, magnitude} = analyzedText.getViewMood())
    $("#sentiment").text(snippet)
    $("#sentiment").attr('style','color: ' + color)
    $("#sentiment-score").text(sentiment)
    $("#magnitude-score").text(magnitude)
    $("#results").attr('style','visibility: visible')
  }

  static resetView(analyzedText) {
    $("#moodView").empty("")
  }

  static renderGreat(analyzedText) {
    //daniel

  }

  static renderGood(analyzedText) {
    //daniel
  }

  static renderOk(analyzedText) {
    //frederico

  }

  static renderPoor(analyzedText) {
    //frederico

  }

  static renderBad(analyzedText) {
    //daniel

  }

  static renderMiserable(analyzedText) {
    //frederico
    currView = "miserable"


  }

  static renderMood(analyzedText) {
    this.resetView()
    this[`render${analyzedText.mood}`](analyzedText)
  }

}

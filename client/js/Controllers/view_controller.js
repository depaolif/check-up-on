var currView = false

class ViewController {

  static resetView() {
  }

  static renderGreat() {
    //daniel

  }

  static renderGood() {
    //daniel
  }

  static renderOk() {
    //frederico

  }

  static renderPoor() {
    //frederico

  }

  static renderBad() {
    //daniel

  }

  static renderMiserable() {
    //frederico
    currView = "miserable"

  }

  static renderMood(analyzedText) {
    debugger
    this.resetView()
    ViewController[`render${analyzedText.mood}`]();
  }

  static displayScore(analyzedText) {
    var snippet, color, sentiment, magnitude
    ({snippet, color, sentiment, magnitude} = analyzedText.getViewMood())
    $("#sentiment").text(snippet)
    $("#sentiment").attr('style','color: ' + color)
    $("#sentiment-score").text(sentiment)
    $("#magnitude-score").text(magnitude)
    $("#results").attr('style','visibility: visible')
  }
}

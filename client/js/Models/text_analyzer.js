var currView = false

class TextAnalyzer {
  constructor(sentiment, magnitude, text, twitterHandle) {
    this.sentiment = sentiment
    this.magnitude = magnitude
    this.twitterHandle = twitterHandle
    this.text = text
    // //finish
    // {mood, snippet} = this.getMood()
    // this.mood, this.snippet = this.getMood()
  }

  getViewMood() {
    let mood, color
    let snippet = this.twitterHandle

    switch (true) {
      case (this.sentiment > 0.7):
        mood = 'Great'
        snippet += " is doing great."
        color = 'blue'
      case (this.sentiment > 0.3):
        mood = 'Good'
        snippet = " is doing pretty good."
        color = 'green'
      case (this.sentiment > 0):
        mood = 'Ok'
        snippet = " is doing ok."
        color = 'lawngreen'
      case (this.sentiment > -0.3):
        mood = 'Poor'
        snippet = " isn't doing that great."
        color = 'orange'
      case (this.sentiment > -0.7):
        mood = 'Bad'
        snippet = " is having a hard time."
        color = 'peru'
      case (this.sentiment >= -1):
        mood = 'Miserable'
        snippet = " is miserable."
        color = 'red'
      default:
        snippet = " is unclear how they feel."
    }
    return {mood: mood, snippet: snippet, color: color}
  }

}

var currView = false

class TextAnalyzer {
  constructor(sentiment, magnitude, text) {
    this.sentiment = sentiment
    this.magnitude = magnitude
    this.text = text
    {mood, snippet} = this.getMood()
    this.mood, this.snippet = this.getMood()
  }

  getViewMood() {
    let mood = ''
    let snippet = this.twitterHandle
    switch (true) {
      case (this.sentiment > 0.7):
        mood = 'Great'
        snippet += " is doing great."
      case (this.sentiment > 0.3):
        mood = 'Good'
        snippet = " is doing pretty good."
      case (this.sentiment > 0):
        mood = 'Ok'
        snippet = " is doing ok."
      case (this.sentiment > -0.3):
        mood = 'SubPar'
        snippet = " isn't doing that great."
      case (this.sentiment > -0.7):
        mood = 'Bad'
        snippet = " is having a hard time."
      case (this.sentiment >= -1):
        mood = 'Miserable'
        snippet = " is miserable."
      default:
        snippet = " is unclear how they feel."
    }
    return [mood, snippet]
  }

}

// static getSentimentPhrase() {
//   switch (this.getColor()) {
//     case "blue":
//     case "green":
//     case "lawngreen":
//     case "orange":
//     case "peru":
//     case "red":
//     default:
//       return "unreadable"
//   }
// }

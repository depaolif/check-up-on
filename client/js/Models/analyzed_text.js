class AnalyzedText {

  static resetView() {
    //destroy by id "moodView"
    viewConfig.currView = false
  }

  static addMoodClass(mood) {
    //jquery add mood class to mood view div with id "moodView"
  }

  static renderGreat() {
    //daniel
    createMoodDiv("great")
    viewConfig.currView = "great"

  }

  static renderGood() {
    //daniel
    createMoodDiv("good")
    viewConfig.currView = "good"

  }

  static renderOk() {
    //frederico
    createMoodDiv("ok")
    viewConfig.currView = "ok"

  }

  static renderHangingInThere() {
    //frederico
    createMoodDiv("hangingInThere")
    viewConfig.currView = "hangingInThere"

  }

  static renderBad() {
    //daniel
    createMoodDiv("bad")
    viewConfig.currView = "bad"

  }

  static renderMiserable() {
    //frederico
    createMoodDiv("miserable")
    viewConfig.currView = "miserable"

  }

  static getColor() {
    // if (viewConfig.currView)
    //   resetView()

    switch (true) {
      case (this.sentiment > 0.8):
        return "blue"
      case (this.sentiment > 0.3):
        return "green"
      case (this.sentiment > 0):
        return "lawngreen"
      case (this.sentiment > -0.8):
        return "orange"
      case (this.sentiment > -0.3):
        return "peru"
      case (this.sentiment >= -1):
        return "red"
      default:
        return "you shouldn't be here yoo poop"
    }
  }

  static getSentimentPhrase() {
    switch (this.getColor()) {
      case "blue":
        return this.twitter_handle + " is doing great."
      case "green":
        return this.twitter_handle + " is doing pretty good."
      case "lawngreen":
        return this.twitter_handle + " is doing ok."
      case "yellow":
        return this.twitter_handle + " isn't doing that great."
      case "orange":
        return this.twitter_handle + " is having a hard time."
      case "red":
        return this.twitter_handle + " is miserable."
      default:
        return "unreadable"
    }
  }

}

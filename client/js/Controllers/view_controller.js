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
}

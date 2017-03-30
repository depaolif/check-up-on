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

  static renderSubPar() {
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

    ViewController[`render${analyzedText.mood}`]();
  }
}

//   }
//
//
//
// }

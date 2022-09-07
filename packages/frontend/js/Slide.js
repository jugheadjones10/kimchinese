import fisherYatesShuffle from "./fisher-yates.js"
import { ce } from "./utils.js"

export class LastSlide {
  constructor(slideContainer, _i) {
    this._i = _i
    this.sc = slideContainer
    this.slide = slideContainer.querySelector(".slide")
    this.slide.setAttribute("tabindex", 0)
  }
}

export class Slide {
  static animationLength = 200
  static modeChangeBreakpoint = 768

  static defaultTransform = "translate(0, 0)"
  static largeModeCenter = "translate(50%, calc(100% / 18))"
  static smallModeCenter = "translate(0, calc(100% * 11 / 18))"
  static largeModeHidden = "translate(100%, 0)"
  static smallModeHidden = "translate(0, calc(100% * 11 / 9))"

  constructor(controller, wordObj, slideContainer, _i) {
    this.controller = controller
    this._i = _i

    this.sc = slideContainer
    this.slide = slideContainer.querySelector(".slide")
    this.slideWrapper = slideContainer.querySelector(".slide__wrapper")
    this.slide.setAttribute("tabindex", 0)

    this.front = this.slide.querySelector(".slide__front")
    this.back = this.slide.querySelector(".slide__back")
    this.gotIt = this.slide.querySelector(".slide__got-it")
    this.noGotIt = this.slide.querySelector(".slide__no-got-it")

    this.wordObj = wordObj
    this.word = wordObj.word

    // this.type = this.slide.dataset.slideType
    // this.word = this.slide.dataset.word
    // this.key = Number(this.slide.dataset.key)
    // this.efactor = Number(this.slide.dataset.efactor)
    // this.interval = Number(this.slide.dataset.interval)
    // this.repetition = Number(this.slide.dataset.repetition)

    this.correct = false
    this.opened = false

    if (this.wordObj.type == "coverType") {
      var wordContainer = this.front.querySelector(".slide__content--word")
      wordContainer.removeChild(wordContainer.firstChild)

      //This assumes that coverTypes are 4 character words only
      var randomIndexes = fisherYatesShuffle([
        ...Array(this.word.length - 1).keys(),
      ]).slice(0, 2)
      for (var i = 0; i < this.word.length; i++) {
        var span
        if (randomIndexes.includes(i)) {
          span = ce("span", "hidden-char")
        } else {
          span = ce("span")
        }
        span.innerText = this.word[i]
        wordContainer.appendChild(span)
      }
    } else if (this.wordObj.type == "examplesType") {
      const exampleEl = this.front.querySelector(".slide__content--sentences")

      const exampleSentence = exampleEl.innerText
      exampleEl.innerHTML = ""

      const matchIndex = exampleSentence.indexOf(this.word)

      for (var i = 0; i < exampleSentence.length; i++) {
        var span
        if (i >= matchIndex && i < matchIndex + this.word.length) {
          span = ce("span", "hidden-char")
        } else {
          span = ce("span")
        }
        span.innerText = exampleSentence[i]
        exampleEl.appendChild(span)
      }
    }

    this.setClickListeners()
  }

  wordAnimation(element, startTransform, endTransform) {
    element.animate(
      [
        {
          transform: startTransform,
        },

        {
          transform: endTransform,
        },
      ],
      {
        duration: Slide.animationLength,
        fill: "forwards",
      }
    )
  }

  flip() {
    const {
      defaultTransform,
      largeModeCenter,
      smallModeCenter,
      largeModeHidden,
      smallModeHidden,
    } = Slide

    if (this.opened) {
      this.opened = false
      this.slide.classList.remove("slide--open")

      if (window.innerWidth >= Slide.modeChangeBreakpoint) {
        this.wordAnimation(this.front, defaultTransform, largeModeCenter)
        this.wordAnimation(this.back, defaultTransform, largeModeHidden)
      } else {
        this.wordAnimation(this.front, defaultTransform, smallModeCenter)
        this.wordAnimation(this.back, defaultTransform, smallModeHidden)
      }
    } else {
      this.opened = true
      this.slide.classList.add("slide--open")
      if (window.innerWidth >= Slide.modeChangeBreakpoint) {
        this.wordAnimation(this.front, largeModeCenter, defaultTransform)
        this.wordAnimation(this.back, largeModeHidden, defaultTransform)
      } else {
        this.wordAnimation(this.front, smallModeCenter, defaultTransform)
        this.wordAnimation(this.back, smallModeHidden, defaultTransform)
      }
    }
  }

  onClickSlide(e) {
    e.stopPropagation()
    // e.preventDefault();
    this.flip()
  }

  onClickGotIt(e) {
    e.stopPropagation()
    // e.preventDefault();

    this.updateBackendIfFinal()
    this.correct = true
    this.controller.forward()
  }

  onClickNoGotIt(e) {
    e.stopPropagation()
    // e.preventDefault();

    this.updateBackendIfFinal()
    this.correct = false
    this.controller.forward()
  }

  setClickListeners() {
    this.slide.addEventListener("click", this.onClickSlide.bind(this))
    this.gotIt.addEventListener("click", this.onClickGotIt.bind(this))
    this.noGotIt.addEventListener("click", this.onClickNoGotIt.bind(this))
  }

  updateBackendIfFinal() {
    if (this.controller.current === this.controller.words.length - 1) {
      this.load()
      const that = this
      this.controller.batchUpdate().then(() => {
        that.stopLoad()
        const menu = document.querySelector(".menu")
        menu.style.display = "none"
        that.controller.go(that.controller.words.length, true)
      })
    }
  }

  load() {
    const spinner = document.querySelector(".spinner")
    spinner.style.display = "inline-block"
  }

  stopLoad() {
    const spinner = document.querySelector(".spinner")
    spinner.style.display = "none"
  }
}

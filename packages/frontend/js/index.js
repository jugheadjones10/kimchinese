import fisherYatesShuffle from "./fisher-yates.js"
import supermemo from "./supermemo.js"
import { Slide, LastSlide } from "./Slide.js"
import { parseHash } from "./utils.js"
import Sentry from "./sentry.js"

// words, backendEndpoint, iana are global variables

export const controller = {
  current: -1,
  forward,
  reverse,
  go,
  batchUpdate,
  words,
  sessionFinished: false,
}

export const slides = Array.from(
  document.querySelectorAll(".slide-container")
).map((slideContainerElement, _i) => {
  if (_i === words.length) return new LastSlide(slideContainerElement, _i)

  return new Slide(controller, words[_i], slideContainerElement, _i)
})

function forward() {
  console.log("FORWARD WAS CALLED")
  go(controller.current + 1)
}

function reverse() {
  go(controller.current - 1)
}

function go(n, override = false) {
  if (!override) {
    n = Math.max(0, Math.min(words.length - 1, n))
  }
  if (controller.current === n) return

  console.log("N", n)
  var prevI = controller.current
  controller.current = n

  //prevI is -1 on first load, which means we get undefined. Hence the optional chaining.
  slides[prevI]?.sc.classList.replace(
    "slide-container--show",
    "slide-container--hide"
  )

  //Look at the DOM using Chrome's dev tools to see how "hide" and "show" classes are applied to slides as we flip through them.
  var newSlideContainer = slides[n].sc
  if (newSlideContainer.classList.contains("slide-container--hide")) {
    newSlideContainer.classList.replace(
      "slide-container--hide",
      "slide-container--show"
    )
  } else {
    newSlideContainer.classList.add("slide-container--show")
  }

  if (!override && window.location.hash !== n + 1) window.location.hash = n + 1

  let counter = document.querySelector(".counter")
  if (counter)
    counter.textContent = Math.min(n + 1, words.length) + "/" + words.length
}

function batchUpdate() {
  const tempStore = {}

  for (let slide of slides.slice(0, slides.length - 1)) {
    let gradeAddition = slide.correct
      ? slide.wordObj.type === "examplesType"
        ? 1
        : 2
      : 0

    if (tempStore[slide.word]) {
      tempStore[slide.word].grade += gradeAddition
    } else {
      tempStore[slide.word] = {
        ...slide.wordObj,
        efactor: slide.wordObj.efactor,
        interval: slide.wordObj.interval,
        repetition: slide.wordObj.repetition,
        grade: gradeAddition,
      }
    }
  }

  for (let [key, value] of Object.entries(tempStore)) {
    console.log("TEMPSTORE BEFORE SUPERMEMO", JSON.parse(JSON.stringify(value)))
    supermemo(value, value.grade, iana)
    console.log("TEMPSTORE AFTER SUPERMEMO", JSON.parse(JSON.stringify(value)))
  }

  return fetch(backendEndpoint + "/api/update-words", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      words: tempStore,
    }),
  })
    .then((res) => {
      controller.sessionFinished = true
      if (!res.ok)
        return res.json().then((jsonRes) => {
          throw new Error(jsonRes)
        })
    })
    .catch((e) => {
      Sentry.captureException(e)
      alert(
        "Error uploading session data. Please refresh the page and try again: " +
          e.message.message
      )
    })
}

// -1 to parseHash() below because our slides and words are 0-indexed.
addEventListener("hashchange", () => {
  if (!controller.sessionFinished) go(parseHash() - 1)
})

go(parseHash() - 1 || controller.current)

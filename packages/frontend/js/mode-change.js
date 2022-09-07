import { slides, controller } from "./index.js"
import { Slide } from "./Slide.js"

const mediaWatcher = window.matchMedia("(max-width: 768px)")
mediaWatcher.onchange = (e) => {
  const currentSlide = slides[controller.current]

  if (e.matches) {
    console.log("This is a narrow screen — less than 600px wide.")

    if (!currentSlide.opened) {
      const initialWrapperHeight =
        currentSlide.slideWrapper.getBoundingClientRect().height
      const initialWrapperWidth =
        currentSlide.slideWrapper.getBoundingClientRect().width
      currentSlide.front.animate(
        [
          {
            transform: `translate(calc(${initialWrapperWidth}px / 4), calc(${initialWrapperHeight}px / 18))`,
            flexBasis: "100%",
            width: "50%",
          },

          {
            transform: `translate(0, calc(${
              initialWrapperHeight / 2
            }px * 11 / 18))`,
            flexBasis: "50%",
            width: "100%",
            offset: 0.99,
          },
          {
            transform: "translate(0, calc(100% * 11 / 18))",
          },
        ],
        {
          duration: Slide.animationLength,
          fill: "forwards",
        }
      )
    }
  } else {
    /* the viewport is more than 600 pixels wide */
    if (!currentSlide.opened) {
      const initialWrapperHeight =
        currentSlide.slideWrapper.getBoundingClientRect().height
      const initialWrapperWidth =
        currentSlide.slideWrapper.getBoundingClientRect().width
      const animObject = currentSlide.front.animate(
        [
          {
            transform: `translate(0, calc(${
              initialWrapperHeight / 2
            }px * 11 / 18))`,
            flexBasis: "100%",
            height: "50%",
          },
          {
            transform: `translate(calc(${initialWrapperWidth}px / 4), calc(${initialWrapperHeight}px / 18))`,
            flexBasis: "50%",
            height: "100%",
            // A bit of a hack used here. Apparently styles set by a fill: forwards animation are pretty hard to override. So
            // I'm animating until 99%, then putting the final styles I want in the final frame.
            offset: 0.99,
          },
          {
            transform: "translate(50%, calc(100% / 18))",
          },
        ],
        {
          duration: Slide.animationLength,
          fill: "forwards",
        }
      )
    }
    console.log("This is a wide screen — more than 600px wide.")
  }
}

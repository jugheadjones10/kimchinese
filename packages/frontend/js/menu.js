import { controller } from "./index.js"

let menuOpen = false

//Menu setup
if (words.length > 0) {
  let menu = document.querySelector(".menu")
  let overlay = document.querySelector(".overlay")
  let endSession = document.querySelector(".end-session")
  menu.addEventListener("click", function (e) {
    e.stopPropagation()

    overlay.style.display = menuOpen ? "none" : "flex"
    menu.style.color = menuOpen ? "black" : "white"
    menu.style.right = menuOpen ? "10px" : "16px"
    menu.innerHTML = menuOpen ? "&#xFE19;" : "&times;"

    menuOpen = !menuOpen
  })

  function onEndSessionClick() {
    endSession.classList.add("end-session--playing")

    //Remove the click listener
    controller.batchUpdate().then(() => {
      endSession.removeEventListener("click", onEndSessionClick)
      menu.style.display = "none"
      overlay.style.backgroundColor = "white"
      endSession.classList.remove("end-session--playing")
      endSession.textContent = "Session Finished"
      endSession.style.color = "black"
    })
  }

  endSession.addEventListener("click", onEndSessionClick)
}

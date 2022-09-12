// import { DateTime } from "https://cdn.skypack.dev/luxon"
// import * as Sentry from "https://esm.run/@sentry/browser"
// import { BrowserTracing } from "https://esm.run/@sentry/tracing"
import shared from "@kimchinese/shared"
import { DateTime } from "luxon"
import * as Sentry from "@sentry/browser"
import { BrowserTracing } from "@sentry/tracing"

Sentry.init({
  dsn: "https://4f41364704974e929ca693d023130c27@o1042358.ingest.sentry.io/6405535",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
})

const validationStrings = shared.validationStrings

const usernameInput = document.getElementById("username")
const usernameError = document.getElementById("username-error")

const excelOption = document.getElementById("excel-option")
const excelFileInput = document.getElementById("excel-file")
const excelFileError = document.getElementById("excel-file-error")

const starterOption = document.getElementById("starter-option")
const starterPacks = document.querySelectorAll("input[name='starter-pack']")
const starterErrorTrigger = document.getElementById("starter-error-trigger")
const starterError = document.getElementById("starter-error")

const emailOption = document.getElementById("email-option")
const smsOption = document.getElementById("sms-option")
const emailInput = document.getElementById("email-input")
const emailError = document.getElementById("email-error")
const smsInput = document.getElementById("sms-input")
const smsError = document.getElementById("sms-error")

const form = document.getElementsByTagName("form")[0]

usernameInput.addEventListener("input", (e) => {
  checkUsernameAsync(e)
})

usernameInput.addEventListener("blur", (e) => {
  checkUsernameAsync(e)
})

excelFileInput.addEventListener("input", (e) => {
  checkVocabSource()
})

Array.from(starterPacks).forEach((pack) => {
  pack.addEventListener("input", (e) => {
    checkVocabSource()
  })
})

emailInput.addEventListener("input", (e) => {
  checkNotificationMethod()
})

emailInput.addEventListener("blur", (e) => {
  checkNotificationMethod()
})

smsInput.addEventListener("input", (e) => {
  checkNotificationMethod()
})

smsInput.addEventListener("blur", (e) => {
  checkNotificationMethod()
})

form.addEventListener("submit", function (e) {
  e.preventDefault()
  checkVocabSource()
  checkNotificationMethod()
  checkUsernameAsync(e).then(() => {
    console.log("Form validity:", form.checkValidity())
    if (form.checkValidity()) {
      sendData()
    } else {
      window.dispatchEvent(
        new CustomEvent("error", {
          detail: { message: "Please check your form and try again!" },
        })
      )
    }
  })
})

function sendData() {
  const formData = new FormData(form)
  const vocabSource = formData.get("vocab-source")
  const notifMethod = formData.get("contactType")
  if (vocabSource === "excel")
    formData.has("starter-pack") && formData.delete("starter-pack")
  if (vocabSource === "starter")
    formData.has("excel-file") && formData.delete("excel-file")
  if (notifMethod === "EMAIL") formData.has("sms") && formData.delete("sms")
  if (notifMethod === "SMS") formData.has("email") && formData.delete("email")

  formData.append("isoTime", DateTime.utc().toISO())
  formData.append("IANA", DateTime.local().zoneName)

  fetch(formSubmitUrl + "/api/user", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((jsonRes) => {
          throw new Error(jsonRes)
        })
      }
      return res
    })
    .then((res) => res.json())
    .then(({ incompleteWords, createdUser }) => {
      console.log("INCOMPLETE WORDS!", incompleteWords)
      console.log("Created user", createdUser)
      window.dispatchEvent(
        new CustomEvent("submit-success", {
          detail: { incompleteWords, username: createdUser.username },
        })
      )
    })
    .catch((e) => {
      Sentry.captureException(e)
      window.dispatchEvent(
        new CustomEvent("error", {
          detail: {
            message: `Oops! Looks like there was an error. Try refreshing the page or contacting help@kimchinese.com! 
            \nError details: ${JSON.stringify(e.message)}`,
          },
        })
      )
    })
}

function checkVocabSource() {
  if (excelOption.checked && excelFileInput.files.length === 0) {
    excelFileInput.setCustomValidity(validationStrings.missingFile)
    excelFileError.textContent = validationStrings.missingFile
  } else if (
    starterOption.checked &&
    Array.from(starterPacks).filter((x) => x.checked).length === 0
  ) {
    starterErrorTrigger.setCustomValidity(validationStrings.missingStarter)
    starterError.textContent = validationStrings.missingStarter
  } else {
    excelFileInput.setCustomValidity("")
    starterErrorTrigger.setCustomValidity("")
  }
}

function checkNotificationMethod() {
  if (emailOption.checked) {
    if (emailInput.validity.typeMismatch) {
      emailError.textContent = validationStrings.invalidEmail
    } else if (emailInput.value.length === 0) {
      // Not using the "required" HTML attribute because I don't want to show validation errors before the user has had a chance
      // to type anything.
      emailInput.setCustomValidity(validationStrings.missingEmail)
      emailError.textContent = validationStrings.missingEmail
    } else {
      emailInput.setCustomValidity("")
      smsInput.value = ""
      smsInput.setCustomValidity("")
    }
  } else if (smsOption.checked) {
    if (smsInput.validity.patternMismatch) {
      smsError.textContent = validationStrings.invalidPhone
    } else if (smsInput.value.length === 0) {
      smsInput.setCustomValidity(validationStrings.missingPhone)
      smsError.textContent = validationStrings.missingPhone
    } else {
      smsInput.setCustomValidity("")
      emailInput.value = ""
      emailInput.setCustomValidity("")
    }
  }
}

function checkUsernameAsync(e) {
  if (usernameInput.validity.patternMismatch) {
    // I don't need to set custom validity because HTML uses the pattern attribute to automatically validate the input.
    usernameError.textContent = validationStrings.invalidUsername
  } else if (usernameInput.value.length === 0) {
    usernameInput.setCustomValidity(validationStrings.missingUsername)
    usernameError.textContent = validationStrings.missingUsername
  } else {
    // Without the blur clause below, blurring the input when there's a "username exists" error will cause the error to disappear
    // and reappear after a moment because of the fetch request.
    // The blur clause is safe because a blur event does not cause any change in the content of the input. Since there is no
    // chance for the content to "correct" itself, there is no need to make the input valid with setCustomValidity.
    e.type !== "blur" && usernameInput.setCustomValidity("")
  }

  return fetch(formSubmitUrl + "/api/user/" + usernameInput.value)
    .then((res) => res.json())
    .then((res) => {
      console.log("RESPONSE", res)
      if (res) {
        usernameInput.setCustomValidity(validationStrings.duplicateUsername)
        usernameError.textContent = validationStrings.duplicateUsername
      }
    })
}

const toast = {}

// for default notification
toast.notify = function(message = "Default", timeout = 3000) {
  createToast("ping-notify", message, timeout)
}

// for success notification
toast.success = function(message = "Success", timeout = 3000) {
  createToast("ping-success", message, timeout)
}

// for warning notification
toast.warning = function(message = "Warning", timeout = 3000) {
  createToast("ping-warning", message, timeout)
}

// for danger notification
toast.danger = function(message = "Danger", timeout = 3000) {
  createToast("ping-danger", message, timeout)
}

// for info notification
toast.info = function(message = "Info", timeout = 3000) {
  createToast("ping-info", message, timeout)
}


function createToast(className, message, timeout) {
  let container = document.getElementById("ping-container")

  if (!container) {
    container = document.createElement("div")

    container.id = "ping-container"

    document.body.appendChild(container)
  }

  const notification = document.createElement("div")

  notification.className = className

  const text = document.createElement("span")

  text.innerText = message

  const closeBtn = document.createElement("button")

  closeBtn.className = "ping-close-btn"

  closeBtn.innerText = 'X'

  closeBtn.addEventListener("click", () => {
    notification.remove()
  })

  notification.appendChild(text)

  notification.appendChild(closeBtn)

  container.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease forwards"

    setTimeout(() => {
      notification.remove()
    }, 300)

  }, timeout)
}

window.toast = toast
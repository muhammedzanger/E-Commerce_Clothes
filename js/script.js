/** @format */

let bar = document.getElementById("bar")
let navBar = document.getElementById("navbar")
let closeBtn = document.getElementById("close")
if (bar) {
  bar.addEventListener("click", () => {
    navBar.classList.add("active")
  })
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navBar.classList.remove("active")
  })
}

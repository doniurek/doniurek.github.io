function setHeight() {
  let height = window.innerHeight
  let contentClasses = document.getElementsByClassName("content")

  for (let i =0; i < contentClasses.length; i++) {
      contentClasses[i].style.height = height + 'px'
  }
}

window.addEventListener("load", (event) => {
  setHeight()
})

addEventListener('resize', setHeight)
addEventListener('orientationchange', setHeight)
function setHeight() {
  let wheight = window.innerHeight
  let contentClasses = document.getElementsByClassName("content")

  for (let i =0; i < contentClasses.length; i++) {
      contentClasses[i].style.height = wheight + 'px'
  }
}

addEventListener('resize', setHeight)
addEventListener('orientationchange', setHeight)
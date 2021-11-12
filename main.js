const sliderRadios = document.querySelectorAll("input[name=slider__radio]")
const sliderRightButton = document.querySelector("#slider__right-button")
const sliderLeftButton = document.querySelector("#slider__left-button")
const sliderMiniatureSlide = document.querySelectorAll(".slider__miniature-slide")
const modalSliderBackground = document.querySelector("#modal-slider__background")
const modalSliderRadios = document.querySelectorAll("input[name=modal-slider__radio]")

let sliderCount = 0


sliderRightButton.onclick = () => {
  sliderCount += 1

  if (sliderCount == 5) {
    sliderCount = 0
  }
  sliderRadios[sliderCount].checked = true
}

sliderLeftButton.onclick = () => {
  sliderCount -= 1

  if (sliderCount == -1) {
    sliderCount = 4
  }
  sliderRadios[sliderCount].checked = true
}


for(let i=0; i<5; i++) {
  sliderMiniatureSlide[i].onclick = () => {
    sliderCount = i;
  }
}


modalSliderBackground.onclick = () => {
  for (let i=0; i<5; i++) {
    modalSliderRadios[i].checked = false
  }
}

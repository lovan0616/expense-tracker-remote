const wheel = document.getElementById('wheel')
const labelIcons = document.querySelectorAll('.label-icon')
let lastPageYOffset = 0
const wideVP = window.matchMedia('(min-width: 1050px)')

// 滾動畫面，顯現/隱藏控制輪
window.addEventListener('scroll', () => {
  if (pageYOffset > lastPageYOffset) {
    wheel.classList.add('raise')
    lastPageYOffset = pageYOffset
  } else {
    wheel.classList.remove('raise')
    lastPageYOffset = pageYOffset
  }
})

// 根據viewport，調整icon大小
window.addEventListener('resize', () => {
  if (wideVP.matches) {
    labelIcons.forEach((labelIcon) => {
      labelIcon.classList.remove('fa-2x')
      labelIcon.classList.add('fa-3x')
    })
  } else {
    labelIcons.forEach((labelIcon) => {
      labelIcon.classList.remove('fa-3x')
      labelIcon.classList.add('fa-2x')
    })
  }
})




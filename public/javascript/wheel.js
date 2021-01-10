const wheel = document.getElementById('wheel')
let lastPageYOffset = 0

window.addEventListener('scroll', () => {
  if (pageYOffset > lastPageYOffset) {
    wheel.classList.add('raise')
    lastPageYOffset = pageYOffset
  } else {
    wheel.classList.remove('raise')
    lastPageYOffset = pageYOffset
  }
})
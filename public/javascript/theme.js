const greenThemeToggle = document.querySelector('.green-theme-toggle')
const brownThemeToggle = document.querySelector('.brown-theme-toggle')
const pinkThemeToggle = document.querySelector('.pink-theme-toggle')
const selectedTheme = localStorage.getItem('theme')


greenThemeToggle.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme', 'green')
  localStorage.setItem('theme','green')
})
brownThemeToggle.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme', 'brown')
  localStorage.setItem('theme', 'brown')
})
pinkThemeToggle.addEventListener('click', () => {
  document.documentElement.setAttribute('data-theme', 'pink')
  localStorage.setItem('theme', 'pink')
})

// 在載入畫面時為html設定data-theme屬性
function addressSelectedTheme() {
  if(!selectedTheme) return
  console.log(selectedTheme)
  document.documentElement.setAttribute('data-theme', selectedTheme)
}

addressSelectedTheme()
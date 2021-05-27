const button = document.querySelector('button')

button.addEventListener('click', (event) => {
  event.preventDefault()
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme')
  } else {
    localStorage.setItem('theme', 'dark')
  }
  addClass()
})

function addClass() {
  if (localStorage.getItem('theme') === 'dark') {
  document.querySelector('html').classList.add("dark")
  } else {
    document.querySelector('html').classList.remove("dark")
  }
}

addClass()
function menu() {
  const content = document.getElementById('content')
  content.innerHTML = ''
  const homeContent = document.createElement('div')

  const h1 = document.createElement('h1')
  h1.classList.add('heading-primary')
  h1.textContent = 'MenuPage'
  homeContent.appendChild(h1)
  content.appendChild(homeContent)
}

export default menu

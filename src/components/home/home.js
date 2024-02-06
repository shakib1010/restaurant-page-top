import './home.css'
function home() {
  // Clear the homeContent
  const content = document.getElementById('content')
  content.innerHTML = ''

  const homeContent = document.createElement('div')

  // Home header
  const h1 = document.createElement('h1')
  h1.classList.add('heading-primary')
  h1.textContent = 'HomePage'
  homeContent.appendChild(h1)

  // Create and image

  // Create a description of the page

  content.appendChild(homeContent)
}

export default home

import './nav.css'
import home from '../home/home'
import menu from '../menu/menu'
import contact from '../contact/contact'

export default function nav() {
  const header = document.querySelector('header')

  const nav = document.createElement('nav')
  nav.classList.add('nav')

  const homeBtn = document.createElement('button')
  homeBtn.innerText = 'Home'
  nav.appendChild(homeBtn)

  const menuBtn = document.createElement('button')
  menuBtn.innerText = 'Menu'
  nav.appendChild(menuBtn)

  const contactBtn = document.createElement('button')
  contactBtn.innerText = 'Contact'
  nav.appendChild(contactBtn)
  header.appendChild(nav)

  // handle navigation click.
  homeBtn.addEventListener('click', (e) => home())
  menuBtn.addEventListener('click', (e) => menu())
  contactBtn.addEventListener('click', (e) => contact())
}

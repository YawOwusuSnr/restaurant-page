import content from './content.js'
import menu from './menu.js'

const c = document.getElementById('content')
content()

const button = document.createElement('button')
button.innerHTML = 'Menus'
button.addEventListener('click', menu)

document.body.appendChild(button)


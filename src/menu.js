export default function menu() {
    const div= document.createElement('div');
    const heading = document.createElement('h2');
    const description = document.createElement('h4');

    heading.textContent = "Menu"
    description.textContent = "These are the items we have today"

    div.appendChild(heading)
    div.appendChild(description)
    document.body.appendChild(div)
    
    console.log('menu')
}
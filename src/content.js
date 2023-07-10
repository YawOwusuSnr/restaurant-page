export default function content() {
    const dive = document.createElement('div');
    const heading = document.createElement('h2');
    const description = document.createElement('h4');


    heading.textContent = "Mansa Restaurant"
    description.textContent = "Come enjoy "

    dive.appendChild(heading)
    dive.appendChild(description)
    document.getElementById('content').appendChild(dive)
    

    console.log('testing')

}
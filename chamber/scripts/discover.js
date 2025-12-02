//First we have to get the current year from the system andstore in a variable
const currentYear = new Date().getFullYear();
//insert the variable (with the date into the html) into the span id
document.getElementById('currentyear').textContent = currentYear;



//this property in JavaScript gets the date when the doc was last modified;
//and we insert into a constant
const lastModified = document.lastModified;

document.getElementById('lastModified').textContent = lastModified;




//store the selected elements that we are going to use
const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');
//toggle the show clas off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');
});




// Maputo module
import { maputo } from "../data/maputo.mjs";

// Select container
const cartas = document.querySelector('#cartas');

const displaymaputo = (items) => {
    items.forEach(member => {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let address = document.createElement('p');
        let description = document.createElement('p');
        let img = document.createElement('img');
        let openButton = document.createElement('button');

        let box = document.createElement('dialog');
        let boxContent = document.createElement('div');
        let closeButton = document.createElement('button');


        img.src = member.image;
        img.alt = `${member.title} logo`;

        title.textContent = member.name;
        address.textContent = `Address: ${member.address.city}`;
        description.textContent = member.description;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(description);
        openButton.textContent = "Learn More";
        openButton.classList.add("open-button");
        closeButton.textContent = "Close button";
        closeButton.classList.add("close-button");


        box.appendChild(boxContent);
        box.appendChild(closeButton);
        document.body.appendChild(box);

        card.appendChild(box);

        openButton.addEventListener('click', () => {
            box.showModal();
        })
        closeButton.addEventListener('click', () => {
            box.close();
        })

        card.classList.add('member-card');
        cartas.appendChild(card);


    });
};

// Display data
displaymaputo(maputo);
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


import { mozambiqueAccidents } from "../data/database.mjs";



//console.log(mozambiqueAccidents);

const data = document.querySelector('#dataBase');

const displayAccidents = (items) => {

    items.forEach(member => {
        let card = document.createElement('section');
        let aircraft = document.createElement('h2');
        let date = document.createElement('h3');
        let operator = document.createElement('h4')
        let fatalities = document.createElement('p');


        let img = document.createElement('img');

        img.src = member.image;
        img.alt = `${member.aircraft} aircraft`;


        let openButton = document.createElement('button');

        let dialogBox = document.createElement('dialog');
        let boxContent = document.createElement('div');

        let closeButton = document.createElement('button');


        aircraft.textContent = `Aircraft: ${member.aircraft}`;
        date.textContent = `Date: ${member.date}`;
        operator.textContent = `Operator: ${member.operator}`;
        fatalities.textContent = `Fatalities: ${member.fatalities}`;

        card.appendChild(img);
        card.appendChild(aircraft);
        card.appendChild(date);
        card.appendChild(operator);
        card.appendChild(fatalities);

        openButton.textContent = "Learn More";
        openButton.classList.add("open-button");
        closeButton.textContent = "Close button";
        closeButton.classList.add("close-button");
        card.appendChild(openButton);

        boxContent.textContent = `Hint :${member.summary}`;
        dialogBox.appendChild(boxContent);
        dialogBox.appendChild(closeButton);
        card.append(dialogBox);




        openButton.addEventListener('click', () => {
            dialogBox.showModal();
        })
        closeButton.addEventListener('click', () => {
            dialogBox.close();
        })



        card.classList.add('member-card');
        data.appendChild(card);
    });

};


displayAccidents(mozambiqueAccidents);




const messageBox = document.getElementById("visitMessage");

//get the lst visit from localStorage
let lastVisit = localStorage.getItem("lastVisit");

//get current time
const now = Date.now();

if (lastVisit) {
    //convert string to number
    lastVisit = Number(lastVisit);

    //calculate time difference in days
    const differenceMs = now - lastVisit;
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    //display message
    messageBox.textContent = `You last visited  ${differenceDays} day(s) ago.`;
}
else {
    //first time visiting
    messageBox.textContent = "Welcome! Let us know if you have any questions.";
}

//save the current date for next visit
localStorage.setItem("lastVisit", now)

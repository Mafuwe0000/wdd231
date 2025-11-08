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




const url = '../data/members.json';
const cards = document.querySelector('#cards');


async function getMemberData() {
    try {
        //fetc the JSON file
        const response = await fetch(url);
        //check if the request was successful
        if (!response.ok) {
            throw new Error("HTTP error! status: ${response.status}");

        }
        //Parse the JSON data
        const data = await response.json();

        //Display the data
        displaymembers(data.member);
    } catch (error) {
        console.error('Error fetching the JSON file:', error);
    }
}



getMemberData();

const displaymembers = (members) => {
    members.forEach(member => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let phoneNumber = document.createElement('p');
        let address = document.createElement('p');

        fullName.textContent = `Company: ${member.name}`;
        phoneNumber.textContent = `Phone Number: ${element.phone}`;
        address.textContent = `Address: ${element.address}`;



        card.appendChild(fullName);
        card.appendChild(phoneNumber);
        card.appendChild(address);
        cards.appendChild(card);
    });

};

/*
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener('click', () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}*/
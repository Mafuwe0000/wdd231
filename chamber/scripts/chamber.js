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




const url = 'https://mafuwe0000.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');


async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displaymembers(data.member);
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


import { temples } from "../data/temples.js";
console.log(temples)

import { url } from "../data/temples.js";
console.log(url)


const showHere = document.querySelector("#showHere");

const mydialog = document.querySelector('#mydialog');

const mytitle = document.querySelector('#mydialog h2');
const myinfo = document.querySelector('#mydialog p');
const myclose = document.querySelector('#mydialog button');


myclose.addEventListener("click", () => {
    mydialog.close()
});

function displayItems(data) {
    console.log(data);
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src = `${url}${x.path}`
        photo.alt = x.name

        //Add an event listener to each division on the page
        photo.addEventListener('click', () => showStuff(x));

        showHere.appendChild(photo)
    });

}
//Start displaying all items in the json file
displayItems(temples);

function showStuff(x) {
    mytitle.innerHTML = x.name;
    const dedicated = x.dedicated;
    const byPerson = x.person;
    const number = x.number;
    myinfo.textContent = `Dedicated ${dedicated} by ${byPerson} as a temple number ${number}`

    mydialog.showModal();
}
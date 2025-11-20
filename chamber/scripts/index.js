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





const currenWeather = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector('figcaption');

const capHIGH = document.querySelector('#high');
const capLow = document.querySelector('#low');
const capHum = document.querySelector('#humidity');
const capSrise = document.querySelector('#sunrise');
const capSset = document.querySelector('#sunset');




const web = "https://api.openweathermap.org/data/2.5/weather?lat=-25.96&lon=32.58&units=imperial&appid=4b70bd4d6977e28e01d7267de4a090c7"



async function apiFetch() {

    try {

        //Store the results of the URL fetch into a variable named "response".
        const response = await fetch(web);


        if (response.ok) {
            //If the response is OK and no error was found, then store the result of response.json() conversion in a variable named "data"
            const data = await response.json();

            //this was only for test by displaying the data
            console.log(data);

            displayResults(data); //this displays the data 
        }
        else {
            throw Error(response.text())
        }

    } catch (error) {
        console.error(`Something went wrong:`, error.message)

    }
}




function displayResults(data) {
    currenWeather.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

    let high = data.main.temp_max;
    let low = data.main.temp_min;
    let hum = data.main.humidity;
    //  let srise = data.sys.sunrise;
    //let sset = data.sys.sunset;

    //Multiply by 1000 because JavaScript Date expects milliseconds.
    //sunriseDate is now a Date object representing the exact date and time of sunrise.
    const sunriseDate = new Date(data.sys.sunrise * 1000);
    //Extract hours and minutes
    const hours = sunriseDate.getHours();
    const minutes = sunriseDate.getMinutes();

    //Format to 12-hour with AM/PM
    let hours12 = hours % 12 || 12; //convert 0-23 to 1-12
    let ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime12 = `${hours12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    //document.getElementById('sunrise').textContent = `Sunrise ${formattedTime12}`;


    capHIGH.innerHTML = `${high}&deg;`;
    capLow.innerHTML = `${low}&deg;`;
    capHum.textContent = `${hum}%`;
    capSrise.textContent = `${formattedTime12}`;

    //Multiply by 1000 because JavaScript Date expects milliseconds.
    //sunriseDate is now a Date object representing the exact date and time of sunrise.
    const sunsetDate = new Date(data.sys.sunset * 1000);
    //Extract hours and minutes
    const hour = sunsetDate.getHours();
    const minut = sunsetDate.getMinutes();

    //Format to 12-hour with AM/PM
    let hours21 = hour % 12 || 12; //convert 0-23 to 1-12
    let amp = hour >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours21}:${minutes.toString().padStart(2, '0')} ${amp}`;
    //document.getElementById('sunrise').textContent = `Sunrise ${formattedTime12}`;

    capSset.textContent = `${formattedTime}`;

}
apiFetch();


const web3 = "https://api.openweathermap.org/data/2.5/forecast?lat=-25.96&lon=32.58&units=imperial&appid=4b70bd4d6977e28e01d7267de4a090c7"

async function forecast() {
    try {

        //Store the results of the URL fetch into a variable named "response".
        const response = await fetch(web3);


        if (response.ok) {
            //If the response is OK and no error was found, then store the result of response.json() conversion in a variable named "data"
            const data = await response.json();

            //this was only for test by displaying the data
            console.log(data);

            displayForecast(data); //this displays the data 
        }
        else {
            throw Error(response.text())
        }

    } catch (error) {
        console.error(`Something went wrong:`, error.message)

    }

}


const tempToday = document.querySelector('#forecast');
const tempTomorrow = document.querySelector('#forecastTomorrow');
const tempAfterTomorrow = document.querySelector('#forecastAfterTomorrow');



function displayForecast(data) {
    let tempTd = data.list[0].main.temp;
    let tempT = data.list[1].main.temp;
    let tempAT = data.list[2].main.temp;


    tempToday.innerHTML = `${tempTd}&deg;F`;
    tempTomorrow.innerHTML = `${tempT}&deg;F`;
    tempAfterTomorrow.innerHTML = `${tempAT}&deg;F`;

}

forecast();




const url = `./data/members.json`;
const cards = document.querySelector('#cards');


async function getMemberData() {
    try {
        //fetc the JSON file
        const response = await fetch(url);
        //check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);

        }
        //Parse the JSON data
        const data = await response.json();
        //filter 3 level member
        const level3Member = data.members.filter(member => member.membershipLevel === 3);
        //shuffle
        const shuffled = level3Member.sort(() => Math.random() - 0.5);
        //pick 3
        const random3 = shuffled.slice(0, 3);
        //Display the data
        displaymembers(random3);
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
        let web = document.createElement('p');
        let membership = document.createElement('p');
        let img = document.createElement('img');
        img.src = member.image;


        fullName.textContent = `Company: ${member.name}`;
        phoneNumber.textContent = `Phone Number: ${member.phone}`;
        address.textContent = `Address: ${member.address}`;
        web.textContent = `Website: ${member.website}`;
        membership.textContent = `Membership Level: ${member.membershipLevel}`;




        card.appendChild(fullName);
        card.appendChild(phoneNumber);
        card.appendChild(address);
        card.appendChild(web);
        card.appendChild(img);
        card.appendChild(membership);
        card.classList.add('member-card');
        cards.appendChild(card);
    });

};

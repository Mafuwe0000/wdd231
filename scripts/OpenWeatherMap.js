const currenWeather = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=4b70bd4d6977e28e01d7267de4a090c7"

async function apiFetch() {

    try {

        //Store the results of the URL fetch into a variable named "response".
        const response = await fetch(url);


        if (response.ok) {
            //If the response is OK and no error was found, then store the result of response.json() conversion in a variable named "data"
            const data = await response.json();

            //this was only for test by displaying the data
            // //console.log(data);

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
    currenWeather.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

}
apiFetch();
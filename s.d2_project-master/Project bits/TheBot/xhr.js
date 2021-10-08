// function getData(location) {
//     sendHttpRequest(location);
// } I WANT TO TRY AWAIT ASYNC

function getData(location, reply) {

    const url = `https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${location}%2CIreland&cnt=3&units=metric`;

    fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7c360ec193msh02b5f0379daf9bcp125a79jsnda5e041a9f7c",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const api = data;
            const messagesContainer = document.getElementById("messages");
            let botDiv = document.createElement("div");
            let botImg = document.createElement("img");
            botDiv.id = "bot";
            botImg.src = "img/OctaviaIcon.png";
            botImg.className = "avatar";
            botDiv.className = "bot response";


            let botWeather = document.createElement('div');
            botWeather.id = "weather";
            let date, icon, temp;
            const length = api.cnt;

            for (let i = 0; i < length; i++) {
                date = new Date(api.list[i].dt * 1000);
                const card = document.createElement('div');
                card.setAttribute('class', 'card');
                const line1 = document.createElement('p');
                line1.innerText = date.toDateString().replace('2021', "");
                card.appendChild(line1);

                icon = document.createElement('img');
                icon.setAttribute('class', 'weather-icon');
                icon.setAttribute('src', imgSource(api.list[i].weather[0].main));
                card.appendChild(icon);

                temp = document.createElement('h3');
                temp.innerHTML = Math.ceil(api.list[i].temp.day) + `&#8451`;
                card.appendChild(temp);

                botWeather.appendChild(card);
            }

            botDiv.appendChild(botWeather);
            botDiv.appendChild(botImg);
            setTimeout(() => {
                messagesContainer.appendChild(botDiv);
                messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
                addWears(api.list[Math.floor(Math.random()*api.cnt)].weather[0].main, 0);},
                2000);


        })
        .catch(() => {
            console.log("nomatch");
        })

}

const sampleApiResponse = {
    "city": {
        "id": 2643743,
        "name": "London",
        "coord": {"lon": -0.1257, "lat": 51.5085},
        "country": "GB",
        "population": 1000000,
        "timezone": 3600
    },
    "cod": "200",
    "message": 0.0766592,
    "cnt": 3,
    "list": [{
        "dt": 1617105600,
        "sunrise": 1617082801,
        "sunset": 1617128974,
        "temp": {"day": 19.52, "min": 7.97, "max": 21.01, "night": 13.46, "eve": 17.33, "morn": 7.97},
        "feels_like": {"day": 16.67, "night": 11.75, "eve": 15.69, "morn": 5.85},
        "pressure": 1028,
        "humidity": 41,
        "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
        "speed": 2.74,
        "deg": 174,
        "clouds": 0,
        "pop": 0
    }, {
        "dt": 1617192000,
        "sunrise": 1617169064,
        "sunset": 1617215474,
        "temp": {"day": 20.79, "min": 10.88, "max": 21.54, "night": 14.24, "eve": 17.77, "morn": 10.88},
        "feels_like": {"day": 18.23, "night": 13.45, "eve": 16.09, "morn": 9.26},
        "pressure": 1020,
        "humidity": 48,
        "weather": [{"id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d"}],
        "speed": 3.48,
        "deg": 205,
        "clouds": 31,
        "pop": 0
    }, {
        "dt": 1617278400,
        "sunrise": 1617255327,
        "sunset": 1617301974,
        "temp": {"day": 14.4, "min": 6.68, "max": 14.4, "night": 6.68, "eve": 10.7, "morn": 9.29},
        "feels_like": {"day": 10.09, "night": 1.36, "eve": 5.59, "morn": 5.73},
        "pressure": 1026,
        "humidity": 60,
        "weather": [{"id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d"}],
        "speed": 5.08,
        "deg": 45,
        "clouds": 27,
        "pop": 0
    }]
}


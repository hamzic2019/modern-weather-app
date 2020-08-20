const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');


class Forcast {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    async getInfo(city) {
        const weather = await this.getWeather(city);
        return weather.json();
    }
    async getWeather(city){
        const completeURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`;
        const weather = await fetch(completeURL);
        return weather;
    }

}

class Message {
    async message(data) {
        let description = data.weather[0].description;
        let icon = data.weather[0].icon;
        let temp = data.main.temp;
        let humidity = data.main.humidity;
        let windSpeed = data.wind.speed;
        let city = data.name;
        return {
            description,
            icon,
            temp,
            humidity,
            windSpeed,
            city
        }
    }

    async showMe(city) {
        const data = await forcast.getInfo(city);
        const message = await this.message(data);
        return message;
    }
}


class Display {
    async displayWeather(data){
        const newData = await message.showMe(data);
        assignIt(newData);
    }
}

const assignIt = (data) => {
    city.innerHTML = data.city;


    let g = parseInt(data.temp.toFixed(1))
    let i = 0;
    let funny = setInterval(() => { // interval to show animation on displaying temprerature to the user
        i++;
        
        if (i > g){
            clearInterval(funny);
        }
        temp.innerHTML = i;
    }, 25);

    description.innerHTML = data.description;
    wind.innerHTML = data.windSpeed;
    humidity.innerHTML = data.humidity;
}

const message = new Message();
const forcast = new Forcast('c5a16cc206494e67207a0cfdcb6db03e');
const display = new Display();
const input = document.querySelector('#search');

let wishCity;


input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        wishCity = e.target.value;
        display.displayWeather(wishCity);
    }  
});



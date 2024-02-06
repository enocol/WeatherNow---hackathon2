
const form = document.querySelector("form class name");
const search = document.querySelector("search bar class");
const weatherBox = document.querySelector("weather box class");
const weatherDetails = document.querySelector("weather details");
const errorMessage = document.querySelector("Error message");

search.addEventListener('click', () => {

    const APIKey = 'afef0a4b6a2c5afed7f5da4a756f41d9';
    const city = document.querySelector('search-box input').value;

    if (city == '')
       return;

       fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${city}&units=metric&appid=${APIKey}`)
       .then (response => response.json()).then(json => {
        
        const image = document.querySelector('insert weather image class');
        const tempreture = document.querySelector('insert tempreture class');
        const description = document.querySelector('insert weather description class');
        const humidity = document.querySelector('insert humidity class');
        const wind = document.querySelector('insert wind class');

       });


});
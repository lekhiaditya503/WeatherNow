

const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".weather-details")
const time = document.querySelector(".time");
const icon = document.querySelector(".icon");


cityForm.addEventListener("submit", e => {
    e.preventDefault();
    final(cityForm.city.value.trim())
    .then(data => {


    console.log(data);


    updateUI(data)
    });
    cityForm.reset();
})


const updateUI = data =>{
    const cityDets = data.cityDets;
    const weather = data.weather[0];

    let timeSrc = null;

    if(weather.IsDayTime){
        timeSrc = "day.jpg";
    }else{
        timeSrc = "night.jpg"
    }

    time.setAttribute('src',`../assets/${timeSrc}`);

    let iconSrc = `../assets/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src',iconSrc);
    
    details.innerHTML = `
    <div class="city">${cityDets.EnglishName},${cityDets.Country.LocalizedName}</div>
    <div class="condtion">${weather.WeatherText}</div>
    <div class="temp">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;c</span>
    `

    let dayOrNight = null;
    
}





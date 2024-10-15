let key= "78c9a611c5f2980179fd3ae32d35fae8";

let inputCity= document.getElementById("city-name");
let searchBtn= document.getElementById("search-city")
let result= document.getElementById("result")

let getWeather=()=>{
  let cityValue= inputCity.value;

  if(cityValue.length === 0){
    result.innerHTML=`<h3 class="noValue"> Please Enter Name of the City😊</h3>`
  }

  else{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`

    inputCity.value= ""

    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
      result.innerHTML=`<h2>${data.name}</h2>
      <h2 class="weather">${data.weather[0].main}</h2>
      <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />
      <h2> ${data.main.temp}°</h2>
      <div>
      <h4>Min Temp: ${data.main.temp_min}°<h4>
      <h4>Max Temp: ${data.main.temp_max}°<h4>
      </div>
      `
    }).catch(()=>{
      result.innerHTML=`<h2 class="noValue">City Not Found!❗🤔 </h2>`
    })
  }
}

searchBtn.addEventListener("click" , getWeather)
window.addEventListener("load",getWeather)

/* const btn = document.getElementById("button-add");
btn.addEventListener("click",addnumbers);
function addnumbers(){
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    const sum = +n1 + +n2;
    const resultDiv=  document.getElementById("result");
    resultDiv.innerHTML = sum;
    alert("Hello Benson");
  
}
*/
function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async position =>{
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            console.log("lat : " +lat+ " long : " +long);
            const data = await getWeatherData(lat, long);
            

            var map = L.map('map').setView([20.9716, 80.5946], 6);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([lat, long]).addTo(map);
marker.bindPopup(data.name).openPopup();

map.on('click', async function(e){
    console.log("Lat : "+ e.latlng.lat + "Long: " + e.latlng.lng);
    const data = await getWeatherData(e.latlng.lat, e.latlng.lng);
    renderWeatherData(data);

})





            /* const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=ddfaba4398b491fa4ef3e29a5e934c6e`;

            let response = await fetch(api);
            let data = await response.json();
            */

 
            /*fetch(url)
            .then(data =>{
                console.log(data);
            })
            */
           /* console.log(data)
            */
        })
        

    }
}


/* const myCallback = () =>{
    console.log("I am sleeping")
}
setTimeout(myCallback, 5000);
*/

async function getWeatherData(lat, long){
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=ddfaba4398b491fa4ef3e29a5e934c6e`;

    let response = await fetch(api);
    let data = await response.json();
    console.log(data);
    return data;
}

function renderWeatherData(data){
    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("humidity").innerHTML = data.main.humidity;
    document.getElementById("temperature").innerHTML = data.main.temp;
    document.getElementById("pressure").innerHTML = data.main.pressure;
    document.getElementById("max_temp").innerHTML = data.main.temp_max;
    document.getElementById("min_temp").innerHTML = data.main.temp_min;
    


}
getLocation();




    
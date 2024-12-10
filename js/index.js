let searchInput = document.querySelector('#search');
let list = []; 

async function getCairo(cairo) {

    let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d950a8bc90754dddbbc215136240312&q=${cairo}&days=3&aqi=no&alerts=no`);
    let data = await res.json();
    list = [data]; 
    console.log(list);


    display(data);
    displayTommorow(data);
    afterTommorow(data);
}

getCairo('Cairo');

async function getApi(country) {
    let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d950a8bc90754dddbbc215136240312&q=${country}&days=3&aqi=no&alerts=no`);
    let data = await res.json();
    list = [data]; 
    console.log(list);
}

function display(regionData) {
    let infoContainer = ""; 

    const rawDate = regionData.forecast.forecastday[0].date;
    const dateObject = new Date(rawDate);
    const formattedDate = dateObject.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    infoContainer += `
        <div class="col-md-4">
            <div class="card border bgc-dark2 rounded-4 p-4 mb-5">
                <div class="card-body border rounded-4 bgc-dark b-dark1 text-center">
                    <h5 class="card-title b-bottom pb-2">${formattedDate}</h5>
                    <img src="https:${regionData.current.condition.icon}" alt="Weather Icon" />
                    <h5 class="card-title">${regionData.location.name}</h5>
                    <h5 class="card-title">${regionData.current.temp_c}<sup>o</sup>C</h5>
                    <h5 class="card-title">${regionData.current.condition.text}</h5>
                </div>
                <div class="icons d-flex justify-content-between p-4 b-top text-light">
                    <span><img src="images/icon-umberella.png" alt="">20%</span>
                    <span><img src="images/icon-wind.png" alt="">18km/h</span>
                    <span><img src="images/icon-compass.png" alt="">East</span>
                </div>
            </div>
        </div>
    `;
    document.querySelector('#myRow').innerHTML = infoContainer;
}

function displayTommorow(regionData) {
    let infoContainer = "";

    const rawDate = regionData.forecast.forecastday[1].date;
    const dateObject = new Date(rawDate);
    const formattedDate = dateObject.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    infoContainer += `
        <div class="col-md-4">
            <div class="card border bgc-dark2 rounded-4 p-4 mb-5">
                <div class="card-body border rounded-4 bgc-dark b-dark1 text-center">
                    <h5 class="card-title b-bottom pb-2">${formattedDate}</h5>
                    <img src="https:${regionData.forecast.forecastday[1].day.condition.icon}" alt="Weather Icon" />
                    <h5 class="card-title">${regionData.location.name}</h5>
                    <h5 class="card-title">${regionData.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h5>
                    <h5 class="card-title">${regionData.forecast.forecastday[1].day.condition.text}</h5>
                </div>
                    <div class="icons d-flex justify-content-between p-4 b-top text-light">
                    <span><img src="images/icon-umberella.png" alt="">20%</span>
                    <span><img src="images/icon-wind.png" alt="">18km/h</span>
                    <span><img src="images/icon-compass.png" alt="">East</span>
                </div>
            </div>
        </div>
    `;
    document.querySelector('#myRow').innerHTML += infoContainer;
}

function afterTommorow(regionData) {
    let infoContainer = "";

    const rawDate = regionData.forecast.forecastday[2].date;
    const dateObject = new Date(rawDate);
    const formattedDate = dateObject.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    infoContainer += `
        <div class="col-md-4">
            <div class="card border bgc-dark2 rounded-4 p-4 mb-5">
                <div class="card-body border rounded-4 bgc-dark b-dark1 text-center">
                    <h5 class="card-title b-bottom pb-2">${formattedDate}</h5>
                    <img src="https:${regionData.forecast.forecastday[2].day.condition.icon}" alt="Weather Icon" />
                    <h5 class="card-title">${regionData.location.name}</h5>
                    <h5 class="card-title">${regionData.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h5>
                    <h5 class="card-title">${regionData.forecast.forecastday[2].day.condition.text}</h5>
                </div>
                    <div class="icons d-flex justify-content-between p-4 b-top text-light">
                    <span><img src="images/icon-umberella.png" alt="">20%</span>
                    <span><img src="images/icon-wind.png" alt="">18km/h</span>
                    <span><img src="images/icon-compass.png" alt="">East</span>
                </div>
            </div>
        </div>
        
    `;
    document.querySelector('#myRow').innerHTML += infoContainer;
}

async function search() {
    const query = searchInput.value.trim();

  
    document.querySelector('#myRow').innerHTML = "";

    if (query === "") {
       
        await getCairo('Cairo');
        return;
    }
        const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d950a8bc90754dddbbc215136240312&q=${query}&days=3&aqi=no&alerts=no`);
        const data = await res.json();


        list = [data]; 
        display(data);
        displayTommorow(data);
        afterTommorow(data);
  
}
function changeColor(input) {
  input.style.color = "#E3E3E3"; 
}

var autocompletes;
var inputs = document.querySelector('.search');

function init() {
    google.maps.event.addDomListener(window, 'load', init);
}

autocompletes = new google.maps.places.Autocomplete(inputs);
google.maps.event.addListener(autocompletes, 'place_changed', function () {
   
    clearDisplay()

    var place = autocompletes.getPlace();
    if (!place.geometry) {
        window.alert("Error");
        return;
    }
    let latitude = place.geometry.location.lat();
    let longitude = place.geometry.location.lng();

    getWeather(latitude, longitude);

});

async function getWeather(latitude, longitude) {
   
    let weatheUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=06bfa05643c54c6eaf6c26c7b39abd7d`;
    let response = await fetch(weatheUrl)
    var json = await response.json();
       
        (json.data).forEach(  elem => {
            var dateElem = document.createElement('tr');
            dateElem.append(` ${elem.valid_date} `);
            var defaultElem = document.querySelector("#date");
            defaultElem.append(dateElem);

            var tempElem = document.createElement('tr');
            tempElem.append(` ${elem.temp} `);
            var defaultDate = document.querySelector("#curTemp");
            defaultDate.append(tempElem);

            var weatherElem = document.createElement('tr');
            weatherElem.append(` ${elem.weather.description}`);
            var defaultWeather = document.querySelector("#weather");
            defaultWeather.append(weatherElem);
        });
}

function clearDisplay(){
    t1 = document.querySelector('#curTemp');
    t2 = document.querySelector('#weather');
    t3 = document.querySelector('#date');
    elArr =[t1,t2,t3]
    elArr.forEach( el => {
        while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
    });
    
}
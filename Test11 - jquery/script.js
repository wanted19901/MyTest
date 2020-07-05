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
       
        json.data.forEach(  el => {
            $('tbody').append(`
             <tr>
              <td>${el.valid_date }</td>
              <td>${el.temp}</td>
              <td>${el.weather.description}</td>
             </tr>
            `)
            
        });
}

function clearDisplay(){
    t1 = document.querySelector('#tbody');
    while (t1.firstChild) {
        t1.removeChild(t1.firstChild);
    }
        
}
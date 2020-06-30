google.maps.event.addDomListener(window, 'load', init);
var autocompletes, marker, infowindow, map;
function init() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13
    });
    infowindow = new google.maps.InfoWindow();
    marker = new google.maps.Marker({
        map: map
    });
}
var inputs = document.querySelector('.login');
autocompletes = new google.maps.places.Autocomplete(inputs);
google.maps.event.addListener(autocompletes, 'place_changed', function () {
    marker.setVisible(false);
    infowindow.close();

    var place = autocompletes.getPlace();
    if (!place.geometry) {
        window.alert("Error");
        return;
    }
    marker.setIcon(({
        url: place.icon,
        scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    let latitude = place.geometry.location.lat();
    let longitude = place.geometry.location.lng();
    
    async function getWeather(latitude, longitude) {
        let weatheUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=06bfa05643c54c6eaf6c26c7b39abd7d`;
        let response = await fetch(weatheUrl)
        var json = await response.json();

        for (let i = 0; i <= json.data.length - 1; i++) {

            var dateElem = document.createElement('tr');
            dateElem.append(` ${json.data[i].valid_date} `);
            var defaultElem = $("#date");
            defaultElem.append(dateElem);

            var tempElem = document.createElement('tr');
            tempElem.append(` ${json.data[i].temp} `);
            var defaultDate = $("#curTemp");
            defaultDate.append(tempElem);

            var weatherElem = document.createElement('tr');
            weatherElem.append(` ${json.data[i].weather.description}`);
            var defaultWeather = $("#weather");
            defaultWeather.append(weatherElem);

        }
    }
    getWeather(latitude, longitude)

});
let input1 = document.querySelector('.login'); //окно ввода
let chek = document.querySelector('.chek'); // кнопка
google.maps.event.addDomListener(window, 'load', init);

var autocompletes, marker, infowindow, map;
function init() {
   
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -33.8688, lng: 151.2195},
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
               
    let city = place.formatted_address
    let cityGeometry = place.geometry.location
    let location = document.querySelector('#location');
    location.textContent = city 
    var d = new Date(); 
    let dateNow = document.querySelector('#date');
    dateNow.textContent = d.getDate()  + "." + (d.getMonth()+1) + "." + d.getFullYear()
    

    console.log(cityGeometry, city) 
    console.log(place)
      

    let latitude = place.geometry.location.lat();
    let longitude = place.geometry.location.lng();
    console.log(latitude, longitude)
    
    var apiURI2 = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=06bfa05643c54c6eaf6c26c7b39abd7d`;
    setTimeout( () =>{
    let json = JSON.stringify(apiURI2);
    console.log(apiURI2)}, 3000 )
  
    });
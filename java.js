var mapboxAccessToken = '';
var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/arthurjrocha/cl268i17z003e14o5yky6jnut/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXJ0aHVyanJvY2hhIiwiYSI6ImNsMXBjeGF0OTA0eXYzY3BndWpsbm15MTgifQ.U5WAS-rQQcswwiysi7mjaQ' + mapboxAccessToken, {
    id: 'mapbox/light-v9',
    attribution: ...,
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.geoJson(statesData).addTo(map);
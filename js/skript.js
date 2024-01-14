// JavaScript file: skript.js
function initMap() {
  var standort = {lat: 47.092, lng: 9.280}; // Replace with the actual coordinates for Eberle & Freuler
  var karte = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: standort
  });
  var marker = new google.maps.Marker({
    position: standort,
    map: karte
  });
}

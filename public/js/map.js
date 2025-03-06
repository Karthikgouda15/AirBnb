// let map;
// let marker;

// function initMap(initialCoordinates, zoomLevel) {
//   map = L.map('map').setView(initialCoordinates, zoomLevel);

//   googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
//     maxZoom: 20,
//     subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
//   });

//   googleStreets.addTo(map);

//   marker = L.marker(initialCoordinates);

//   const popup = marker.bindPopup("Exact location provided after booking");
//   popup.openPopup();

//   marker.addTo(map);

//   // Add zoom control (optional)
//   L.control.zoom({
//     position: 'bottomright'
//   }).addTo(map);
// }

// // Assuming coordinates are fetched from elsewhere
// const fetchedCoordinates = Coordinates;
// const zoomLevel = 8; // Adjust zoom level as needed

// initMap(fetchedCoordinates, zoomLevel);

// console.log(Coordinates);

   
    mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [77.209, 28.6139], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });

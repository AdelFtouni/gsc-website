

// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const pointA = { lat: 41.881832, lng: -87.623177 };
//     const pointB = { lat:  22.302711, lng: 114.177216 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       mapId: '4c00a0a0a3aa7230',
//      center: pointA,
//     },
//     {
//       zoom: 4,
//       mapId: '4c00a0a0a3aa7230',
//      center: pointB,
//     });
//     // The marker, positioned at Uluru
//     const markerA = new google.maps.Marker({
//       position: pointA,
//       map: map,

//     });

//     const markerB = new google.maps.Marker({
//       position: pointB,
//       map: map,

//     });

//     // Add onClick Marker Listener
//     google.maps.event.addListener('click', function(){
//     //  Create Line
//       var flightPath = new google.maps.Polyline({
//         path: [{positionA}, {positionB}],
//         geodesic: true,
//         strokeColor: '#FF0000',
//         strokeOpacity: 1.0,
//         strokeWeight: 2
//       });
//       // Add line to map
//       flightPath.setMap(map);
//     });

//   }
  
//   window.initMap = initMap;

// Marker locations
var locations = [
  ['A', 41.881832, -87.623177, 4],
  ['B', 22.302711, 114.177216, 5]
];
var map;
var markers = [];

function initMap(){
  // Create new Map
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(41.881832, -87.623177),
    mapId: '4c00a0a0a3aa7230'
  });
  // Get number of Locations
  var num_markers = locations.length;
  // Create Markers
  for (var i = 0; i < num_markers; i++) {  
    markers[i] = new google.maps.Marker({
      position: {lat:locations[i][1], lng:locations[i][2]},
      map: map,
      html: locations[i][0],
      id: i,
    });
    // Add onClick Marker Listener
    google.maps.event.addListener(markers[i], 'click', function(){
      // Create Line
      var flightPath = new google.maps.Polyline({
        path: [{lat:locations[0][1], lng:locations[0][2]}, {lat:locations[1][1], lng:locations[1][2]}],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      // Add line to map
      flightPath.setMap(map);
    });
    }
}

window.initMap = initMap;
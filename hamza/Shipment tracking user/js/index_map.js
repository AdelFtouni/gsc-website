

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
  ['B', 26.5785, 169.2329, 5],
  ['C', 22.302711, 114.177216, 5]
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
  const svgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "#00ff00",
    fillOpacity: 0.7,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };
  for (var i = 0; i < num_markers; i++) {  
    markers[i] = new google.maps.Marker({
      position: {lat:locations[i][1], lng:locations[i][2]},
      draggable: true,
      animation: google.maps.Animation.DROP,
      map: map,
      html: locations[i][0],
      id: i,
      icon: svgMarker
    });
    
    // Add onClick Marker Listener
    google.maps.event.addListener(markers[i], 'click', function(){
      
      // Create Line
      const lineSymbol = {
        path: "M 0,-1 0,1",
        strokeOpacity: 1,
        scale: 3,
      };
      var flightPath = new google.maps.Polyline({
        path: [{lat:locations[0][1], lng:locations[0][2]}, {lat:locations[1][1], lng:locations[1][2]}, {lat:locations[2][1], lng:locations[2][2]}],
        geodesic: false,
        strokeColor: '#00ff00',
        strokeOpacity: 0,
        icons: [
          {
            icon: lineSymbol,
            offset: "0",
            repeat: "20px",
          },
        ],
      });
      
      // Add line to map
      flightPath.setMap(map);
      animateCircle(flightPath);
    });


    }
}


function animateCircle(flightPath) {
  let count = 0;

  window.setInterval(() => {
    count = (count + 1) % 200;

    const icons = flightPath.get("icons");

    icons[0].offset = count / 2 + "%";
    flightPath.set("icons", icons);
  },120);
}





window.initMap = initMap;
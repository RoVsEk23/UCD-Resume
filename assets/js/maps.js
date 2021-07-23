function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: {
      lat: 51.096345,
      lng: -0.210857,
    },
  });
  var labels = "ABCDEFGHIJKLMNOOPQRSTUVWXYZ";

  var locations = [
    {
      lat: 51.096399,
      lng: -0.210595,
    },
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}

var map;
function initialize() {
 var myLatlng = new google.maps.LatLng(41.982545,-87.718056);
 var mapOptions = {
    zoom: 15,
    center: myLatlng
  }	
	
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'MobileTek, Inc. World Headquarters'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
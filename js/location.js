//function to set google map to page
function myMap() {
	var mapOptions = {
		//sets the area on the map that is displayed
		center: new google.maps.LatLng(40.692193, -73.945879),
		zoom: 19,
		
		//sets the type of map that is displayed
		mapTypeId: google.maps.MapTypeId.HYBRID
	}
	//places the map on the html
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	//shows the current traffic
	var trafficLayer = new google.maps.TrafficLayer();
	trafficLayer.setMap(map);
}
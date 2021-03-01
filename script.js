var map = L.map('map').setView([37.85,-122.52], 14);

  // load a tile layer
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

  // load GeoJSON from an external file
  $.getJSON("https://github.com/mattarndt1/project_1--leaflet/blob/main/LCF_boundary.geojson",function(data){
	  
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data{	     
	    "color": "#0000ff",
	    "weight": 5
	      }).addTo(map);
	  
/*
	var ratIcon = L.icon({
	    iconUrl: 'rat.gif',
	    iconSize: [25,15]
	  }); 
	  L.geoJson(data  ,{
	    pointToLayer: function(feature,latlng){
		  return L.marker(latlng,{icon: ratIcon});
	    }
	  } );
	  */
  });

mapboxgl.accessToken = 'pk.eyJ1IjoiamltZW5lei1zdWxsIiwiYSI6ImNsYmxqemJiazA4ZHYzcW1zb3VncXplaGMifQ.qiB0aU6K0Z1tdT_Ke3c5eA';

var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [42.3855,71.2218],
        zoom: 5
    });

var markerBentley = new mapboxgl.Marker()
  .setLngLat([42.3855,71.2218])
  .addTo(map);

  async function getBusLocations(){
	var url = 'https://static.transloc.net/tvs-public/bentley/css/styles.css?v=1.16';	
	var response = await fetch(url);
	var json     = await response.json();
	return json.data;
}

const busStops = [
  [-71.093729, 42.359244], 
  [-71.094915, 42.360175],
  [-71.095800, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863]
];

var counter = 0;
function move(){
  setTimeout(() =>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000)
}

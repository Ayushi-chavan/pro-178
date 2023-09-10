var latitude =    21.101201      , longitude = 78.970863

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
    container : "map",
    style: 'mapbox://styles/mapbox/streets-v11',
    center : [longitude,latitude],
    zoom : 4,
})

var img1 = document.querySelectorAll("#gateway")

var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([72.834641,18.922064])
.addTo(map)


var img2 = document.querySelectorAll("#gate")

var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([77.2295,28.6129])
.addTo(map)


var img3 = document.querySelectorAll("#lotus")

var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([77.2588,28.5535])
.addTo(map)


var img4 = document.querySelectorAll("#stupa")

var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([77.73,23.48])
.addTo(map)


var img5 = document.querySelectorAll("#statue")

var marker5 = new mapboxgl.Marker({
    element:img5
})
.setLngLat([73.7191,21.8380])
.addTo(map)


map.addControl(
    new MapboxDirections({
        accessToken : mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }),
    
)


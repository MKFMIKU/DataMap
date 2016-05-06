
var PersonMap = {
    "type": "Feature",
    "properties": {
        "name":"MKFMIKU",
        "place":"Hubei Province"
    },
    "geometry": {
        "type": "MultiPoint",
        "coordinates": [
            [116, 31],
            [120,30],
            [110,26],
            [108,27],
            [108.5,32],
            [96.5,23],
            [130,36],
            [120,49]
        ]
    }
};

window.onload = function () {
    var Pmap = L.map('Pmap').setView([35.4, 106.6], 4);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: '纸飞机 © ',
        maxZoom: 20,
        id: 'mkfmiku.02ag2lpl',
        accessToken: 'pk.eyJ1IjoibWtmbWlrdSIsImEiOiJjaW52a216bjMxNXBodThramNtZWZ2YTdtIn0.3uycOdzoSjewxDsBW_K75Q'
    }).addTo(Pmap);

    var PointStyle = L.icon({
        iconUrl: 'plane.png',
        iconSize: [32, 32]
    });

    function showPro(feature, layer) {
        var Pcontent = feature.properties.name+"</br>Worked In "+feature.properties.place;
        layer.bindPopup(Pcontent);
    }
    L.geoJson(PersonMap, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: PointStyle});
        },
        onEachFeature: showPro
    }).addTo(Pmap);

};

// Initialisation de la carte centrée sur Paris
var map = L.map('map').setView([42, 2], 2);
var popup = L.popup();

// Définition des différentes couches de carte
var baseLayers = {
    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
    "OpenStreetMap France": L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
    "World Imagery":  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }),
    "Nasa Map (Night)": L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
        attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
        bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
        minZoom: 1,
        maxZoom: 8,
        format: 'jpg',
        time: '',
        tilematrixset: 'GoogleMapsCompatible_Level'
    }),
    "Google Maps Streets": L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.google.com/intl/fr_fr/help/terms_maps/">Google Maps</a>',
        subdomains:['mt0','mt1','mt2','mt3']
    }),
    "Google Maps Satellites": L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.google.com/intl/fr_fr/help/terms_maps/">Google Maps</a>',
        subdomains:['mt0','mt1','mt2','mt3']
    }),
    "Google Maps Hybrid": L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.google.com/intl/fr_fr/help/terms_maps/">Google Maps</a>',
        subdomains:['mt0','mt1','mt2','mt3']
    }),
    "Google Maps Terrain": L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
        maxZoom: 30,
        attribution: '&copy; <a href="https://www.google.com/intl/fr_fr/help/terms_maps/">Google Maps</a>',
        subdomains:['mt0','mt1','mt2','mt3']
    }),
    "Carto Voyager": L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.carto.com/attributions">CARTO Voyager</a>'
    }),
    "Wikimedia": L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://wikimedia.org">Wikimedia</a>'
    }),
    /*"Stadia Day": L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
        minZoom: 0,
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: 'png'
    }),
    "Stadia Night": L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
        minZoom: 0,
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: 'png'
    }),
    "Stadia Satellite": L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
        minZoom: 0,
        maxZoom: 20,
        attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: 'jpg'
    }),*/
    "OPVNKarte (Airport spot map)": L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
};
L.terminator().addTo(map);

// Ajout de la couche OSM par défaut
baseLayers["OpenStreetMap"].addTo(map);

// Ajout du contrôle de couches en haut à droite
L.control.layers(baseLayers, null, { position: 'topright' }).addTo(map);

map.on('click', function(e) {
    let lat = e.latlng.lat.toPrecision(8);
    let lon = e.latlng.lng.toPrecision(8);

    // Définition de l'icône personnalisée
    const customIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/7061/7061883.png',
        iconSize: [32, 32], // Taille de l'icône
        iconAnchor: [16, 32], // Point d'ancrage (au centre en bas)
        popupAnchor: [0, -32] // Décalage du popup par rapport à l'icône
    });

    // Ajout du marqueur avec l'icône personnalisée
    const point = L.marker([lat, lon], { icon: customIcon }).addTo(map)
        .bindPopup('<a href="http://maps.google.com/maps?q=&layer=c&cbll=' + lat + ',' + lon + '&cbp=11,0,0,0,0" target="blank"><b> Google Street View </b></a><br>Location: <b>' + lat + ', ' + lon + '</b>').openPopup();
});


// Exemples de marker : https://leafletjs.com/examples/quick-start/

// Définition des icônes personnalisées
var kiwisdrIcon = L.icon({
    iconUrl: 'https://lh6.googleusercontent.com/proxy/XxF3-F2dKSulH4ZiAXpaYOrdFEp4pu3wCFkxurZo0Z54YXztG-ExKFglO-OXXXvloNgzKDrKT06LSQCMaEap-iWHqny2V2NFbA',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

var autreIcon = L.icon({
    iconUrl: 'images/marker-icon-oth.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

var web888Icon = new L.Icon({
    iconUrl: 'images/web-888-51x60.png',
    iconSize: [30, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

var militaryIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/256/13397/13397085.png',
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

var owrIcon = new L.Icon({
    iconUrl: 'images/images.png',
    iconSize: [30, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

var txIcon = new L.Icon({
    iconUrl: 'https://cdn4.iconfinder.com/data/icons/cia-operations/512/radio_transmitter-512.png',
    iconSize: [30, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

var tstIcon = new L.Icon({
    iconUrl: 'https://icon-library.com/images/gps-icon-png/gps-icon-png-6.jpg',
    iconSize: [30, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

var noaaIcon = new L.Icon({
    iconUrl: 'https://floridadep.gov/sites/default/files/media-folders/media-root/NOAA-color-logo-no-text-print.png',
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

var noaaSatIcon = new L.Icon({
    iconUrl: 'https://cdn.creazilla.com/icons/3202178/satellite-icon-md.png',
    iconSize: [40, 30], 
    iconAnchor: [20, 41],
    popupAnchor: [1, -34]
})

var websdrIcon = new L.Icon({
    iconUrl: './images/veronlogo100b.gif',
    iconSize: [25, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

function Cicon(lat, lng, popupContent, type) {
    var icon = (type === 'kiwisdr') ? kiwisdrIcon : (type === 'web888') ? web888Icon : (type === 'military') ? militaryIcon : (type === 'owr') ? owrIcon : (type === 'tx') ? txIcon : (type === 'times') ? tstIcon : (type === 'noaa') ? noaaIcon : (type === 'websdr') ? websdrIcon: autreIcon;
    L.marker([lat, lng], { icon: icon }).addTo(map)
        .bindPopup(popupContent)
        .openPopup();
}

// Ajout des marqueurs

Cicon(63.075000, 27.271000, 'KiwiSDR at Kuopio<br> <a href="http://kiwi-kuo.aprs.fi:8073/">http://kiwi-kuo.aprs.fi:8073</a>.', 'kiwisdr');
Cicon(63.075000, 27.270000, 'KiwiSDR at Vihti<br> <a href="http://kiwi-vih.aprs.fi:8073/">http://kiwi-vih.aprs.fi:8073</a>.', 'kiwisdr');
Cicon(60.475959, 22.136627, 'Web888 at Raisio<br> <a href="http://rha.proxy.rx-888.com:8073/">http://rha.proxy.rx-888.com:8073</a>.', 'web888');
Cicon(60.475959, 22.136827, 'KiwiSDR at Raisio<br> <a href="http://rhakiwi.ddns.net:8073/">http://rhakiwi.ddns.net:8073/</a>.', 'kiwisdr');
Cicon(62.014939, 25.724482, 'Kiwisdr at KORPILAHTI 1<br> <a href="http://rha2sdr.ddns.net:8073/">http://rha2sdr.ddns.net:8073/</a>.', 'kiwisdr');
Cicon(62.014099, 25.720217, 'Kiwisdr at KORPILAHTI 2<br> <a href="http://rha2sdr.ddns.net:8074/">http://rha2sdr.ddns.net:8074/</a>.', 'kiwisdr');
Cicon(47.968810, 26.379005, 'KiwiSDR at Dorohoi<br> <a href="http://kiwisdr-dorohoi.ddns.net:8073/">http://kiwisdr-dorohoi.ddns.net:8073/</a>.', 'kiwisdr');
Cicon(44.869416, 0.835143, 'KiwiSDR at Tremolat 1<br> <a href="http://sdr.autreradioautreculture.com:8073/">http://sdr.autreradioautreculture.com:8073</a>.', 'kiwisdr');
Cicon(44.869416, 0.837143, 'KiwiSDR at Tremolat 2<br> <a href="http://sdr.autreradioautreculture.com:8074/">http://sdr.autreradioautreculture.com:8074</a>.', 'kiwisdr');
Cicon(43.50, -72.82, 'KiwiSDR at Shrewsbury<br> <a href="http://sdr.k1vl.com:8073/">http://sdr.k1vl.com:8073/</a>.', 'kiwisdr');
Cicon(51.611271, 45.990255, 'OpenWebRX at Saratov.<br><a href="http://websdr64.ru:8073/">http://websdr64.ru:8073/</a>.', 'owr');
Cicon(45.462362, 39.44809, 'OpenWebRX at Korenovsk.<br><a href="http://rusdr.ddns.net/">http://rusdr.ddns.net/</a>.', 'owr');
Cicon(45.292988, 41.048988, 'OpenWebRX at Grigoropolisskaya.<br><a href="https://sdr.ua6hdw.keenetic.link/">https://sdr.ua6hdw.keenetic.link/</a>.', 'owr');
Cicon(65.868181, 22.643595, 'KiwiSDR at Kalix.<br>Siknas Fortress with wide band Military Dipole near Kalix.<br><a href="http://kiwisdr.sk2hg.se:8073/">http://kiwisdr.sk2hg.se:8073/</a>.', 'kiwisdr');
Cicon(49.928668, 2.9543567, 'OpenWebRX at Péronne.<br><a href="http://peronne-websdr.duckdns.org:8073/">http://peronne-websdr.duckdns.org:8073/</a>.', 'owr');

Cicon(52.239968, 6.850555, 'WebSDR at Twente.<br><a href="http://websdr.ewi.utwente.nl:8901/">http://websdr.ewi.utwente.nl:8901/</a>.', 'websdr');

Cicon(60.3116311, 30.2797395, '<a href="https://priyom.org/military-stations/russia/the-buzzer">UVB-76 transmitter Location</a><br><br><img src="https://www.numbers-stations.com/wp-content/uploads/The-Buzzer-UVB-76-Location-Road-View-Outside-of-St-Petersburg.webp" width="200" height="100">', 'military');
Cicon(47.299609, 39.672693, '<a href="https://priyom.org/military-stations/russia/the-pip">The PIP transmitter location</a>', 'military');
Cicon(47.2996085, 39.6746862, '<a href="https://priyom.org/military-stations/russia/the-squeaky-wheel">The Squealy Wheel transmitter location</a>', 'military');
Cicon(54.8249925, 31.8132469, '<a href="https://priyom.org/military-stations/russia/the-alarm">(almost accurate) The Alarm transmitter location</a>', 'military');
Cicon(54.8243392, 31.8137079, '<a href="https://priyom.org/military-stations/russia/the-air-horn">(almost accurate) The Air Horn transmitter location</a>', 'military');
Cicon(54.8226154, 31.8154299, '<a href="https://priyom.org/military-stations/russia/the-goose">(almost accurate) The Goose transmitter location</a>', 'military');
Cicon(56.0832275, 37.1101672, '<a href="https://priyom.org/military-stations/russia/the-buzzer">1992 - 2010 UVB-76 transmitter location</a><br><br><img src="https://i1.wp.com/qrv73.com/wp-content/uploads/2020/05/maxresdefault-1.jpg?fit=800%2C450&ssl=1" width="200" height="100">', 'military');
Cicon(55.4262114, 36.7087830, 'Naro Fominsk suspected UVB-76 location.', 'military');
Cicon(42.72678372091614, 23.159088733480612, 'UM04 "PROMRCh" transmitter location', 'military');
Cicon(35.446488983415385, 140.1852398121408, '<a href="https://web.archive.org/web/20200524075538/http://priyom.org/military-stations/japan/slot-machine">XSL/Slot Machines transmitter location.</a><br><br><img src="https://i.postimg.cc/vB332pPQ/XSL-The-Japanese-Slot-Machine-Antenna-View.png" width="100%" height="100">', 'military');

Cicon(46.7515385, 26.8561465, 'Radio Romania International - Galbeni HF transmitter site.', 'tx');
Cicon(44.6366254, 26.0739718, 'Radio Romania International - Sâftica HF transmitter site.', 'tx');
Cicon(44.7493389, 26.1028628, 'Radio Romania International - Tiganesti-Sâftica HF transmitter site.', 'tx');
Cicon(47.183644469905325, 27.45627965582365, 'Radio Iasi HF transmitter site.', 'tx');
Cicon(46.9341, 1.8903, '<a href="https://www.tdf.fr/">TDF</a> and <a href="https://www.rfi.fr/en/RFI">RFI</a> transmitters site at Issoudun.<br><br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/03issoudun_rideaux_E_nuit.JPG/220px-03issoudun_rideaux_E_nuit.JPG" width="100%" height="150">', 'tx');
Cicon(17.675075874567614, 103.20006763577238, 'R. Thailand, Voice of America transmitter site.', 'tx');


Cicon(80.118564, -170.859375, `
    <h1>Icon Legend</h1>
    <img src="https://cdn-icons-png.flaticon.com/256/13397/13397085.png" width="30" height="30"> - Military Stations<br>
    <img src="images/web-888-51x60.png" width="25" height="30"> - Web888<br>
    <img src="images/marker-icon-oth.png" width="20" height="30"> - Other Extra<br>
    <img src="images/images.png" width="30" height="30"> - OpenWebRX<br>
    <img src="https://cdn4.iconfinder.com/data/icons/cia-operations/512/radio_transmitter-512.png" width="30" height="30"> - AM/FM Transmitter Site<br>
    <img src="https://lh6.googleusercontent.com/proxy/XxF3-F2dKSulH4ZiAXpaYOrdFEp4pu3wCFkxurZo0Z54YXztG-ExKFglO-OXXXvloNgzKDrKT06LSQCMaEap-iWHqny2V2NFbA" width="25" height="30"> - KiwiSDR<br>
    <img src="https://icon-library.com/images/gps-icon-png/gps-icon-png-6.jpg" width="30" height="30"> - Time Stations Transmitter Site<br>
    <img src="https://cdn.creazilla.com/icons/3202178/satellite-icon-md.png" width="40" height="30"> - NOAA Satellite<br>
    <img src="./images/marker-icon.png" width="20" height="30"> - Other<br>
    <img src="./images/veronlogo100b.gif" width="25" height="40"> - WebSDR<br>
    <img src="https://raw.githubusercontent.com/CliffCloud/Leaflet.LocationShare/master/dist/images/IconMapReceive.png" width="30" height="30"> - Custom user location using the Leaflet.LocationShare script.<br>
    <img src="https://floridadep.gov/sites/default/files/media-folders/media-root/NOAA-color-logo-no-text-print.png" width="30" height="30"> - NOAA Center for Weather and Climate Prediction<br>
    <img src="https://cdn-icons-png.flaticon.com/512/7061/7061883.png" width="30" height="30"> - Street View<br>
    `, 'autreIcon');

Cicon(45.29483124694043, -75.75784300053304, '<a href="https://en.wikipedia.org/wiki/CHU_(radio_station)">CHU Canada transmitter site</a>.<br><br><img src="https://images.squarespace-cdn.com/content/v1/51a013dee4b0a2a2d2ef73e9/1539352270431-P5OAWUASJZ8P82BUQY3U/CHU+Canada+QSL+1.jpg" width="100%" height="100">', 'times');
Cicon(54.91226494367779, -3.2786054508661464, 'MSF transmitter site.<br><br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Anthorn_array.jpg/1280px-Anthorn_array.jpg" width="100%" height="90">', 'times');
Cicon(33.465674852770775, 130.17553039161365, 'JJY Time signal transmitter site Southern', 'times');
Cicon(37.37244017672566, 140.84876564075654, 'JJY Time signal transmitter site Northern', 'times');
Cicon(40.6782963, -105.0466632, '<a href="https://www.nist.gov/pml/time-and-frequency-division/time-distribution/radio-station-wwv">WWV/WWVB transmitter site</a>.<br><br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdi6UkqqDymb7BGjTXKaSRMp8gLwwHBas6Cg&s" width="100%" height="100">', 'times');
Cicon(21.987925, -159.76295, '<a href="https://www.nist.gov/pml/time-and-frequency-division/time-distribution/radio-station-wwvh">WWVH transmitter site</a>.<br><br><img src="https://www.nist.gov/sites/default/files/images/2016/12/06/wwvh3-large.jpg" width="100%" height="100">', 'times');

Cicon(38.9721121, -76.924513, '<a href="https://www.cpc.ncep.noaa.gov/">NOAA Center for Weather and Climate Prediction</a><br><br> <img src="https://www.hamqsl.com/solar101vhfpic.php" width="100%" height="100">', 'noaa');

Cicon(83.111071, -35.859375, 'North Pole Aurora Forecast<br><img src="https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg" width="300" height="300">', 'autreIcon');
Cicon(-75.497157, 55.546875, 'South Pole Aurora Forecast<br><img src="https://services.swpc.noaa.gov/images/animations/ovation/south/latest.jpg" width="300" height="300">', 'autreIcon');

// Ajout d'un marqueur avec une popup

    L.polygon([
        [60.315367, 30.277741],
        [60.313709, 30.277805],
        [60.309586, 30.277441],
        [60.308821, 30.283127],
        [60.310893, 30.286324],
        [60.313635, 30.285745],
        [60.314613, 30.284715],
        [60.315271, 30.281367]
    ]).addTo(map)
    .bindPopup('UVB-76 Transmitter Site Area');

    L.marker([52.4294444, 20.8813889]).addTo(map)
    .bindPopup('<a href="https://priyom.org/number-stations/english/e11">E11 (Oblique) transmitter location</a>.<br><br><img src="https://i.ytimg.com/vi/Omiy0Leoat0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCpyS-P9QMBMEfNECbVGPfSdrmMpg" width="300" height="150">')
    .openPopup();

    L.marker([22.8679204, -82.3347962]).addTo(map)
    .bindPopup('<a href="https://priyom.org/number-stations/digital/hm01">HM01</a>, <a href="https://priyom.org/number-stations/other/v02a">V02a</a>, <a href="https://priyom.org/number-stations/other/v02">V02</a> Number Stations transmitter site.')
    .openPopup();

    L.marker([25.03584943026459, 121.0969072394112]).addTo(map)
    .bindPopup('<a href="https://priyom.org/number-stations/other/v13">V13 Number station transmitter site</a>.<br><br><img src="https://i.postimg.cc/c1pznN83/image.png" width="100%" height="100">')
    .openPopup();

    L.polygon([
        [63.08967, 27.24575],
        [63.083298, 27.242317],
        [63.075215, 27.24781],
        [63.070823, 27.270555],
        [63.073777, 27.286263],
        [63.080034, 27.284546],
        [63.08866, 27.267895]
    ]).addTo(map)
    .bindPopup('KiwiSDR Kuopio and Vihti area');

    L.polygon([
        [45.293686, -75.760115],
        [45.29266, -75.756907],
        [45.295132, -75.753436],
        [45.296837, -75.755517],
        [45.296928, -75.758951]
    ]).addTo(map)
    .bindPopup('CHU Canada transmitter site area');

    L.polygon([
        [62.018125, 25.717535],
        [62.01441, 25.715539],
        [62.012698, 25.720325],
        [62.014944, 25.72953],
        [62.01735, 25.725067]
    ]).addTo(map)
    .bindPopup('KiwiSDR Korpilahti area');

    L.circle([65.870085, 22.644324], {
        color: 'khaki',
        fillColor: 'green',
        fillOpacity: 0.33,
        radius: 500
    }).addTo(map)
    .addTo(map)
    .bindPopup('KiwiSDR at Siknas Fortress with Military Dipole near Kalix - Area');

    L.circle([52.240724, 6.851124], {
        color: 'red',
        fillColor: 'blue',
        fillOpacity: 0.3,
        radius: 300
    }).addTo(map)
    .bindPopup('WebSDR at uTwente - Area');

    let issMarker = null; // Stocke le marqueur ISS
    let issPath = []; // Tableau pour stocker les coordonnées de la trajectoire
    
    // Définir l'icône personnalisée pour l'ISS
    const issIcon = L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/ISS_spacecraft_model_1.png/1200px-ISS_spacecraft_model_1.png', // URL de l'image de l'ISS
        iconSize: [100, 32], // Taille de l'icône
        iconAnchor: [16, 32], // Point d'ancrage de l'icône (en bas au centre)
        popupAnchor: [32, -32] // Position du popup par rapport à l'icône
    });
    
    async function updateISSLocation() {
        try {
            const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
            const data = await response.json();
    
            const lat = data.latitude;
            const lon = data.longitude;
            const name = 'International Space Station <br><iframe src="https://isstracker.spaceflight.esa.int/" width="650" height="400"></iframe>';
    
            updateISSMarker(lat, lon, name);
            updateISSPath(lat, lon); // Met à jour la trajectoire
        } catch (error) {
            console.error('Erreur lors de la récupération des données ISS :', error);
        }
    }
    
    // Fonction qui crée ou met à jour le marqueur ISS avec l'icône personnalisée
    function updateISSMarker(lat, lon, name) {
        if (!issMarker) {
            // Si le marqueur n'existe pas, on le crée une seule fois
            issMarker = L.marker([lat, lon], { icon: issIcon }).addTo(map); // Création d'un marqueur avec l'icône personnalisée
            issMarker.bindPopup(name, {
                maxWidth: 'auto',
                minWidth: 0,
                autoPan: true,
                autoClose: false,
                closeOnClick: false,
                className: 'custom-popup' // optionnel pour styliser
              });

    } else {
            // Si le marqueur existe, on met juste à jour sa position
            issMarker.setLatLng([lat, lon]); // Déplacement du marqueur sans le recréer
        }
    }
    
    // Fonction qui met à jour la trajectoire de l'ISS
    function updateISSPath(lat, lon) {
        // Ajouter la nouvelle position à la trajectoire
        issPath.push([lat, lon]);
    
        // Si plus de 100 points, on supprime le plus ancien pour ne pas surcharger la carte
        if (issPath.length > 100) {
            issPath.shift(); // Enlève le premier élément (le plus ancien)
        }
    
        // Si la trajectoire existe déjà sur la carte, on la met à jour
        if (window.issPolyline) {
            window.issPolyline.setLatLngs(issPath);
        } else {
            // Si la trajectoire n'existe pas encore, on crée une nouvelle polyline
            window.issPolyline = L.polyline(issPath, { color: 'blue', weight: 4, opacity: 0.7 }).addTo(map);
        }
    }
    
    // Mettre à jour toutes les 5 secondes
    setInterval(updateISSLocation, 1000);
    updateISSLocation();



L.marker([46.929888, 1.8898402], {
    icon: L.icon({
        iconUrl: 'https://www.tdf.fr/wp-content/uploads/2022/02/TDF_LOGO_RVB_COULEUR-287x300.png',
        iconSize: [24, 24],
        iconAnchor: [12, 24],
    })
}).addTo(map)
    .bindPopup('<a href="https://www.tdf.fr/">TDF</a> main site at Issoudun.<br><br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/03issoudun_rideaux_E_nuit.JPG/220px-03issoudun_rideaux_E_nuit.JPG" width="100%" height="150">')


const markersData = [
    { lat: 46.928902, lng: 1.9154620, iconUrl: 'https://i1.sndcdn.com/artworks-KkdBHkNYcboVV6wN-g1qfbg-t500x500.jpg', minZoom: 13 },
    { lat: 46.931525, lng: 1.9265127, iconUrl: 'https://i1.sndcdn.com/artworks-KkdBHkNYcboVV6wN-g1qfbg-t500x500.jpg', minZoom: 13 },
    { lat: 46.944696, lng: 1.9093037, iconUrl: 'https://i1.sndcdn.com/artworks-KkdBHkNYcboVV6wN-g1qfbg-t500x500.jpg', minZoom: 13 },
    { lat: 46.942557, lng: 1.8992186, iconUrl: 'https://i1.sndcdn.com/artworks-KkdBHkNYcboVV6wN-g1qfbg-t500x500.jpg', minZoom: 13 },
    { lat: 46.944652, lng: 1.8885970, iconUrl: 'https://i1.sndcdn.com/artworks-KkdBHkNYcboVV6wN-g1qfbg-t500x500.jpg', minZoom: 13 },
    { lat: 46.959870, lng: 1.8896055, iconUrl: 'https://i1.sndcdn.com/artworks-KkdBHkNYcboVV6wN-g1qfbg-t500x500.jpg', minZoom: 13 },
    { lat: 46.959607, lng: 1.9088745, iconUrl: 'https://i1.sndcdn.com/artworks-KkdBHkNYcboVV6wN-g1qfbg-t500x500.jpg', minZoom: 13 },
    { lat: 46.956590, lng: 1.9191313, iconUrl: 'https://i1.sndcdn.com/artworks-KkdBHkNYcboVV6wN-g1qfbg-t500x500.jpg', minZoom: 13 },
    { lat: 46.952899, lng: 1.9286585, iconUrl: 'https://i1.sndcdn.com/artworks-KkdBHkNYcboVV6wN-g1qfbg-t500x500.jpg', minZoom: 13 },
    { lat: 46.965420, lng: 1.8626171, iconUrl: 'https://i1.sndcdn.com/artworks-KkdBHkNYcboVV6wN-g1qfbg-t500x500.jpg', minZoom: 13 },
    { lat: 46.951156, lng: 1.8846273, iconUrl: 'https://i1.sndcdn.com/artworks-KkdBHkNYcboVV6wN-g1qfbg-t500x500.jpg', minZoom: 13 },
    { lat: 46.952518, lng: 1.9394356, iconUrl: 'https://i1.sndcdn.com/artworks-KkdBHkNYcboVV6wN-g1qfbg-t500x500.jpg', minZoom: 13 },
];
  
  const markers = []; // Pour les suivre

  markersData.forEach(data => {
    const icon = L.icon({
      iconUrl: data.iconUrl,
      iconSize: [24, 24],
      iconAnchor: [12, 24],
    });
  
    const marker = L.marker([data.lat, data.lng], { icon }).bindTooltip('ALLISS Antenna').bindPopup('<a href="https://www.google.com/maps?q&layer=c&cbll=' + data.lat + ',' + data.lng + '">See the ALLISS Antenna on Google Maps.</a>').addTo(map);
    marker.minZoom = data.minZoom;
    markers.push(marker);
  });

  function updateMarkersVisibility() {
    const currentZoom = map.getZoom();
  
    markers.forEach(marker => {
      if (currentZoom >= marker.minZoom) {
        if (!map.hasLayer(marker)) map.addLayer(marker);
      } else {
        if (map.hasLayer(marker)) map.removeLayer(marker);
      }
    });
  }
  
  map.on('zoomend', updateMarkersVisibility);
  map.whenReady(updateMarkersVisibility); // pour le premier affichage
  
  async function kiwiload() {
    try {
      const response = await fetch("https://api.codetabs.com/v1/proxy/?quest=http://kiwisdr.com/.public/");
      const html = await response.text();
  
      // Crée un conteneur DOM temporaire pour parser le HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
  
      const entries = doc.querySelectorAll(".cl-entry");
  
      entries.forEach(entry => {
        const htmlBlock = entry.innerHTML;
  
        // Extraction via RegEx
        const gps = /<!--\s*gps=\(([^,]+),\s*([^)]+)\)\s*-->/.exec(htmlBlock);
        const name = /<!--\s*name=([^\n\r]+?)\s*-->/.exec(htmlBlock);
        const sdr_hw = /<!--\s*sdr_hw=([^\n\r]+?)\s*-->/.exec(htmlBlock);
        const users = /<!--\s*users=(\d+)\s*-->/.exec(htmlBlock);
        const users_max = /<!--\s*users_max=(\d+)\s*-->/.exec(htmlBlock);
        const loc = /<!--\s*loc=([^\n\r]+?)\s*-->/.exec(htmlBlock);
        const sw_version = /<!--\s*sw_version=([^\n\r]+?)\s*-->/.exec(htmlBlock);
        const antenna = /<!--\s*antenna=([^\n\r]+?)\s*-->/.exec(htmlBlock);
  
        const lat = gps ? parseFloat(gps[1]) : null;
        const lng = gps ? parseFloat(gps[2]) : null;
  
        const urlEl = entry.querySelector("a[href^='http']");
        const link = urlEl ? urlEl.getAttribute("href") : null;
  
        const imgEl = entry.querySelector("img.cl-avatar");
        const iconUrl = imgEl ? imgEl.getAttribute("src") : null;
  
        if (lat && lng && name && iconUrl) {
          // Définir une icône personnalisée pour chaque entrée
          const customIcon = L.icon({
            iconUrl: iconUrl.startsWith("http") ? iconUrl : "http://kiwisdr.com" + iconUrl,
            iconSize: [16, 16],
            iconAnchor: [12, 12],
            popupAnchor: [0, -12],
          });
  
          const popupContent = `
            <strong><a href="${link}" target="_blank">${name[1]}</a></strong><br>
            <em>${loc ? loc[1] : "?"}</em><br>
            Material: ${sdr_hw ? sdr_hw[1] : "?"}<br>
            Users: ${users ? users[1] : "?"}/${users_max ? users_max[1] : "?"}<br>
            Version: ${sw_version ? sw_version[1] : "?"}<br>
            Antenna: ${antenna ? antenna[1] : "?"}
          `;
  
          L.marker([lat, lng], { icon: kiwisdrIcon, alt: 'KiwiSDR Marker', bubblingMouseEvents: true, interactive: true}).bindTooltip(popupContent).bindPopup(popupContent).addTo(map);
        }
      });
    } catch (err) {
      console.error("Erreur lors du chargement des données SDR:", err);
    }
  }
  
  // Appel
  kiwiload();
  

  const noaaSatellites = {};
const predictionDuration = 110; // minutes

function updateSatellitePosition(satObj) {
  const now = new Date();
  const posVel = satellite.propagate(satObj.satrec, now);
  const gmst = satellite.gstime(now);
  const geo = satellite.eciToGeodetic(posVel.position, gmst);
  const lat = satellite.degreesLat(geo.latitude);
  const lon = satellite.degreesLong(geo.longitude);

  if (!satObj.marker) {
    satObj.marker = L.marker([lat, lon], { icon: noaaSatIcon }).addTo(map);
    satObj.marker.bindPopup(satObj.name);
    satObj.marker.on('click', () => {
        if (satObj.predictionPolyline) {
          map.removeLayer(satObj.predictionPolyline);
          satObj.predictionPolyline = null;
        } else {
          generatePredictionPath(satObj); // ça l'ajoute
        }
      });
      
  } else {
    satObj.marker.setLatLng([lat, lon]);
  }

  // Historique
  satObj.path.push([lat, lon]);
  if (satObj.path.length > 100) satObj.path.shift();

  if (!satObj.polyline) {
    satObj.polyline = L.polyline(satObj.path, { color: 'green', weight: 2 }).addTo(map);
  } else {
    satObj.polyline.setLatLngs(satObj.path);
  }
}

// Prédiction future
function generatePredictionPath(satObj) {
  const prediction = [];
  const now = new Date();

  for (let i = 0; i <= predictionDuration; i += 1) {
    const future = new Date(now.getTime() + i * 60000);
    const pos = satellite.propagate(satObj.satrec, future);
    const gmst = satellite.gstime(future);
    const geo = satellite.eciToGeodetic(pos.position, gmst);
    const lat = satellite.degreesLat(geo.latitude);
    const lon = satellite.degreesLong(geo.longitude);
    prediction.push([lat, lon]);
  }

  if (satObj.predictionPolyline) {
    satObj.predictionPolyline.setLatLngs(prediction);
  } else {
    satObj.predictionPolyline = L.polyline(prediction, {
      color: 'orange',
      dashArray: '5, 5',
      weight: 1.5,
      opacity: 0.8
    }).addTo(map);
  }
}

initNOAASatellites();async function initNOAASatellites() {
    try {
      const res = await fetch('https://celestrak.org/NORAD/elements/weather.txt');
      const text = await res.text();
  
      // Filtrer les lignes non vides
      const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
      for (let i = 0; i < lines.length - 2; i += 3) {
        const name = lines[i];
        const tle1 = lines[i + 1];
        const tle2 = lines[i + 2];
  
        if (!tle1.startsWith("1 ") || !tle2.startsWith("2 ")) {
          console.warn(`Skipping invalid TLE block at lines ${i + 1}-${i + 2}`);
          continue;
        }
  
        const satrec = satellite.twoline2satrec(tle1, tle2);
  
        noaaSatellites[name] = {
          name,
          satrec,
          marker: null,
          path: [],
          polyline: null,
          predictionPolyline: null
        };
      }
  
      console.log(`Loaded ${Object.keys(noaaSatellites).length} NOAA satellites`);
  
      setInterval(() => {
        for (const satName in noaaSatellites) {
          updateSatellitePosition(noaaSatellites[satName]);
        }
      }, 1000);
  
    } catch (err) {
      console.error('Erreur lors du chargement des TLE NOAA :', err);
    }
  }

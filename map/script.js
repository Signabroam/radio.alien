// Initialisation de la carte centrée sur Paris
var map = L.map('map').setView([42, 2], 2);
var popup = L.popup();


map.on('click', onMapClick);


function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
};

map.on('click', onMapClick);

// Exemples de marker : https://leafletjs.com/examples/quick-start/

// Définition des icônes personnalisées
var kiwisdrIcon = L.icon({
    iconUrl: 'https://lh6.googleusercontent.com/proxy/XxF3-F2dKSulH4ZiAXpaYOrdFEp4pu3wCFkxurZo0Z54YXztG-ExKFglO-OXXXvloNgzKDrKT06LSQCMaEap-iWHqny2V2NFbA',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

var autreIcon = L.icon({
    iconUrl: 'images/marker-icon-2x.png',
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
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/926/926501.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

var owrIcon = new L.Icon({
    iconUrl: 'images/images.png',
    iconSize: [30, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

function Cicon(lat, lng, popupContent, type) {
    var icon = (type === 'kiwisdr') ? kiwisdrIcon : (type === 'web888') ? web888Icon : (type === 'military') ? militaryIcon : (type === 'owr') ? owrIcon : autreIcon;
    L.marker([lat, lng], { icon: icon }).addTo(map)
        .bindPopup(popupContent)
        .openPopup();
}

// Ajout des marqueurs
Cicon(63.075000, 27.271000, 'KiwiSDR at Kuopio<br> <a href="http://kiwi-kuo.aprs.fi:8073/">http://kiwi-kuo.aprs.fi:8073</a>.', 'kiwisdr');
Cicon(63.075000, 27.270000, 'KiwiSDR at Vihti<br> <a href="http://kiwi-vih.aprs.fi:8073/">http://kiwi-vih.aprs.fi:8073</a>.', 'kiwisdr');
Cicon(60.475959, 22.136627, 'Web888 at Raisio<br> <a href="http://rha.proxy.rx-888.com:8073/">http://rha.proxy.rx-888.com:8073</a>.', 'web888');
Cicon(62.014939, 25.724482, 'Kiwisdr at KORPILAHTI 1<br> <a href="http://rha2sdr.ddns.net:8073/">http://rha2sdr.ddns.net:8073/</a>.', 'kiwisdr');
Cicon(62.014099, 25.720217, 'Kiwisdr at KORPILAHTI 2<br> <a href="http://rha2sdr.ddns.net:8074/">http://rha2sdr.ddns.net:8074/</a>.', 'kiwisdr');
Cicon(47.968810, 26.379005, 'KiwiSDR at Dorohoi<br> <a href="http://kiwisdr-dorohoi.ddns.net:8073/">http://kiwisdr-dorohoi.ddns.net:8073/</a>.', 'kiwisdr');
Cicon(44.869416, 0.835143, 'KiwiSDR at Tremolat 1<br> <a href="http://sdr.autreradioautreculture.com:8073/">http://sdr.autreradioautreculture.com:8073</a>.', 'kiwisdr');
Cicon(44.869416, 0.837143, 'KiwiSDR at Tremolat 2<br> <a href="http://sdr.autreradioautreculture.com:8074/">http://sdr.autreradioautreculture.com:8074</a>.', 'kiwisdr');
Cicon(43.50, -72.82, 'KiwiSDR at Shrewsbury<br> <a href="http://sdr.k1vl.com:8073/">http://sdr.k1vl.com:8073/</a>.', 'kiwisdr');
Cicon(51.611271, 45.990255, 'OpenWebRX at Saratov.<br><a href="http://websdr64.ru:8073/">http://websdr64.ru:8073/</a>.', 'owr');
Cicon(45.462362, 39.44809, 'OpenWebRX at Korenovsk.<br><a href="http://rusdr.ddns.net/">http://rusdr.ddns.net/</a>.', 'owr');
Cicon(45.292988, 41.048988, 'OpenWebRX at Grigoropolisskaya.<br><a href="https://sdr.ua6hdw.keenetic.link/">https://sdr.ua6hdw.keenetic.link/</a>.', 'owr');

Cicon(60.3116311, 30.2797395, '<a href="https://priyom.org/military-stations/russia/the-buzzer">UVB-76 transmitter Location</a><br><br><img src="https://www.numbers-stations.com/wp-content/uploads/The-Buzzer-UVB-76-Location-Road-View-Outside-of-St-Petersburg.webp" width="200" height="100">', 'military');
Cicon(47.2994444, 39.6736111, '<a href="https://priyom.org/military-stations/russia/the-pip">(not accurate) The PIP transmitter location</a>', 'military');
Cicon(47.2996085, 39.6746862, '<a href="https://priyom.org/military-stations/russia/the-squeaky-wheel">(not accurate) The Squealy Wheel transmitter location</a>', 'military');
Cicon(54.8249925, 31.8132469, '<a href="https://priyom.org/military-stations/russia/the-alarm">(almost accurate) The Alarm transmitter location</a>', 'military');
Cicon(54.8243392, 31.8137079, '<a href="https://priyom.org/military-stations/russia/the-air-horn">(almost accurate) The Air Horn transmitter location</a>', 'military');
Cicon(54.8226154, 31.8154299, '<a href="https://priyom.org/military-stations/russia/the-goose">(almost accurate) The Goose transmitter location</a>', 'military');
Cicon(56.0832275, 37.1101672, '<a href="https://priyom.org/military-stations/russia/the-buzzer">1992 - 2010 UVB-76 transmitter location</a><br><br><img src="https://i1.wp.com/qrv73.com/wp-content/uploads/2020/05/maxresdefault-1.jpg?fit=800%2C450&ssl=1" width="200" height="100">', 'military');
Cicon(55.4262114, 36.7087830, 'Naro Fominsk suspected UVB-76 location.', 'military');
Cicon(42.72678372091614, 23.159088733480612, 'UM04 "PROMRCh" transmitter location', 'military');
Cicon(35.446488983415385, 140.1852398121408, '<a href="https://web.archive.org/web/20200524075538/http://priyom.org/military-stations/japan/slot-machine">XSL/Slot Machines transmitter location.</a><br><br><img src="https://i.postimg.cc/vB332pPQ/XSL-The-Japanese-Slot-Machine-Antenna-View.png" width="100%" height="100">', 'military');


// Ajout du fond de carte (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors - <a href="">Request a location here!</a>'
}).addTo(map);

// Ajout d'un marqueur avec une popup

    L.circle([60.3116311, 30.2797395], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 250
    }).addTo(map)
    .bindPopup('UVB-76 Transmitter Site Area');

    L.marker([52.4294444, 20.8813889]).addTo(map)
    .bindPopup('<a href="https://priyom.org/number-stations/english/e11">E11 (Oblique) transmitter location</a>.<br><br><img src="https://i.ytimg.com/vi/Omiy0Leoat0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCpyS-P9QMBMEfNECbVGPfSdrmMpg" width="300" height="150">')
    .openPopup();

    L.marker([38.9721121, -76.924513]).addTo(map)
    .bindPopup('<a href="https://www.cpc.ncep.noaa.gov/">NOAA Center for Weather and Climate Prediction</a><br><br> <img src="https://www.hamqsl.com/solar101vhfpic.php" width="100%" height="100">')
    .openPopup();

    L.marker([22.8679204, -82.3347962]).addTo(map)
    .bindPopup('<a href="https://priyom.org/number-stations/digital/hm01">HM01</a>, <a href="https://priyom.org/number-stations/other/v02a">V02a</a>, <a href="https://priyom.org/number-stations/other/v02">V02</a> Number Stations transmitter site.')
    .openPopup();

    L.marker([46.7515385, 26.8561465]).addTo(map)
    .bindPopup('Radio Romania International - Galbeni HF transmitter site.')
    .openPopup();

    L.marker([44.6366254, 26.0739718]).addTo(map)
    .bindPopup('Radio Romania International - Sâftica HF transmitter site.')
    .openPopup();

    L.marker([44.7493389, 26.1028628]).addTo(map)
    .bindPopup('Radio Romania International - Tiganesti-Sâftica HF transmitter site.')
    .openPopup();

    L.marker([25.03584943026459, 121.0969072394112]).addTo(map)
    .bindPopup('<a href="https://priyom.org/number-stations/other/v13">V13 Number station transmitter site</a>.<br><br><img src="https://i.postimg.cc/c1pznN83/image.png" width="100%" height="100">')
    .openPopup();

    L.marker([40.6782963, -105.0466632]).addTo(map)
    .bindPopup('<a href="https://www.nist.gov/pml/time-and-frequency-division/time-distribution/radio-station-wwv">WWV/WWVH/WWVB transmitter site</a>.<br><br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdi6UkqqDymb7BGjTXKaSRMp8gLwwHBas6Cg&s" width="100%" height="100">')
    .openPopup();

    L.marker([45.29483124694043, -75.75784300053304]).addTo(map)
    .bindPopup('<a href="https://en.wikipedia.org/wiki/CHU_(radio_station)">CHU Canada transmitter site</a>.<br><br><img src="https://images.squarespace-cdn.com/content/v1/51a013dee4b0a2a2d2ef73e9/1539352270431-P5OAWUASJZ8P82BUQY3U/CHU+Canada+QSL+1.jpg " width="100%" height="100">')
    .openPopup();

    L.marker([46.9341, 1.8903]).addTo(map)
    .bindPopup('<a href="https://www.tdf.fr/">TDF</a> and <a href="https://www.rfi.fr/en/RFI">RFI</a> transmitters site at Issoudun.<br><br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/03issoudun_rideaux_E_nuit.JPG/220px-03issoudun_rideaux_E_nuit.JPG" width="100%" height="150">')
    .openPopup();

    L.marker([17.675075874567614, 103.20006763577238]).addTo(map)
    .bindPopup('R. Thailand, Voice of America transmitter site.')
    .openPopup();

    L.marker([47.183644469905325, 27.45627965582365]).addTo(map)
    .bindPopup('Radio Iasi HF transmitter site.')
    .openPopup();

    L.marker([54.91226494367779, -3.2786054508661464]).addTo(map)
    .bindPopup('MSF transmitter site.<br><br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Anthorn_array.jpg/1280px-Anthorn_array.jpg" width="100%" height="90">')
    .openPopup();

    L.marker([33.465674852770775, 130.17553039161365]).addTo(map)
    .bindPopup('JJY Time signal transmitter site Southern')
    .openPopup();

    L.marker([37.37244017672566, 140.84876564075654]).addTo(map)
    .bindPopup('JJY Time signal transmitter site Northern')
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

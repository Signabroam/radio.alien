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
    .bindPopup('<a href="../services/wiki/vulkan.html" target="_blank">Vulkan Military Radio Communication Base Area</a>');

    L.polygon([
        [60.317066, 30.298230],
        [60.316602, 30.296760],
        [60.314988, 30.297385],
        [60.314323, 30.298901],
        [60.313950, 30.307940],
        [60.313873, 30.309785],
        [60.314408, 30.318162],
        [60.315436, 30.319330],
        [60.320910, 30.323742],
        [60.321728, 30.322248],
        [60.322177, 30.321098],
        [60.322537, 30.319917],
        [60.319526, 30.316117],
        [60.317741, 30.309836]
    ]).addTo(map)
    .bindPopup('Kerro Military Command Base Area');

   // L.polygon([
   //     [60.300445, 30.277281],
   //     [60.298443, 30.279669],
   //     [60.298478, 30.280012],
   //     [60.299501, 30.278921],
   //     [60.299785, 30.279951],
   //     [60.299846, 30.280745],
   //     [60.300160, 30.281737],
   //     [60.300529, 30.281802],
   //     [60.300476, 30.280745],
   //     [60.300824, 30.280321],
   //     [60.300946, 30.278346],
   //     [60.300839, 30.278151],
   //     [60.300703, 30.278184],
   //     [60.300598, 30.277968],
   //     [60.300606, 30.277671]
   // ]).addTo(map)
   // .bindPopup('Kerro Military Command Base Area');

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

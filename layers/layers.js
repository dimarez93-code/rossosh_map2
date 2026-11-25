var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ras_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ras<br />\
    <img src="styles/legend/ras_1_0.png" /> 1<br />\
    <img src="styles/legend/ras_1_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ras_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [4401959.527891, 6474531.014111, 4409177.419725, 6484977.559049]
        })
    });

lyr_GoogleSatellite_0.setVisible(true);lyr_ras_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ras_1];

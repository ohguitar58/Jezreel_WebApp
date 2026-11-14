var size = 0;
var placement = 'point';

var style_Peaks_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "18px \'Noto Sans\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 4.0;
    var textAlign = 'left';
    var offsetX = 11;
    var offsetY = 4;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("label") !== null) {
        labelText = String(feature.get("label"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 13 + size, points: 3,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.6}), fill: new ol.style.Fill({color: 'rgba(101,67,33,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};

var size = 0;
var placement = 'point';

var style_Regionlabels_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelScale = Math.max(0.7, Math.min(1, 45/resolution));
    var labelFont = (18*labelScale).toFixed(1) + "px 'Noto Sans', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 4.0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("label") !== null) {
        labelText = String(feature.get("label"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 0.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(90,90,90,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};

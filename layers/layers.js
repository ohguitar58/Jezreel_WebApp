var wms_layers = [];

var format_JezreelValleylowlandcandidate_0 = new ol.format.GeoJSON();
var features_JezreelValleylowlandcandidate_0 = format_JezreelValleylowlandcandidate_0.readFeatures(json_JezreelValleylowlandcandidate_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JezreelValleylowlandcandidate_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JezreelValleylowlandcandidate_0.addFeatures(features_JezreelValleylowlandcandidate_0);
var lyr_JezreelValleylowlandcandidate_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JezreelValleylowlandcandidate_0, 
                style: style_JezreelValleylowlandcandidate_0,
                popuplayertitle: '이스르엘 골짜기 저지대 후보 / Jezreel Valley lowland candidate',
                interactive: false,
                title: '<img src="styles/legend/JezreelValleylowlandcandidate_0.png" /> 이스르엘 골짜기 저지대 후보 / Jezreel Valley lowland candidate'
            });
var format_KishonRiver_1 = new ol.format.GeoJSON();
var features_KishonRiver_1 = format_KishonRiver_1.readFeatures(json_KishonRiver_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KishonRiver_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KishonRiver_1.addFeatures(features_KishonRiver_1);
var lyr_KishonRiver_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KishonRiver_1, 
                style: style_KishonRiver_1,
                popuplayertitle: '기손강 / Kishon River',
                interactive: false,
                title: '<img src="styles/legend/KishonRiver_1.png" /> 기손강 / Kishon River'
            });
var format_StoryMapsites_2 = new ol.format.GeoJSON();
var features_StoryMapsites_2 = format_StoryMapsites_2.readFeatures(json_StoryMapsites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StoryMapsites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StoryMapsites_2.addFeatures(features_StoryMapsites_2);
var lyr_StoryMapsites_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StoryMapsites_2, 
                style: style_StoryMapsites_2,
                popuplayertitle: '스토리맵 장소 / StoryMap sites',
                interactive: true,
                title: '<img src="styles/legend/StoryMapsites_2.png" /> 스토리맵 장소 / StoryMap sites'
            });
var format_Peaks_3 = new ol.format.GeoJSON();
var features_Peaks_3 = format_Peaks_3.readFeatures(json_Peaks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peaks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peaks_3.addFeatures(features_Peaks_3);
var lyr_Peaks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peaks_3, 
                style: style_Peaks_3,
                popuplayertitle: '봉우리 / Peaks',
                interactive: true,
                title: '<img src="styles/legend/Peaks_3.png" /> 봉우리 / Peaks'
            });
var format_Regionlabels_4 = new ol.format.GeoJSON();
var features_Regionlabels_4 = format_Regionlabels_4.readFeatures(json_Regionlabels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regionlabels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regionlabels_4.addFeatures(features_Regionlabels_4);
var lyr_Regionlabels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regionlabels_4, 
                style: style_Regionlabels_4,
                popuplayertitle: '지역명 라벨 / Region labels',
                interactive: false,
                title: '지역명 라벨 / Region labels'
            });

lyr_JezreelValleylowlandcandidate_0.setVisible(true);lyr_KishonRiver_1.setVisible(true);lyr_StoryMapsites_2.setVisible(true);lyr_Peaks_3.setVisible(true);lyr_Regionlabels_4.setVisible(true);
var layersList = [lyr_JezreelValleylowlandcandidate_0,lyr_KishonRiver_1,lyr_StoryMapsites_2,lyr_Peaks_3,lyr_Regionlabels_4];
/* Charted Territory (Esri) vector basemap - added 2026-11-14, same patch as hosea-map (2026-11-09).
   Public Esri-owned style item, loaded live and anonymously: no API key, no ArcGIS item created.
   Attribution set on the source after style load. */
var lyr_ChartedTerritory_0 = new ol.layer.VectorTile({
    'title': 'Charted Territory (Esri)',
    'opacity': 1.000000,
    declutter: true
});
fetch('https://www.arcgis.com/sharing/rest/content/items/1c365daf37a744fbad748b67aa69dac8/resources/styles/root.json')
    .then(function (r) { return r.json(); })
    .then(function (style) {
        Object.keys(style.sources || {}).forEach(function (k) {
            var src = style.sources[k];
            delete src.url; // Esri's TileJSON serves relative tile URLs; use the absolute template instead
            src.tiles = ['https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/{z}/{y}/{x}.pbf'];
        });
        return olms.applyStyle(lyr_ChartedTerritory_0, style, 'esri');
    })
    .then(function () {
        var s = lyr_ChartedTerritory_0.getSource();
        if (s && s.setAttributions) {
            s.setAttributions('Powered by Esri &middot; &copy; Esri and its data providers');
        }
    });
lyr_ChartedTerritory_0.setVisible(true);
layersList.unshift(lyr_ChartedTerritory_0);

lyr_JezreelValleylowlandcandidate_0.set('fieldAliases', {'id': 'id', 'name_ko': 'name_ko', 'name_en': 'name_en', 'label': 'label', 'area_km2_net': 'area_km2_net', 'area_km2_exterior': 'area_km2_exterior', 'area_km2_west_triangle': 'area_km2_west_triangle', 'threshold_m': 'threshold_m', 'method': 'method', 'area_note': 'area_note', 'editorial_note': 'editorial_note', 'caveat': 'caveat', 'source': 'source', 'scope_sources': 'scope_sources', });
lyr_KishonRiver_1.set('fieldAliases', {'name_en': 'name_en', 'name_he': 'name_he', 'name_ko': 'name_ko', 'source': 'source', 'note': 'note', });
lyr_StoryMapsites_2.set('fieldAliases', {'id': 'id', 'name_ko': 'name_ko', 'name_en': 'name_en', 'label': 'label', 'note': 'note', 'source': 'source', 'popup_desc': 'popup_desc', });
lyr_Peaks_3.set('fieldAliases', {'id': 'id', 'name_ko': 'name_ko', 'name_en': 'name_en', 'label': 'label', 'ele_m': 'ele_m', 'source': 'source', 'popup_desc': 'popup_desc', });
lyr_Regionlabels_4.set('fieldAliases', {'id': 'id', 'name_ko': 'name_ko', 'name_en': 'name_en', 'label': 'label', 'note': 'note', });
lyr_JezreelValleylowlandcandidate_0.set('fieldImages', {'id': '', 'name_ko': '', 'name_en': '', 'label': '', 'area_km2_net': '', 'area_km2_exterior': '', 'area_km2_west_triangle': '', 'threshold_m': '', 'method': '', 'area_note': '', 'editorial_note': '', 'caveat': '', 'source': '', 'scope_sources': '', });
lyr_KishonRiver_1.set('fieldImages', {'name_en': '', 'name_he': '', 'name_ko': '', 'source': '', 'note': '', });
lyr_StoryMapsites_2.set('fieldImages', {'id': 'Hidden', 'name_ko': 'Hidden', 'name_en': 'Hidden', 'label': 'TextEdit', 'note': 'Hidden', 'source': 'Hidden', 'popup_desc': 'TextEdit', });
lyr_Peaks_3.set('fieldImages', {'id': 'Hidden', 'name_ko': 'Hidden', 'name_en': 'Hidden', 'label': 'TextEdit', 'ele_m': 'Hidden', 'source': 'Hidden', 'popup_desc': 'TextEdit', });
lyr_Regionlabels_4.set('fieldImages', {'id': '', 'name_ko': '', 'name_en': '', 'label': '', 'note': '', });
lyr_JezreelValleylowlandcandidate_0.set('fieldLabels', {'id': 'no label', 'name_ko': 'no label', 'name_en': 'no label', 'label': 'no label', 'area_km2_net': 'no label', 'area_km2_exterior': 'no label', 'area_km2_west_triangle': 'no label', 'threshold_m': 'no label', 'method': 'no label', 'area_note': 'no label', 'editorial_note': 'no label', 'caveat': 'no label', 'source': 'no label', 'scope_sources': 'no label', });
lyr_KishonRiver_1.set('fieldLabels', {'name_en': 'no label', 'name_he': 'no label', 'name_ko': 'no label', 'source': 'no label', 'note': 'no label', });
lyr_StoryMapsites_2.set('fieldLabels', {'label': 'no label', 'popup_desc': 'no label', });
lyr_Peaks_3.set('fieldLabels', {'label': 'no label', 'popup_desc': 'no label', });
lyr_Regionlabels_4.set('fieldLabels', {'id': 'no label', 'name_ko': 'no label', 'name_en': 'no label', 'label': 'no label', 'note': 'no label', });
lyr_Regionlabels_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

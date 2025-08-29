var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_DEM_CDMX_hill_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM_CDMX_hill<br />\
    <img src="styles/legend/DEM_CDMX_hill_1_0.png" /> 1<br />\
    <img src="styles/legend/DEM_CDMX_hill_1_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_CDMX_hill_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11061387.553500, 2160573.294894, -11013962.378972, 2224900.378034]
        })
    });
var lyr_DEM_CDMX_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM_CDMX<br />\
    <img src="styles/legend/DEM_CDMX_2_0.png" /> 2214<br />\
    <img src="styles/legend/DEM_CDMX_2_1.png" /> 2556<br />\
    <img src="styles/legend/DEM_CDMX_2_2.png" /> 2898<br />\
    <img src="styles/legend/DEM_CDMX_2_3.png" /> 3240<br />\
    <img src="styles/legend/DEM_CDMX_2_4.png" /> 3582<br />\
    <img src="styles/legend/DEM_CDMX_2_5.png" /> 3924<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_CDMX_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11061387.553500, 2160573.294894, -11013962.378972, 2224900.378034]
        })
    });
var format_CurvasMaestras_100m_3 = new ol.format.GeoJSON();
var features_CurvasMaestras_100m_3 = format_CurvasMaestras_100m_3.readFeatures(json_CurvasMaestras_100m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurvasMaestras_100m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurvasMaestras_100m_3.addFeatures(features_CurvasMaestras_100m_3);
var lyr_CurvasMaestras_100m_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurvasMaestras_100m_3, 
                style: style_CurvasMaestras_100m_3,
                popuplayertitle: 'CurvasMaestras_100m',
                interactive: true,
                title: '<img src="styles/legend/CurvasMaestras_100m_3.png" /> CurvasMaestras_100m'
            });
var format_Alcaldias_CDMX_4 = new ol.format.GeoJSON();
var features_Alcaldias_CDMX_4 = format_Alcaldias_CDMX_4.readFeatures(json_Alcaldias_CDMX_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alcaldias_CDMX_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alcaldias_CDMX_4.addFeatures(features_Alcaldias_CDMX_4);
var lyr_Alcaldias_CDMX_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alcaldias_CDMX_4, 
                style: style_Alcaldias_CDMX_4,
                popuplayertitle: 'Alcaldias_CDMX',
                interactive: true,
                title: '<img src="styles/legend/Alcaldias_CDMX_4.png" /> Alcaldias_CDMX'
            });
var format_RedHidro_CDMX_5 = new ol.format.GeoJSON();
var features_RedHidro_CDMX_5 = format_RedHidro_CDMX_5.readFeatures(json_RedHidro_CDMX_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedHidro_CDMX_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedHidro_CDMX_5.addFeatures(features_RedHidro_CDMX_5);
var lyr_RedHidro_CDMX_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedHidro_CDMX_5, 
                style: style_RedHidro_CDMX_5,
                popuplayertitle: 'RedHidro_CDMX',
                interactive: true,
    title: 'RedHidro_CDMX<br />\
    <img src="styles/legend/RedHidro_CDMX_5_0.png" /> -1<br />\
    <img src="styles/legend/RedHidro_CDMX_5_1.png" /> 1<br />\
    <img src="styles/legend/RedHidro_CDMX_5_2.png" /> 2<br />\
    <img src="styles/legend/RedHidro_CDMX_5_3.png" /> 3<br />\
    <img src="styles/legend/RedHidro_CDMX_5_4.png" /> 4<br />\
    <img src="styles/legend/RedHidro_CDMX_5_5.png" /> 5<br />\
    <img src="styles/legend/RedHidro_CDMX_5_6.png" /> 6<br />\
    <img src="styles/legend/RedHidro_CDMX_5_7.png" /> 7<br />' });
var format_Estatal_CDMX_6 = new ol.format.GeoJSON();
var features_Estatal_CDMX_6 = format_Estatal_CDMX_6.readFeatures(json_Estatal_CDMX_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estatal_CDMX_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estatal_CDMX_6.addFeatures(features_Estatal_CDMX_6);
var lyr_Estatal_CDMX_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estatal_CDMX_6, 
                style: style_Estatal_CDMX_6,
                popuplayertitle: 'Estatal_CDMX',
                interactive: true,
                title: '<img src="styles/legend/Estatal_CDMX_6.png" /> Estatal_CDMX'
            });
var format_Lago1519_CDMX_7 = new ol.format.GeoJSON();
var features_Lago1519_CDMX_7 = format_Lago1519_CDMX_7.readFeatures(json_Lago1519_CDMX_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lago1519_CDMX_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lago1519_CDMX_7.addFeatures(features_Lago1519_CDMX_7);
var lyr_Lago1519_CDMX_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lago1519_CDMX_7, 
                style: style_Lago1519_CDMX_7,
                popuplayertitle: 'Lago1519_CDMX',
                interactive: true,
                title: '<img src="styles/legend/Lago1519_CDMX_7.png" /> Lago1519_CDMX'
            });
var format_Elevaciones_CDMX_8 = new ol.format.GeoJSON();
var features_Elevaciones_CDMX_8 = format_Elevaciones_CDMX_8.readFeatures(json_Elevaciones_CDMX_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elevaciones_CDMX_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elevaciones_CDMX_8.addFeatures(features_Elevaciones_CDMX_8);
var lyr_Elevaciones_CDMX_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elevaciones_CDMX_8, 
                style: style_Elevaciones_CDMX_8,
                popuplayertitle: 'Elevaciones_CDMX',
                interactive: true,
                title: '<img src="styles/legend/Elevaciones_CDMX_8.png" /> Elevaciones_CDMX'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_DEM_CDMX_hill_1.setVisible(true);lyr_DEM_CDMX_2.setVisible(true);lyr_CurvasMaestras_100m_3.setVisible(true);lyr_Alcaldias_CDMX_4.setVisible(true);lyr_RedHidro_CDMX_5.setVisible(true);lyr_Estatal_CDMX_6.setVisible(true);lyr_Lago1519_CDMX_7.setVisible(true);lyr_Elevaciones_CDMX_8.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_DEM_CDMX_hill_1,lyr_DEM_CDMX_2,lyr_CurvasMaestras_100m_3,lyr_Alcaldias_CDMX_4,lyr_RedHidro_CDMX_5,lyr_Estatal_CDMX_6,lyr_Lago1519_CDMX_7,lyr_Elevaciones_CDMX_8];
lyr_CurvasMaestras_100m_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Alcaldias_CDMX_4.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'NOM_ENT': 'NOM_ENT', 'POB1': 'POB1', 'ALCALDIA': 'ALCALDIA', });
lyr_RedHidro_CDMX_5.set('fieldAliases', {'id': 'id', 'entidad': 'entidad', 'condicion': 'condicion', 'lengthm': 'lengthm', 'order_1': 'order_1', 'level_1': 'level_1', });
lyr_Estatal_CDMX_6.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'NOM_ENT': 'NOM_ENT', 'NOM_MUN': 'NOM_MUN', 'POB1': 'POB1', 'POB2': 'POB2', 'POB2_R': 'POB2_R', 'POB3': 'POB3', 'POB3_R': 'POB3_R', 'POB4': 'POB4', 'POB4_R': 'POB4_R', 'POB5': 'POB5', 'POB5_R': 'POB5_R', 'POB6': 'POB6', 'POB6_R': 'POB6_R', 'POB7': 'POB7', 'POB7_R': 'POB7_R', 'POB8': 'POB8', 'POB8_R': 'POB8_R', 'POB9': 'POB9', 'POB9_R': 'POB9_R', 'POB10': 'POB10', 'POB10_R': 'POB10_R', 'POB11': 'POB11', 'POB11_R': 'POB11_R', 'POB12': 'POB12', 'POB12_R': 'POB12_R', 'POB13': 'POB13', 'POB13_R': 'POB13_R', 'POB14': 'POB14', 'POB14_R': 'POB14_R', 'POB15': 'POB15', 'POB15_R': 'POB15_R', 'POB16': 'POB16', 'POB16_R': 'POB16_R', 'POB17': 'POB17', 'POB17_R': 'POB17_R', 'POB18': 'POB18', 'POB18_R': 'POB18_R', 'POB19': 'POB19', 'POB19_R': 'POB19_R', 'POB20': 'POB20', 'POB20_R': 'POB20_R', 'POB21': 'POB21', 'POB21_R': 'POB21_R', 'POB22': 'POB22', 'POB22_R': 'POB22_R', 'POB23': 'POB23', 'POB23_R': 'POB23_R', 'POB24': 'POB24', 'POB24_R': 'POB24_R', 'POB25': 'POB25', 'POB25_R': 'POB25_R', 'POB26_R': 'POB26_R', 'POB27_R': 'POB27_R', 'POB28_R': 'POB28_R', 'POB29_R': 'POB29_R', 'POB30_R': 'POB30_R', 'POB31': 'POB31', 'POB31_R': 'POB31_R', 'POB32': 'POB32', 'POB32_R': 'POB32_R', 'POB33': 'POB33', 'POB33_R': 'POB33_R', 'POB34': 'POB34', 'POB34_R': 'POB34_R', 'POB35': 'POB35', 'POB35_R': 'POB35_R', 'POB36': 'POB36', 'POB36_R': 'POB36_R', 'POB37': 'POB37', 'POB37_R': 'POB37_R', 'POB38': 'POB38', 'POB38_R': 'POB38_R', 'POB39': 'POB39', 'POB39_R': 'POB39_R', 'POB40': 'POB40', 'POB40_R': 'POB40_R', 'POB41': 'POB41', 'POB41_R': 'POB41_R', 'POB42': 'POB42', 'POB42_R': 'POB42_R', 'POB43': 'POB43', 'POB43_R': 'POB43_R', 'POB44': 'POB44', 'POB44_R': 'POB44_R', 'POB45': 'POB45', 'POB45_R': 'POB45_R', 'POB46': 'POB46', 'POB46_R': 'POB46_R', 'POB47': 'POB47', 'POB47_R': 'POB47_R', 'POB48': 'POB48', 'POB48_R': 'POB48_R', 'POB49': 'POB49', 'POB49_R': 'POB49_R', 'POB50': 'POB50', 'POB50_R': 'POB50_R', 'POB51': 'POB51', 'POB51_R': 'POB51_R', 'POB52': 'POB52', 'POB52_R': 'POB52_R', 'POB53': 'POB53', 'POB53_R': 'POB53_R', 'POB54': 'POB54', 'POB54_R': 'POB54_R', 'POB55': 'POB55', 'POB55_R': 'POB55_R', 'POB56': 'POB56', 'POB56_R': 'POB56_R', 'POB57': 'POB57', 'POB57_R': 'POB57_R', 'POB58': 'POB58', 'POB58_R': 'POB58_R', 'POB59': 'POB59', 'POB59_R': 'POB59_R', 'POB60': 'POB60', 'POB60_R': 'POB60_R', 'POB61': 'POB61', 'POB61_R': 'POB61_R', 'POB62': 'POB62', 'POB62_R': 'POB62_R', 'POB63': 'POB63', 'POB63_R': 'POB63_R', 'POB64': 'POB64', 'POB64_R': 'POB64_R', 'POB65': 'POB65', 'POB65_R': 'POB65_R', 'POB66': 'POB66', 'POB66_R': 'POB66_R', 'POB67': 'POB67', 'POB67_R': 'POB67_R', 'POB68': 'POB68', 'POB68_R': 'POB68_R', 'POB69': 'POB69', 'POB69_R': 'POB69_R', 'POB70': 'POB70', 'POB70_R': 'POB70_R', 'POB71': 'POB71', 'POB71_R': 'POB71_R', 'POB72': 'POB72', 'POB72_R': 'POB72_R', 'POB73': 'POB73', 'POB73_R': 'POB73_R', 'POB74': 'POB74', 'POB74_R': 'POB74_R', 'POB75': 'POB75', 'POB75_R': 'POB75_R', 'POB76': 'POB76', 'POB76_R': 'POB76_R', 'POB77': 'POB77', 'POB77_R': 'POB77_R', 'POB78': 'POB78', 'POB78_R': 'POB78_R', 'POB79': 'POB79', 'POB79_R': 'POB79_R', 'POB80': 'POB80', 'POB80_R': 'POB80_R', 'POB81': 'POB81', 'POB81_R': 'POB81_R', 'OID_1': 'OID_1', });
lyr_Lago1519_CDMX_7.set('fieldAliases', {'ID': 'ID', 'Nombre': 'Nombre', });
lyr_Elevaciones_CDMX_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NOMBRE': 'NOMBRE', 'Clasificac': 'Clasificac', 'X': 'X', 'Y': 'Y', });
lyr_CurvasMaestras_100m_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Alcaldias_CDMX_4.set('fieldImages', {'CVEGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'POB1': 'TextEdit', 'ALCALDIA': 'TextEdit', });
lyr_RedHidro_CDMX_5.set('fieldImages', {'id': 'Range', 'entidad': 'TextEdit', 'condicion': 'TextEdit', 'lengthm': 'TextEdit', 'order_1': 'Range', 'level_1': 'Range', });
lyr_Estatal_CDMX_6.set('fieldImages', {'CVEGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'NOM_MUN': 'TextEdit', 'POB1': 'TextEdit', 'POB2': 'TextEdit', 'POB2_R': 'TextEdit', 'POB3': 'TextEdit', 'POB3_R': 'TextEdit', 'POB4': 'TextEdit', 'POB4_R': 'TextEdit', 'POB5': 'TextEdit', 'POB5_R': 'TextEdit', 'POB6': 'TextEdit', 'POB6_R': 'TextEdit', 'POB7': 'TextEdit', 'POB7_R': 'TextEdit', 'POB8': 'TextEdit', 'POB8_R': 'TextEdit', 'POB9': 'TextEdit', 'POB9_R': 'TextEdit', 'POB10': 'TextEdit', 'POB10_R': 'TextEdit', 'POB11': 'TextEdit', 'POB11_R': 'TextEdit', 'POB12': 'TextEdit', 'POB12_R': 'TextEdit', 'POB13': 'TextEdit', 'POB13_R': 'TextEdit', 'POB14': 'TextEdit', 'POB14_R': 'TextEdit', 'POB15': 'TextEdit', 'POB15_R': 'TextEdit', 'POB16': 'TextEdit', 'POB16_R': 'TextEdit', 'POB17': 'TextEdit', 'POB17_R': 'TextEdit', 'POB18': 'TextEdit', 'POB18_R': 'TextEdit', 'POB19': 'TextEdit', 'POB19_R': 'TextEdit', 'POB20': 'TextEdit', 'POB20_R': 'TextEdit', 'POB21': 'TextEdit', 'POB21_R': 'TextEdit', 'POB22': 'TextEdit', 'POB22_R': 'TextEdit', 'POB23': 'TextEdit', 'POB23_R': 'TextEdit', 'POB24': 'TextEdit', 'POB24_R': 'TextEdit', 'POB25': 'TextEdit', 'POB25_R': 'TextEdit', 'POB26_R': 'TextEdit', 'POB27_R': 'TextEdit', 'POB28_R': 'TextEdit', 'POB29_R': 'TextEdit', 'POB30_R': 'TextEdit', 'POB31': 'TextEdit', 'POB31_R': 'TextEdit', 'POB32': 'TextEdit', 'POB32_R': 'TextEdit', 'POB33': 'TextEdit', 'POB33_R': 'TextEdit', 'POB34': 'TextEdit', 'POB34_R': 'TextEdit', 'POB35': 'TextEdit', 'POB35_R': 'TextEdit', 'POB36': 'TextEdit', 'POB36_R': 'TextEdit', 'POB37': 'TextEdit', 'POB37_R': 'TextEdit', 'POB38': 'TextEdit', 'POB38_R': 'TextEdit', 'POB39': 'TextEdit', 'POB39_R': 'TextEdit', 'POB40': 'TextEdit', 'POB40_R': 'TextEdit', 'POB41': 'TextEdit', 'POB41_R': 'TextEdit', 'POB42': 'TextEdit', 'POB42_R': 'TextEdit', 'POB43': 'TextEdit', 'POB43_R': 'TextEdit', 'POB44': 'TextEdit', 'POB44_R': 'TextEdit', 'POB45': 'TextEdit', 'POB45_R': 'TextEdit', 'POB46': 'TextEdit', 'POB46_R': 'TextEdit', 'POB47': 'TextEdit', 'POB47_R': 'TextEdit', 'POB48': 'TextEdit', 'POB48_R': 'TextEdit', 'POB49': 'TextEdit', 'POB49_R': 'TextEdit', 'POB50': 'TextEdit', 'POB50_R': 'TextEdit', 'POB51': 'TextEdit', 'POB51_R': 'TextEdit', 'POB52': 'TextEdit', 'POB52_R': 'TextEdit', 'POB53': 'TextEdit', 'POB53_R': 'TextEdit', 'POB54': 'TextEdit', 'POB54_R': 'TextEdit', 'POB55': 'TextEdit', 'POB55_R': 'TextEdit', 'POB56': 'TextEdit', 'POB56_R': 'TextEdit', 'POB57': 'TextEdit', 'POB57_R': 'TextEdit', 'POB58': 'TextEdit', 'POB58_R': 'TextEdit', 'POB59': 'TextEdit', 'POB59_R': 'TextEdit', 'POB60': 'TextEdit', 'POB60_R': 'TextEdit', 'POB61': 'TextEdit', 'POB61_R': 'TextEdit', 'POB62': 'TextEdit', 'POB62_R': 'TextEdit', 'POB63': 'TextEdit', 'POB63_R': 'TextEdit', 'POB64': 'TextEdit', 'POB64_R': 'TextEdit', 'POB65': 'TextEdit', 'POB65_R': 'TextEdit', 'POB66': 'TextEdit', 'POB66_R': 'TextEdit', 'POB67': 'TextEdit', 'POB67_R': 'TextEdit', 'POB68': 'TextEdit', 'POB68_R': 'TextEdit', 'POB69': 'TextEdit', 'POB69_R': 'TextEdit', 'POB70': 'TextEdit', 'POB70_R': 'TextEdit', 'POB71': 'TextEdit', 'POB71_R': 'TextEdit', 'POB72': 'TextEdit', 'POB72_R': 'TextEdit', 'POB73': 'TextEdit', 'POB73_R': 'TextEdit', 'POB74': 'TextEdit', 'POB74_R': 'TextEdit', 'POB75': 'TextEdit', 'POB75_R': 'TextEdit', 'POB76': 'TextEdit', 'POB76_R': 'TextEdit', 'POB77': 'TextEdit', 'POB77_R': 'TextEdit', 'POB78': 'TextEdit', 'POB78_R': 'TextEdit', 'POB79': 'TextEdit', 'POB79_R': 'TextEdit', 'POB80': 'TextEdit', 'POB80_R': 'TextEdit', 'POB81': 'TextEdit', 'POB81_R': 'TextEdit', 'OID_1': 'TextEdit', });
lyr_Lago1519_CDMX_7.set('fieldImages', {'ID': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Elevaciones_CDMX_8.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'Clasificac': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_CurvasMaestras_100m_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_Alcaldias_CDMX_4.set('fieldLabels', {'CVEGEO': 'no label', 'NOM_ENT': 'no label', 'POB1': 'no label', 'ALCALDIA': 'no label', });
lyr_RedHidro_CDMX_5.set('fieldLabels', {'id': 'no label', 'entidad': 'no label', 'condicion': 'no label', 'lengthm': 'no label', 'order_1': 'no label', 'level_1': 'no label', });
lyr_Estatal_CDMX_6.set('fieldLabels', {'CVEGEO': 'no label', 'NOM_ENT': 'no label', 'NOM_MUN': 'no label', 'POB1': 'no label', 'POB2': 'no label', 'POB2_R': 'no label', 'POB3': 'no label', 'POB3_R': 'no label', 'POB4': 'no label', 'POB4_R': 'no label', 'POB5': 'no label', 'POB5_R': 'no label', 'POB6': 'no label', 'POB6_R': 'no label', 'POB7': 'no label', 'POB7_R': 'no label', 'POB8': 'no label', 'POB8_R': 'no label', 'POB9': 'no label', 'POB9_R': 'no label', 'POB10': 'no label', 'POB10_R': 'no label', 'POB11': 'no label', 'POB11_R': 'no label', 'POB12': 'no label', 'POB12_R': 'no label', 'POB13': 'no label', 'POB13_R': 'no label', 'POB14': 'no label', 'POB14_R': 'no label', 'POB15': 'no label', 'POB15_R': 'no label', 'POB16': 'no label', 'POB16_R': 'no label', 'POB17': 'no label', 'POB17_R': 'no label', 'POB18': 'no label', 'POB18_R': 'no label', 'POB19': 'no label', 'POB19_R': 'no label', 'POB20': 'no label', 'POB20_R': 'no label', 'POB21': 'no label', 'POB21_R': 'no label', 'POB22': 'no label', 'POB22_R': 'no label', 'POB23': 'no label', 'POB23_R': 'no label', 'POB24': 'no label', 'POB24_R': 'no label', 'POB25': 'no label', 'POB25_R': 'no label', 'POB26_R': 'no label', 'POB27_R': 'no label', 'POB28_R': 'no label', 'POB29_R': 'no label', 'POB30_R': 'no label', 'POB31': 'no label', 'POB31_R': 'no label', 'POB32': 'no label', 'POB32_R': 'no label', 'POB33': 'no label', 'POB33_R': 'no label', 'POB34': 'no label', 'POB34_R': 'no label', 'POB35': 'no label', 'POB35_R': 'no label', 'POB36': 'no label', 'POB36_R': 'no label', 'POB37': 'no label', 'POB37_R': 'no label', 'POB38': 'no label', 'POB38_R': 'no label', 'POB39': 'no label', 'POB39_R': 'no label', 'POB40': 'no label', 'POB40_R': 'no label', 'POB41': 'no label', 'POB41_R': 'no label', 'POB42': 'no label', 'POB42_R': 'no label', 'POB43': 'no label', 'POB43_R': 'no label', 'POB44': 'no label', 'POB44_R': 'no label', 'POB45': 'no label', 'POB45_R': 'no label', 'POB46': 'no label', 'POB46_R': 'no label', 'POB47': 'no label', 'POB47_R': 'no label', 'POB48': 'no label', 'POB48_R': 'no label', 'POB49': 'no label', 'POB49_R': 'no label', 'POB50': 'no label', 'POB50_R': 'no label', 'POB51': 'no label', 'POB51_R': 'no label', 'POB52': 'no label', 'POB52_R': 'no label', 'POB53': 'no label', 'POB53_R': 'no label', 'POB54': 'no label', 'POB54_R': 'no label', 'POB55': 'no label', 'POB55_R': 'no label', 'POB56': 'no label', 'POB56_R': 'no label', 'POB57': 'no label', 'POB57_R': 'no label', 'POB58': 'no label', 'POB58_R': 'no label', 'POB59': 'no label', 'POB59_R': 'no label', 'POB60': 'no label', 'POB60_R': 'no label', 'POB61': 'no label', 'POB61_R': 'no label', 'POB62': 'no label', 'POB62_R': 'no label', 'POB63': 'no label', 'POB63_R': 'no label', 'POB64': 'no label', 'POB64_R': 'no label', 'POB65': 'no label', 'POB65_R': 'no label', 'POB66': 'no label', 'POB66_R': 'no label', 'POB67': 'no label', 'POB67_R': 'no label', 'POB68': 'no label', 'POB68_R': 'no label', 'POB69': 'no label', 'POB69_R': 'no label', 'POB70': 'no label', 'POB70_R': 'no label', 'POB71': 'no label', 'POB71_R': 'no label', 'POB72': 'no label', 'POB72_R': 'no label', 'POB73': 'no label', 'POB73_R': 'no label', 'POB74': 'no label', 'POB74_R': 'no label', 'POB75': 'no label', 'POB75_R': 'no label', 'POB76': 'no label', 'POB76_R': 'no label', 'POB77': 'no label', 'POB77_R': 'no label', 'POB78': 'no label', 'POB78_R': 'no label', 'POB79': 'no label', 'POB79_R': 'no label', 'POB80': 'no label', 'POB80_R': 'no label', 'POB81': 'no label', 'POB81_R': 'no label', 'OID_1': 'no label', });
lyr_Lago1519_CDMX_7.set('fieldLabels', {'ID': 'no label', 'Nombre': 'no label', });
lyr_Elevaciones_CDMX_8.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'NOMBRE': 'no label', 'Clasificac': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Elevaciones_CDMX_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
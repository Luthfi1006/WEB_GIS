ol.proj.get("EPSG:4326").setExtent([109.183361, -7.249712, 110.138559, -6.743911]);
var wms_layers = [];

        var lyr_Perbandingan_0 = new ol.layer.Tile({
            'title': 'Perbandingan_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Peta_Penduduk_1 = new ol.format.GeoJSON();
var features_Peta_Penduduk_1 = format_Peta_Penduduk_1.readFeatures(json_Peta_Penduduk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Peta_Penduduk_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Peta_Penduduk_1.addFeatures(features_Peta_Penduduk_1);var lyr_Peta_Penduduk_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_Penduduk_1, 
                style: style_Peta_Penduduk_1,
    title: 'Peta_Penduduk<br />\
    <img src="styles/legend/Peta_Penduduk_1_0.png" />  185 - 199 <br />\
    <img src="styles/legend/Peta_Penduduk_1_1.png" />  199 - 1106 <br />\
    <img src="styles/legend/Peta_Penduduk_1_2.png" />  1106 - 2119 <br />\
    <img src="styles/legend/Peta_Penduduk_1_3.png" />  2119 - 2937 <br />\
    <img src="styles/legend/Peta_Penduduk_1_4.png" />  2937 - 5095 <br />'
        });var format_Peta_Murid_2 = new ol.format.GeoJSON();
var features_Peta_Murid_2 = format_Peta_Murid_2.readFeatures(json_Peta_Murid_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Peta_Murid_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Peta_Murid_2.addFeatures(features_Peta_Murid_2);var lyr_Peta_Murid_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_Murid_2, 
                style: style_Peta_Murid_2,
    title: 'Peta_Murid<br />\
    <img src="styles/legend/Peta_Murid_2_0.png" />  330 - 487 <br />\
    <img src="styles/legend/Peta_Murid_2_1.png" />  487 - 1205 <br />\
    <img src="styles/legend/Peta_Murid_2_2.png" />  1205 - 1961 <br />\
    <img src="styles/legend/Peta_Murid_2_3.png" />  1961 - 2583 <br />\
    <img src="styles/legend/Peta_Murid_2_4.png" />  2583 - 3524 <br />'
        });

lyr_Perbandingan_0.setVisible(true);lyr_Peta_Penduduk_1.setVisible(true);lyr_Peta_Murid_2.setVisible(true);
var layersList = [lyr_Perbandingan_0,lyr_Peta_Penduduk_1,lyr_Peta_Murid_2];
lyr_Peta_Penduduk_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LasSync': 'LasSync', 'Kepadatan': 'Kepadatan', 'murid': 'murid', 'Murid_2024': 'Murid_2024', 'Kepadatan_penduduk_Kepadatan_2024': 'Kepadatan_penduduk_Kepadatan_2024', 'siswa_smp_sederajat_Jumlah_Murid': 'siswa_smp_sederajat_Jumlah_Murid', });
lyr_Peta_Murid_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LasSync': 'LasSync', 'Kepadatan': 'Kepadatan', 'murid': 'murid', 'Kepadatan_': 'Kepadatan_', 'siswa_smp_': 'siswa_smp_', });
lyr_Peta_Penduduk_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LasSync': 'TextEdit', 'Kepadatan': 'TextEdit', 'murid': 'TextEdit', 'Murid_2024': 'TextEdit', 'Kepadatan_penduduk_Kepadatan_2024': 'TextEdit', 'siswa_smp_sederajat_Jumlah_Murid': 'TextEdit', });
lyr_Peta_Murid_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LasSync': 'TextEdit', 'Kepadatan': 'TextEdit', 'murid': 'TextEdit', 'Kepadatan_': 'TextEdit', 'siswa_smp_': 'TextEdit', });
lyr_Peta_Penduduk_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LasSync': 'no label', 'Kepadatan': 'no label', 'murid': 'no label', 'Murid_2024': 'no label', 'Kepadatan_penduduk_Kepadatan_2024': 'no label', 'siswa_smp_sederajat_Jumlah_Murid': 'no label', });
lyr_Peta_Murid_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LasSync': 'no label', 'Kepadatan': 'no label', 'murid': 'no label', 'Kepadatan_': 'no label', 'siswa_smp_': 'no label', });
lyr_Peta_Murid_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
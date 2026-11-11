// Real data from Peta layer for Kabupaten Pekalongan
const kecamatanData = [
    {name: 'Kandangserang', kepadatan: 614, murid: 1050},
    {name: 'Paninggaran', kepadatan: 483, murid: 1020},
    {name: 'Lebakbarang', kepadatan: 199, murid: 402},
    {name: 'Petungkriyono', kepadatan: 185, murid: 381},
    {name: 'Talun', kepadatan: 560, murid: 483},
    {name: 'Doro', kepadatan: 709, murid: 1058},
    {name: 'Karanganyar', kepadatan: 773, murid: 1154},
    {name: 'Kajen', kepadatan: 1056, murid: 3152},
    {name: 'Kesesi', kepadatan: 1106, murid: 2052},
    {name: 'Sragi', kepadatan: 2068, murid: 3020},
    {name: 'Bojong', kepadatan: 1986, murid: 2572},
    {name: 'Wonopringgo', kepadatan: 2666, murid: 2903},
    {name: 'Kedungwuni', kepadatan: 4550, murid: 3535},
    {name: 'Buaran', kepadatan: 5095, murid: 1169},
    {name: 'Tirto', kepadatan: 4504, murid: 1516},
    {name: 'Wiradesa', kepadatan: 5061, murid: 1937},
    {name: 'Siwalan', kepadatan: 1651, murid: 1241},
    {name: 'Karangdadap', kepadatan: 2119, murid: 1427},
    {name: 'Wonokerto', kepadatan: 2937, murid: 1859}
];

const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: kecamatanData.map(d => d.name),
        datasets: [{
            label: 'Jumlah Murid',
            data: kecamatanData.map(d => d.murid),
            backgroundColor: '#4ecca3'
        }, {
            label: 'Kepadatan Penduduk (jiwa/km²)',
            data: kecamatanData.map(d => d.kepadatan),
            backgroundColor: '#e94560'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { color: '#ffffff' }
            },
            title: {
                display: true,
                text: 'Grafik Komparatif Kepadatan Penduduk dan Jumlah Murid per Kecamatan di Kabupaten Pekalongan',
                color: '#ffffff',
                font: { size: 16 }
            }
        },
        scales: {
            y: { ticks: { color: '#ffffff' } },
            x: { 
                ticks: { 
                    color: '#ffffff',
                    maxRotation: 45,
                    minRotation: 45
                } 
            }
        }
    }
});

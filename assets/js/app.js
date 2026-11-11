// Data 19 Kecamatan di Kabupaten Pekalongan (BPS 2024 / QGIS)
const dataKecamatan = [
    { no: 1, nama: 'Kandangserang', kepadatan: 614, murid: 1050, zona: 'Selatan (Pegunungan)' },
    { no: 2, nama: 'Paninggaran', kepadatan: 483, murid: 1020, zona: 'Selatan (Pegunungan)' },
    { no: 3, nama: 'Lebakbarang', kepadatan: 199, murid: 402, zona: 'Selatan (Pegunungan)' },
    { no: 4, nama: 'Petungkriyono', kepadatan: 185, murid: 381, zona: 'Selatan (Pegunungan)' },
    { no: 5, nama: 'Talun', kepadatan: 560, murid: 483, zona: 'Tengah' },
    { no: 6, nama: 'Doro', kepadatan: 709, murid: 1058, zona: 'Tengah' },
    { no: 7, nama: 'Karanganyar', kepadatan: 773, murid: 1154, zona: 'Tengah' },
    { no: 8, nama: 'Kajen', kepadatan: 1056, murid: 3152, zona: 'Pusat Pemerintahan' },
    { no: 9, nama: 'Kesesi', kepadatan: 1106, murid: 2052, zona: 'Barat' },
    { no: 10, nama: 'Sragi', kepadatan: 2068, murid: 3020, zona: 'Barat' },
    { no: 11, nama: 'Bojong', kepadatan: 1986, murid: 2572, zona: 'Tengah' },
    { no: 12, nama: 'Wonopringgo', kepadatan: 2666, murid: 2903, zona: 'Tengah' },
    { no: 13, nama: 'Kedungwuni', kepadatan: 4550, murid: 3535, zona: 'Pesisir / Perkotaan' },
    { no: 14, nama: 'Buaran', kepadatan: 5095, murid: 1169, zona: 'Pesisir / Perkotaan' },
    { no: 15, nama: 'Tirto', kepadatan: 4504, murid: 1516, zona: 'Pesisir / Perkotaan' },
    { no: 16, nama: 'Wiradesa', kepadatan: 5061, murid: 1937, zona: 'Pesisir / Pantura' },
    { no: 17, nama: 'Siwalan', kepadatan: 1651, murid: 1241, zona: 'Pesisir / Pantura' },
    { no: 18, nama: 'Karangdadap', kepadatan: 2119, murid: 1427, zona: 'Tengah' },
    { no: 19, nama: 'Wonokerto', kepadatan: 2937, murid: 1859, zona: 'Pesisir / Pantura' }
];

// Helper: kategori kepadatan
function getKategoriKepadatan(kepadatan) {
    if (kepadatan > 3000) return { label: 'Tinggi', class: 'badge-tinggi' };
    if (kepadatan >= 1000) return { label: 'Sedang', class: 'badge-sedang' };
    return { label: 'Rendah', class: 'badge-rendah' };
}

// Inisialisasi Dashboard
document.addEventListener('DOMContentLoaded', () => {
    initSummaryStats();
    initHighlightCards();
    initCharts();
    initTable(dataKecamatan);
    initSearchFilter();
});

// 1. Ringkasan Statistik
function initSummaryStats() {
    const totalKecamatan = dataKecamatan.length;
    const totalMurid = dataKecamatan.reduce((acc, cur) => acc + cur.murid, 0);
    const avgKepadatan = Math.round(dataKecamatan.reduce((acc, cur) => acc + cur.kepadatan, 0) / totalKecamatan);

    document.getElementById('stat-kecamatan').textContent = totalKecamatan;
    document.getElementById('stat-murid').textContent = totalMurid.toLocaleString('id-ID');
    document.getElementById('stat-kepadatan').textContent = avgKepadatan.toLocaleString('id-ID');
}

// 2. Highlight Cards
function initHighlightCards() {
    const maxMurid = dataKecamatan.reduce((max, d) => d.murid > max.murid ? d : max);
    const maxKepadatan = dataKecamatan.reduce((max, d) => d.kepadatan > max.kepadatan ? d : max);
    const minKepadatan = dataKecamatan.reduce((min, d) => d.kepadatan < min.kepadatan ? d : min);

    const container = document.getElementById('highlight-container');
    if (!container) return;

    container.innerHTML = `
        <div class="highlight-card">
            <div class="hl-label">Murid Terbanyak</div>
            <div class="hl-value">${maxMurid.nama}</div>
            <div class="hl-sub">${maxMurid.murid.toLocaleString('id-ID')} Siswa</div>
        </div>
        <div class="highlight-card">
            <div class="hl-label">Kepadatan Tertinggi</div>
            <div class="hl-value">${maxKepadatan.nama}</div>
            <div class="hl-sub">${maxKepadatan.kepadatan.toLocaleString('id-ID')} jiwa/km²</div>
        </div>
        <div class="highlight-card">
            <div class="hl-label">Kepadatan Terendah</div>
            <div class="hl-value">${minKepadatan.nama}</div>
            <div class="hl-sub">${minKepadatan.kepadatan.toLocaleString('id-ID')} jiwa/km²</div>
        </div>
        <div class="highlight-card">
            <div class="hl-label">Pusat Pemerintahan</div>
            <div class="hl-value">Kajen</div>
            <div class="hl-sub">Ibukota Kabupaten</div>
        </div>
    `;
}

// 3. Grafik Interaktif
let barChart = null;
let doughnutChart = null;

function initCharts() {
    // Bar Chart: Kepadatan vs Murid
    const barCtx = document.getElementById('barChart');
    if (barCtx) {
        barChart = new Chart(barCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: dataKecamatan.map(d => d.nama),
                datasets: [
                    {
                        label: 'Jumlah Siswa SMP',
                        data: dataKecamatan.map(d => d.murid),
                        backgroundColor: 'rgba(78, 204, 163, 0.85)',
                        borderColor: '#4ecca3',
                        borderWidth: 1,
                        borderRadius: 4
                    },
                    {
                        label: 'Kepadatan Penduduk (jiwa/km²)',
                        data: dataKecamatan.map(d => d.kepadatan),
                        backgroundColor: 'rgba(233, 69, 96, 0.85)',
                        borderColor: '#e94560',
                        borderWidth: 1,
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { color: '#d4d4e0', font: { family: 'Segoe UI', size: 11 } }
                    },
                    tooltip: {
                        backgroundColor: '#16213e',
                        titleColor: '#ffffff',
                        bodyColor: '#d4d4e0',
                        borderColor: '#2a2a45',
                        borderWidth: 1
                    }
                },
                scales: {
                    y: {
                        ticks: { color: '#8888a0' },
                        grid: { color: '#1e1e3a' }
                    },
                    x: {
                        ticks: { color: '#8888a0', maxRotation: 45, minRotation: 45 },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Doughnut Chart: Distribusi Kepadatan (Tinggi, Sedang, Rendah)
    const doughnutCtx = document.getElementById('doughnutChart');
    if (doughnutCtx) {
        let tinggi = 0, sedang = 0, rendah = 0;
        dataKecamatan.forEach(d => {
            if (d.kepadatan > 3000) tinggi++;
            else if (d.kepadatan >= 1000) sedang++;
            else rendah++;
        });

        doughnutChart = new Chart(doughnutCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Tinggi (> 3.000)', 'Sedang (1.000 - 3.000)', 'Rendah (< 1.000)'],
                datasets: [{
                    data: [tinggi, sedang, rendah],
                    backgroundColor: ['#e94560', '#f0a500', '#4ecca3'],
                    borderColor: '#13132a',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#d4d4e0', font: { family: 'Segoe UI', size: 10 } }
                    }
                }
            }
        });
    }
}

// 4. Tabel Interaktif
function initTable(data) {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color:#8888a0;">Data tidak ditemukan</td></tr>';
        return;
    }

    tbody.innerHTML = data.map((d, index) => {
        const kat = getKategoriKepadatan(d.kepadatan);
        return `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${d.nama}</strong><br><small style="color:#6e6e88">${d.zona}</small></td>
                <td>${d.kepadatan.toLocaleString('id-ID')}</td>
                <td>${d.murid.toLocaleString('id-ID')}</td>
                <td><span class="badge ${kat.class}">${kat.label}</span></td>
            </tr>
        `;
    }).join('');
}

// 5. Pencarian di Tabel
function initSearchFilter() {
    const searchInput = document.getElementById('tableSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase().trim();
        const filtered = dataKecamatan.filter(d => 
            d.nama.toLowerCase().includes(keyword) || 
            d.zona.toLowerCase().includes(keyword)
        );
        initTable(filtered);
    });
}

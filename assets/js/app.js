// Data Resmi 19 Kecamatan di Kabupaten Pekalongan (BPS 2024 / QGIS)
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

function getKategoriKepadatan(kepadatan) {
    if (kepadatan > 3000) return { label: 'Tinggi', class: 'badge-tinggi', icon: 'fa-triangle-exclamation' };
    if (kepadatan >= 1000) return { label: 'Sedang', class: 'badge-sedang', icon: 'fa-circle-check' };
    return { label: 'Rendah', class: 'badge-rendah', icon: 'fa-circle-info' };
}

document.addEventListener('DOMContentLoaded', () => {
    initSummaryStats();
    initCharts();
    initTable(dataKecamatan);
    initSearchFilter();
    initScrollSpy();
});

// 1. Inisialisasi Ringkasan
function initSummaryStats() {
    const totalKecamatan = dataKecamatan.length;
    const totalMurid = dataKecamatan.reduce((acc, cur) => acc + cur.murid, 0);
    const avgKepadatan = Math.round(dataKecamatan.reduce((acc, cur) => acc + cur.kepadatan, 0) / totalKecamatan);

    const elKec = document.getElementById('stat-kecamatan');
    const elMurid = document.getElementById('stat-murid');
    const elKep = document.getElementById('stat-kepadatan');

    if (elKec) elKec.textContent = totalKecamatan;
    if (elMurid) elMurid.textContent = totalMurid.toLocaleString('id-ID');
    if (elKep) elKep.textContent = avgKepadatan.toLocaleString('id-ID');
}

// 2. Charts (Bar & Doughnut)
function initCharts() {
    const barCtx = document.getElementById('barChart');
    if (barCtx) {
        new Chart(barCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: dataKecamatan.map(d => d.nama),
                datasets: [
                    {
                        label: 'Peserta Didik SLTP',
                        data: dataKecamatan.map(d => d.murid),
                        backgroundColor: 'rgba(16, 185, 129, 0.85)',
                        borderColor: '#10b981',
                        borderWidth: 1,
                        borderRadius: 6
                    },
                    {
                        label: 'Kepadatan Penduduk (jiwa/km²)',
                        data: dataKecamatan.map(d => d.kepadatan),
                        backgroundColor: 'rgba(244, 63, 94, 0.85)',
                        borderColor: '#f43f5e',
                        borderWidth: 1,
                        borderRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { color: '#e2e8f0', font: { family: 'Plus Jakarta Sans', size: 12, weight: '600' } }
                    },
                    tooltip: {
                        backgroundColor: '#121829',
                        titleColor: '#ffffff',
                        bodyColor: '#e2e8f0',
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderWidth: 1,
                        padding: 12
                    }
                },
                scales: {
                    y: {
                        ticks: { color: '#94a3b8' },
                        grid: { color: 'rgba(255, 255, 255, 0.05)' }
                    },
                    x: {
                        ticks: { color: '#94a3b8', maxRotation: 45, minRotation: 45 },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    const doughnutCtx = document.getElementById('doughnutChart');
    if (doughnutCtx) {
        let tinggi = 0, sedang = 0, rendah = 0;
        dataKecamatan.forEach(d => {
            if (d.kepadatan > 3000) tinggi++;
            else if (d.kepadatan >= 1000) sedang++;
            else rendah++;
        });

        new Chart(doughnutCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Tinggi (> 3.000)', 'Sedang (1.000 - 3.000)', 'Rendah (< 1.000)'],
                datasets: [{
                    data: [tinggi, sedang, rendah],
                    backgroundColor: ['#f43f5e', '#f59e0b', '#10b981'],
                    borderColor: '#121829',
                    borderWidth: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#e2e8f0', font: { family: 'Plus Jakarta Sans', size: 11, weight: '500' } }
                    }
                }
            }
        });
    }
}

// 3. Render Tabel Data
function initTable(data) {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 24px; color:#64748b;">Kecamatan tidak ditemukan</td></tr>';
        return;
    }

    tbody.innerHTML = data.map((d, index) => {
        const kat = getKategoriKepadatan(d.kepadatan);
        return `
            <tr>
                <td style="color:var(--text-muted); font-weight:600;">${index + 1}</td>
                <td style="font-weight:700; color:#ffffff;">${d.nama}</td>
                <td style="color:var(--text-secondary);">${d.zona}</td>
                <td><strong>${d.kepadatan.toLocaleString('id-ID')}</strong></td>
                <td><strong>${d.murid.toLocaleString('id-ID')}</strong></td>
                <td><span class="badge ${kat.class}"><i class="fa-solid ${kat.icon}"></i> ${kat.label}</span></td>
            </tr>
        `;
    }).join('');
}

// 4. Pencarian Interaktif
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

// 5. ScrollSpy untuk Active Nav Link
function initScrollSpy() {
    const sections = document.querySelectorAll('header[id], section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

# Sistem Informasi Geografis Kabupaten Pekalongan
**Analisis Spasial Kepadatan Penduduk dan Jumlah Murid SMP per Kecamatan di Kabupaten Pekalongan Menggunakan QGIS**

## 📌 Deskripsi Proyek
Proyek ini merupakan implementasi Sistem Informasi Geografis (SIG) berbasis website yang menyajikan informasi spasial mengenai kepadatan penduduk dan jumlah murid Sekolah Menengah Pertama (SMP) di Kabupaten Pekalongan, Jawa Tengah. Pengolahan data spasial dilakukan menggunakan QGIS 2.18.18, kemudian hasil pemetaan diekspor menggunakan plugin `qgis2web` dan diintegrasikan ke dalam website melalui tag `<iframe>` agar informasi geografis dapat ditampilkan secara interaktif.

## 🎯 Tujuan
1. Menampilkan informasi geografis Kabupaten Pekalongan berdasarkan 19 wilayah kecamatan (termasuk Sragi, dsb).
2. Memvisualisasikan persebaran kepadatan penduduk.
3. Menampilkan persebaran jumlah murid SMP negeri (24.792) dan swasta (7.139).
4. Membandingkan kondisi kepadatan penduduk dengan jumlah murid SMP.
5. Mengimplementasikan hasil pengolahan QGIS ke dalam website berbasis GIS.

## ⚙️ Teknologi yang Digunakan
- **QGIS 2.18.18**: Pengolahan dan analisis data spasial (Graduated symbology).
- **qgis2web**: Plugin QGIS untuk mengekspor project ke format Web Map (Leaflet/OpenLayers).
- **HTML5, CSS3, JavaScript**: Struktur dan desain antarmuka website (tema Dark Academic).
- **Chart.js**: Visualisasi grafik dan statistik.

## 📁 Struktur Folder
```text
sig-pekalongan/
├── index.html
├── README.md
├── assets/
│   ├── css/style.css
│   ├── js/app.js (untuk Chart.js dan interaksi UI)
│   └── images/
├── data/
│   └── data_penelitian.csv
└── webgis/
    └── index.html (Hasil ekspor Create Web Map dari QGIS)
```

## 🚀 Cara Menjalankan Website
1. Buka folder proyek menggunakan Visual Studio Code.
2. Pastikan file QGIS sudah diekspor ke folder `webgis/`.
3. Gunakan ekstensi **Live Server**, klik kanan pada file `index.html`.
4. Pilih **Open with Live Server**. Peta dari folder `webgis/` akan dimuat secara otomatis menggunakan `iframe`.

## 👨‍💻 Pengembang
- **Nama**: Muhamad Luthfi Abdullah
- **Program Studi**: Informatika
- **Perguruan Tinggi**: Universitas PGRI Semarang
- **Asal**: Desa Sumublor, Kecamatan Sragi, Kabupaten Pekalongan

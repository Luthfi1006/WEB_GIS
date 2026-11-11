# Product Requirements Document (PRD)
**Sistem Informasi Geografis (SIG) Kabupaten Pekalongan**

## 1. Tujuan Produk
Membangun platform WebGIS interaktif yang menyajikan data spasial mengenai kepadatan penduduk dan distribusi siswa SMP (Negeri dan Swasta) di 19 kecamatan Kabupaten Pekalongan untuk mendukung analisis geografis kependudukan dan pendidikan.

## 2. Target Pengguna
- Akademisi dan Peneliti
- Pemerintah Daerah Kabupaten Pekalongan
- Masyarakat Umum

## 3. Fitur Utama
- **Integrasi Peta QGIS**: Peta interaktif yang diekspor dari QGIS 2.18.18 menggunakan plugin Create Web Map (Leaflet.js) dan di-embed ke website utama.
- **Peta Tematik (Choropleth)**: Gradasi warna berdasarkan tingkat kepadatan penduduk dan jumlah murid.
- **Popup Informasi**: Menampilkan data detail per kecamatan saat area poligon di-klik.
- **Visualisasi Grafik (Dashboard)**: Grafik batang (Chart.js) yang membandingkan total siswa SMP Negeri vs Swasta di seluruh kecamatan.

## 4. Ruang Lingkup Data
- **Batas Administrasi**: 19 Kecamatan di Kabupaten Pekalongan.
- **Atribut**: Kepadatan penduduk (jiwa/km2), Jumlah Murid SMP Negeri, Jumlah Murid SMP Swasta.
- **Sumber Data**: BPS Kabupaten Pekalongan (2024).

## 5. Metrik Kesuksesan
- Peta spasial dapat diakses dan di-load kurang dari 3 detik di browser.
- Peta `iframe` dari direktori ekspor QGIS berjalan sinkron dengan UI website utama.
- Grafik Chart.js merender dengan akurat berdasarkan dataset CSV.

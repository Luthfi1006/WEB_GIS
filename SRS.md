# Software Requirements Specification (SRS)
**Sistem Informasi Geografis (SIG) Kabupaten Pekalongan**

## 1. Pendahuluan
Dokumen ini mendefinisikan spesifikasi kebutuhan perangkat lunak untuk WebGIS Kabupaten Pekalongan, yang berfungsi sebagai visualisator data spasial pendidikan dan kependudukan.

## 2. Arsitektur Sistem
Sistem ini menggunakan arsitektur statis murni (Client-Side Rendering).
- **Layer Pemetaan Spasial**: Diekspor dari QGIS menjadi file statis berbasis Leaflet (di folder `webgis/`).
- **Layer Antarmuka**: HTML/CSS/JS (vanilla) yang membungkus pemetaan spasial dan menambahkan dashboard grafik.

## 3. Kebutuhan Fungsional
- **REQ-F01**: Sistem harus memuat peta Leaflet dari folder `webgis/index.html` ke dalam halaman utama menggunakan tag `<iframe>`.
- **REQ-F02**: Sistem harus menampilkan legenda peta (Rendah, Sedang, Tinggi) yang diekspor langsung dari QGIS.
- **REQ-F03**: Sistem harus menyediakan komponen grafik menggunakan Chart.js untuk data komparatif siswa SMP (Negeri vs Swasta).
- **REQ-F04**: Peta harus memiliki fitur *zoom in*, *zoom out*, dan *pan*.

## 4. Kebutuhan Non-Fungsional
- **REQ-NF01 (UI/UX)**: Website harus menerapkan tema *Dark Academic* agar terlihat profesional dan modern.
- **REQ-NF02 (Responsivitas)**: Container iframe peta dan grafik harus menyesuaikan ukuran layar (mobile, tablet, desktop).
- **REQ-NF03 (Kompatibilitas)**: Harus dapat dijalankan di Chrome, Firefox, dan Safari (diperlukan akses Live Server untuk bypass CORS).

## 5. Batasan Lingkungan
Sistem tidak menggunakan backend server (seperti Node.js) maupun database spasial aktif (seperti PostGIS) pada iterasi ini, melainkan mengandalkan GeoJSON dan iframe rendering murni dari ekspor lokal PC.

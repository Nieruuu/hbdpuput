# For Puput Soraya

Website ulang tahun personal dengan tema pink–lavender, kue 3D interaktif, doa ulang tahun, dan pesan yang bisa dipersonalisasi. Next.js App Router, TypeScript, Tailwind CSS v4, React Three Fiber / Three.js, Framer Motion, Lucide React.

## Menjalankan

Gunakan Node.js 22 LTS atau lebih baru dan npm.

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Production

```bash
npm run typecheck
npm run build
npm start
```

## Mengganti tulisan dan nama

Edit **src/config/content.ts**. Semua pesan, label navigasi, status kontrol, metadata, caption, teks alternatif, dan kutipan berasal dari file ini. Ubah variabel `name` dan `nickname` di bagian atas untuk mengganti penerima. Ubah `sender.name` untuk nama pengirim. Array pesan bisa ditambah atau dikurangi. Biarkan setiap judul alasan berbeda agar key React tetap unik.

`birthdayTitle.enabled: false` menyembunyikan bagian ulang tahun. Pesan lain tetap tersedia. Metadata hanya berisi judul dan deskripsi singkat; default robots meminta mesin pencari tidak mengindeks. Ini bukan proteksi akses: siapa pun yang memiliki URL publik dapat membacanya.

## Foto opsional

1. Letakkan foto di `public/photos/puput.webp`.
2. Isi `photo.src: "/photos/puput.webp"` dalam config.
3. Sesuaikan `photo.alt`.

Gunakan foto lokal WebP/AVIF/JPEG/PNG, disarankan di bawah 400 KB. Next Image mengoptimalkan ukurannya. Nilai kosong atau foto gagal dimuat menampilkan visual abstrak; tidak ada gambar rusak. Foto jarak jauh memerlukan pengaturan remotePatterns di Next.js.

## Musik

Instrumental music box orisinal sudah tersedia di `public/music/birthday-music-box.wav` dan berulang setiap sekitar 22 detik. Dibuat secara lokal dengan `node scripts/generate-music.cjs`. Path serta volume (0 sampai 1) bisa diubah di `content.music` untuk memakai lagu sendiri. Musik mencoba diputar otomatis saat halaman dibuka. Jika browser memblokir autoplay bersuara, musik dimulai pada klik/sentuhan atau interaksi keyboard pertama. Tombol Putar musik/Jeda musik tetap tersedia; setelah kontrol manual digunakan, halaman tidak memulai musik lagi secara otomatis. Tanpa file, kontrol menunjukkan status ketersediaan dan halaman tetap berfungsi. Browser yang menolak playback juga ditangani. Audio dimuat otomatis, lalu loop hingga dijeda atau halaman ditutup.

## Deploy Vercel

1. Push project ke repository Git.
2. Import repository di Vercel dan pilih preset **Next.js**.
3. Install command: `npm install`. Build command: `npm run build`.
4. Klik Deploy. Tidak ada environment variable yang wajib.

## Struktur

```text
src/
  app/                 # halaman, layout, global CSS
  components/
    sections/          # delapan bab, masing-masing komponen
    three/             # canvas opening dan lazy loader
    ui/                # reveal, foto, navigasi, kontrol
  config/content.ts    # seluruh personalisasi
  hooks/               # preferensi dan jeda animasi
  lib/                 # utilitas pengembangan
public/photos/
public/music/
```

## Performa dan aksesibilitas

- Satu canvas dimuat dinamis saat halaman terbuka. Kue berputar penuh setiap 24 detik. Selama pemuatan dan tanpa WebGL, kue ulang tahun CSS tetap tampil.
- Geometri dan partikel sederhana, tanpa HDR/texture jaringan/post-processing.
- DPR dan partikel dikurangi pada mobile; animasi berhenti ketika opening keluar layar atau tab disembunyikan.
- Preferensi reduced motion dan tombol jeda animasi mematikan gerakan; teks tetap dapat dibaca.
- HTML semantik, skip link, focus ring, font lokal, dan kontrol minimal 44 px.
- Navigasi anchor tanpa scroll hijacking. Foto lazy-load dan audio preload auto.
- Konten server-rendered tetap terbaca jika JavaScript belum berjalan.
- Ukur Lighthouse pada build production dengan profil mobile. Target 85+ bergantung pada perangkat, hosting, dan aset yang ditambahkan; jangan gunakan hasil development sebagai acuan.

## Catatan desain

Palet: blush #fff5f7, lavender #f3eafb, peach #fff9f5, plum #49335b, dan aksen orchid #9851a0. Pembuka berfokus pada ucapan ulang tahun dengan kue berlapis pink–ungu. Tombol Make a wish memadamkan lilin dan dapat menyalakannya kembali. Doa ulang tahun muncul sebelum cerita personal; surat lengkap bisa dibuka lewat elemen details yang juga berfungsi tanpa JavaScript. Kutipan penutup tetap ditampilkan. Tidak menggunakan aset foto atau audio pihak ketiga.



## Hasil verifikasi lokal

- Instalasi npm pada folder bersih berhasil; package-lock.json disertakan. React dibatasi ke seri 19.2 agar kompatibel dengan peer dependency React Three Fiber.
- `npm run build` dan `npm run typecheck` berhasil. `npm run dev` diuji dengan respons halaman yang benar.
- Browser diperiksa pada lebar 375, 430, 768, 1024, dan 1440 px: tidak ada overflow horizontal atau error JavaScript. Canvas kini aktif otomatis saat halaman terbuka.
- Reduced motion, tombol Continue, musik tidak autoplay, Play/Pause, tombol jeda animasi, serta fallback tanpa WebGL/aset telah diperiksa. Tes awal Play/Pause menggunakan mock; kini project menyertakan instrumental WAV lokal.
- Lighthouse mobile lokal, build production tanpa aset pribadi: **Performance 98**, **Accessibility 100** (hasil versi dark awal; bukan audit tema ulang tahun terbaru), LCP 2.4 detik, TBT 60 ms, CLS 0. Audit mengukur pemuatan awal sebelum interaksi; kompilasi 3D terjadi setelah interaksi. Hasil dapat berubah setelah deployment dan penambahan aset.
- Laporan lokal disimpan di `artifacts/` (diabaikan Git). Lighthouse menghasilkan laporan, tetapi proses cleanup profil Edge sementara mengembalikan EPERM pada Windows; ini tidak mengubah hasil audit yang sudah selesai.


## Revisi tema ulang tahun

Pembuka sekarang memakai ucapan Happy Birthday, kue dua tingkat pink–ungu, dan tombol Make a wish. Tiga doa ulang tahun ditempatkan tepat setelah pembuka. Pesan personal lengkap dipertahankan sebagai surat yang dapat dibuka, sementara kutipan penutup tetap terlihat. Semua label baru ada di content.ts. Kontrol musik pada mobile ditempatkan di bagian atas agar tidak menutupi interaksi kue.

Verifikasi revisi: production build dan TypeScript berhasil; ukuran 375, 430, 768, 1024, 1440 px tidak overflow; tidak ada error JavaScript; lilin, navigasi ke #birthday, surat, dan reduced motion berfungsi. Lighthouse mobile lokal terbaru: Performance 94, Accessibility 100 (pemuatan awal sebelum interaksi 3D). Laporan: artifacts/birthday-lighthouse.json. Peringatan cleanup profil Edge pada Windows sama seperti audit sebelumnya; laporan selesai tersimpan.


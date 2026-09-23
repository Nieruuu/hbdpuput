// Semua tulisan yang terlihat di website diedit di sini.
// Nama pada kalimat disusun otomatis dari nickname di bawah.
const name = "Puput Soraya";
const nickname = "Puput";
export const content = {
  recipient: { name, nickname },
  sender: { name: "Rafly" },
  seo: { title: `For ${name}`, description: "Ucapan ulang tahun dan doa baik untuk Puput Soraya." },
  ui: {
    brand: `For ${nickname.toLowerCase()}.`, dedication: "A little birthday surprise.",
    nav: [{ label: "Harapan baik", href: "#birthday" }, { label: "Tentang kamu", href: "#about" }, { label: "Pesan dariku", href: "#final" }],
    skip: "Langsung ke ucapan", continue: "Buka ucapanmu", scroll: "Dibuat khusus untuk hari istimewamu.",
    chapter: "Bab", play: "Putar musik", pause: "Jeda musik", musicMissing: "Musik belum tersedia", musicError: "Musik belum bisa diputar", musicLoading: "Menyiapkan musik…",
    motionPause: "Jeda animasi", motionPlay: "Aktifkan animasi", navigation: "Navigasi ucapan", back: "Kembali ke awal", signature: "Selamat ulang tahun, dari", ending: "Semoga hari ini jadi awal dari banyak hal baik.",
  },
  opening: { label: "Hari ini, kita merayakan kamu", title: `Happy Birthday,\n${nickname}!`, subtitle: "Semoga bahagia kamu bertambah, hari ini dan seterusnya.", note: "Ada doa baik, sedikit kejutan,\ndan beberapa hal yang ingin aku sampaikan.", wish: "Make a wish", relight: "Nyalakan lilinnya lagi", wishMade: "Semoga harapan baikmu menemukan jalannya.", cakeNote: "Satu kue kecil. Banyak harapan baik." },
  about: { label: "Tentang kamu", title: "Selamat ulang tahun,\nPuput!", paragraphs: ["Hari ini aku ingin mengucapkan selamat ulang tahun dan menitipkan beberapa doa baik buat kamu.", "Semoga kamu sehat, punya banyak alasan untuk tersenyum, dan bisa menikmati hari ini bersama orang-orang terdekat.", "Aku bikin halaman kecil ini untuk ikut merayakan ulang tahunmu. Semoga kamu suka, ya."] },
  why: { label: "Untuk hari ini", title: "Rayakan dengan\ncaramu sendiri." },
  whyYou: [
    { title: "Makasih udah makan kue aku.", description: "Aku senang kamu suka kue ulang tahunku. Jangan lupa kue ulang tahunnya!" },
    { title: "Lakuin yang bikin senang.", description: "Mau jalan-jalan, ngobrol, atau santai di rumah, semoga hari ini menyenangkan buat kamu." },
    { title: "Buat satu harapan.", description: "Sebelum tiup lilin, pikirkan sesuatu yang ingin kamu wujudkan. Aku ikut mendoakan yang terbaik." },
  ],
  whatISee: { label: "Di usia yang baru", title: "Semoga makin banyak\nhal baik datang.", intro: "Ini beberapa hal sederhana yang aku harapkan buat kamu tahun ini.", words: ["Sehat dan banyak senyum.", "Waktu untuk hal yang kamu suka.", "Kabar baik.", "Teman yang baik.", "Pengalaman baru."], closing: "Semoga ada banyak momen yang nanti kamu ingat dengan senang." },
  acceptanceTitle: { label: "Doa untuk kamu", title: "Semoga langkah kamu\ndimudahkan." },
  acceptance: ["Semoga urusan yang sedang kamu jalani diberi kelancaran.", "Semoga kamu sehat dan bahagia.", "Semoga usaha yang kamu lakukan membawa hasil baik.", "Kalau ada rencana yang belum tercapai, semoga terbuka kesempatan baru.", "Di sela kesibukan, semoga tetap ada waktu untuk istirahat.", "Semoga orang-orang terdekatmu juga selalu sehat.", "Dan semoga tahun ini banyak kabar baik buat kamu."],
  futureTitle: { label: "Setahun ke depan", title: "Banyak yang bisa\nkamu nantikan.", subtitle: "Semoga usia baru ini membawa kesempatan untuk hal-hal yang kamu inginkan.", note: "Satu per satu, sesuai waktumu." },
  future: ["Mencoba sesuatu yang sudah lama kamu penasaran.", "Mengunjungi tempat yang ingin kamu datangi.", "Belajar hal baru yang kamu sukai.", "Punya lebih banyak waktu bersama orang terdekat.", "Merayakan setiap pencapaian, sekecil apa pun."],
  birthdayTitle: { enabled: true, label: "Doa-doa kecil untukmu", title: "Untuk tahun yang lebih berwarna.", subtitle: "Kalau boleh menitipkan beberapa harapan untukmu…", closing: "Hari ini milikmu. Semoga kamu merasa dirayakan." },
  birthday: ["Semoga di umur kamu yang sekarang, hidup membawa lebih banyak hal baik.", "Semoga apa pun yang sedang kamu kejar perlahan bisa tercapai.", "Semoga kamu tetap menjadi dirimu sendiri."],
  finalTitle: { label: "Pesan dari aku", title: "Sekali lagi,\nselamat ulang tahun!", intro: "Sedikit ucapan dariku untuk menemani hari ulang tahunmu.", read: "Buka surat kecil dariku" },
  finalMessage: [
    `Selamat ulang tahun, ${nickname}!`,
    "Semoga hari ini menyenangkan, dari ucapan yang masuk, sampai waktu yang kamu habiskan sama aku.",
    "Di usia yang baru ini, aku doain kamu selalu sehat, dimudahkan urusannya, dan diberi banyak kesempatan baik.",
    "Semoga hal-hal yang sedang kamu usahakan bisa tercapai. Kalau prosesnya butuh waktu, semoga kamu tetap punya semangat dan dukungan untuk menjalaninya.",
    "Jangan lupa menyisihkan waktu untuk diri sendiri juga, ya. Semoga tahun ini bukan cuma penuh kesibukan, tapi juga hal-hal yang bikin kamu seneng hehe.",
    "Semoga banyak cerita menyenangkan menanti di usia yang baru ini!",
  ],
  finalPromise: "Semoga doa-doa baik hari ini satu per satu terwujud.",
  finalQuote: "Selamat ulang tahun, Puput. Sehat selalu, bahagia, dan semoga banyak hal baik datang tahun ini.",
  // Tambahkan foto ke public/photos, lalu isi misalnya '/photos/puput.webp'. Kosong = visual abstrak.
  photo: { src: "", alt: `Potret ${name}` },
  // Audio tidak autoplay. File kosong / hilang akan ditangani dengan aman.
  music: { src: "/music/birthday-music-box.wav", volume: 0.35 },
} as const;



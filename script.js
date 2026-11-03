"use strict";

/* =====================================================
   STOCKGUIDE V3
   SCRIPT.JS

   10 LANGKAH ANALISIS SAHAM
   + KAMUS KEUANGAN
   + CHECKLIST
   + PENYIMPANAN LOKAL
===================================================== */


/* =====================================================
   1. DATA 10 LANGKAH ANALISIS
===================================================== */

const steps = [

    /* ================================
       01. MODEL BISNIS
    ================================ */

    {
        title: "Pahami Bisnis Perusahaan",
        author: "Warren Buffett & Peter Lynch",

        meaning:
            "Sebelum membeli saham, pahami dulu perusahaan ini menjual apa dan mendapatkan uang dari mana.\n\n" +
            "Bayangkan kamu mau membeli sebuah toko. Kamu pasti ingin tahu barang apa yang dijual, siapa pembelinya, dan kenapa orang memilih toko tersebut.\n\n" +
            "Hal yang sama berlaku ketika kamu membeli saham. Kamu sedang membeli sebagian kepemilikan sebuah bisnis.",

        terms: [
            "Business Model — Model Bisnis",
            "Revenue Stream — Sumber Pendapatan",
            "Market Share — Pangsa Pasar",
            "Competitive Advantage — Keunggulan Bersaing",
            "Economic Moat — Keunggulan yang Sulit Ditiru"
        ],

        formula:
            "Tidak ada satu rumus khusus.\n" +
            "Fokus pada cara perusahaan menghasilkan uang dan mempertahankan pelanggan.",

        good:
            "Perusahaan lebih menarik jika produknya dibutuhkan banyak orang, pelanggan terus membeli, dan bisnisnya sulit dikalahkan pesaing.\n\n" +
            "Misalnya, perusahaan memiliki merek kuat, jaringan distribusi luas, atau biaya produksi yang lebih rendah daripada pesaing.",

        example:
            "Perusahaan A memiliki merek makanan terkenal dan produknya dijual di seluruh Indonesia.\n\n" +
            "Perusahaan B baru berdiri dan produknya belum banyak dikenal.\n\n" +
            "Perusahaan A mungkin memiliki keunggulan bisnis yang lebih kuat. Namun, kita tetap harus memeriksa laba, utang, dan harga sahamnya.",

        warning:
            "Perusahaan terkenal belum tentu merupakan investasi yang bagus.\n\n" +
            "Bisnis bagus yang dibeli dengan harga terlalu mahal tetap bisa memberikan hasil investasi yang buruk.",

        source:
            "Laporan Tahunan (Annual Report), bagian Profil Perusahaan, Segmen Usaha, Produk, Tinjauan Operasional, dan Analisis Manajemen."
    },


    /* ================================
       02. REVENUE
    ================================ */

    {
        title: "Pertumbuhan Pendapatan (Revenue)",
        author: "Peter Lynch & Aswath Damodaran",

        meaning:
            "Revenue adalah jumlah pendapatan yang diperoleh perusahaan dari menjual produk atau jasa sebelum dikurangi berbagai biaya.\n\n" +
            "Bahasa gampangnya: seberapa besar penjualan perusahaan.\n\n" +
            "Kalau pendapatan meningkat, berarti nilai penjualan perusahaan bertambah. Tetapi belum tentu keuntungannya ikut meningkat.",

        terms: [
            "Revenue — Pendapatan",
            "Sales — Penjualan",
            "Net Sales — Penjualan Neto",
            "Net Revenue — Pendapatan Neto",
            "Revenue Growth — Pertumbuhan Pendapatan",
            "CAGR — Pertumbuhan Rata-rata Majemuk Tahunan"
        ],

        formula:
            "Pertumbuhan Pendapatan =\n" +
            "(Pendapatan Tahun Ini − Pendapatan Tahun Lalu)\n" +
            "÷ Pendapatan Tahun Lalu × 100%\n\n" +
            "CAGR = (Nilai Akhir ÷ Nilai Awal)^(1 ÷ Jumlah Tahun) − 1",

        good:
            "Pendapatan yang terus meningkat selama beberapa tahun biasanya menjadi tanda positif.\n\n" +
            "Artinya, perusahaan mampu menjual lebih banyak produk, menaikkan harga jual, atau memperluas bisnisnya.\n\n" +
            "Lebih menarik lagi jika pertumbuhannya konsisten dan berasal dari bisnis utama.",

        example:
            "Pendapatan perusahaan:\n\n" +
            "2021: Rp5 triliun\n" +
            "2022: Rp5,5 triliun\n" +
            "2023: Rp6 triliun\n" +
            "2024: Rp7 triliun\n" +
            "2025: Rp8 triliun\n\n" +
            "Pertumbuhan 2025:\n" +
            "(8 − 7) ÷ 7 × 100% = 14,29%\n\n" +
            "Artinya, pendapatan tahun 2025 naik sekitar 14,29% dibanding 2024.",

        warning:
            "Pendapatan naik tidak selalu berarti perusahaan semakin untung.\n\n" +
            "Kalau biaya bahan baku, gaji, atau operasional naik lebih cepat daripada pendapatan, laba bisa turun.\n\n" +
            "Jangan hanya melihat satu tahun. Periksa setidaknya beberapa tahun untuk memahami polanya.",

        source:
            "Laporan Laba Rugi dan Penghasilan Komprehensif Lain.\n\n" +
            "Cari akun: Pendapatan, Penjualan Neto, Penjualan Bersih, atau Pendapatan Usaha."
    },


    /* ================================
       03. LABA DAN EPS
    ================================ */

    {
        title: "Pertumbuhan Laba Bersih dan EPS",
        author: "Peter Lynch & Warren Buffett",

        meaning:
            "Laba bersih adalah keuntungan yang tersisa setelah pendapatan dikurangi berbagai biaya dan pajak.\n\n" +
            "EPS adalah laba yang dihitung untuk setiap lembar saham.\n\n" +
            "Sederhananya, laba bersih menunjukkan keuntungan perusahaan, sedangkan EPS membantu melihat laba per saham.",

        terms: [
            "Net Income — Laba Bersih",
            "Net Profit — Laba Bersih",
            "Profit for the Year — Laba Tahun Berjalan",
            "EPS — Earnings per Share",
            "Basic EPS — Laba per Saham Dasar",
            "Net Profit Margin — Margin Laba Bersih"
        ],

        formula:
            "Pertumbuhan Laba =\n" +
            "(Laba Tahun Ini − Laba Tahun Lalu)\n" +
            "÷ Laba Tahun Lalu × 100%\n\n" +
            "EPS Dasar =\n" +
            "Laba yang Tersedia bagi Pemegang Saham Biasa\n" +
            "÷ Rata-rata Tertimbang Saham Biasa Beredar",

        good:
            "Laba bersih dan EPS yang meningkat secara konsisten biasanya menjadi tanda positif.\n\n" +
            "Artinya, perusahaan bukan hanya mampu meningkatkan penjualan, tetapi juga menghasilkan keuntungan.\n\n" +
            "Periksa apakah kenaikan laba berasal dari kegiatan bisnis utama.",

        example:
            "Laba bersih:\n\n" +
            "2024: Rp800 miliar\n" +
            "2025: Rp1 triliun\n\n" +
            "Pertumbuhan laba:\n" +
            "(1.000 − 800) ÷ 800 × 100% = 25%\n\n" +
            "Artinya, laba perusahaan meningkat 25% dibanding tahun sebelumnya.",

        warning:
            "Laba yang naik tajam belum tentu berasal dari bisnis utama.\n\n" +
            "Contohnya, perusahaan menjual tanah atau aset sehingga mencatat keuntungan besar hanya pada satu tahun.\n\n" +
            "EPS juga dapat berubah karena jumlah saham yang beredar berubah.",

        source:
            "Laporan Laba Rugi dan Catatan atas Laporan Keuangan.\n\n" +
            "Cari akun: Laba Tahun Berjalan, Laba yang Diatribusikan kepada Pemilik Entitas Induk, dan Laba per Saham Dasar."
    },


    /* ================================
       04. ROE, ROA, ROIC
    ================================ */

    {
        title: "Efisiensi Perusahaan: ROE, ROA, ROIC",
        author: "Warren Buffett & Joel Greenblatt",

        meaning:
            "Ketiga rasio ini membantu kita melihat seberapa efektif perusahaan menghasilkan keuntungan.\n\n" +
            "ROE mengukur laba dibandingkan modal pemegang saham.\n\n" +
            "ROA mengukur laba dibandingkan seluruh aset perusahaan.\n\n" +
            "ROIC mengukur keuntungan operasi setelah pajak dibandingkan modal yang digunakan dalam bisnis.\n\n" +
            "Bayangkan dua toko memiliki modal sama, tetapi satu toko menghasilkan laba jauh lebih besar. Toko tersebut lebih produktif menggunakan modalnya.",

        terms: [
            "ROE — Return on Equity",
            "ROA — Return on Assets",
            "ROIC — Return on Invested Capital",
            "Equity — Ekuitas",
            "Assets — Aset",
            "NOPAT — Net Operating Profit After Tax",
            "WACC — Weighted Average Cost of Capital"
        ],

        formula:
            "ROE = Laba Bersih ÷ Rata-rata Ekuitas × 100%\n\n" +
            "ROA = Laba Bersih ÷ Rata-rata Total Aset × 100%\n\n" +
            "ROIC = NOPAT ÷ Rata-rata Invested Capital × 100%\n\n" +
            "Catatan: gunakan definisi laba dan modal yang konsisten. Rumus ROA dan ROIC dapat berbeda menurut konteks dan metode analisis.",

        good:
            "ROE yang tinggi dan stabil selama beberapa tahun biasanya menjadi tanda positif.\n\n" +
            "ROA yang meningkat bisa berarti aset perusahaan digunakan lebih produktif.\n\n" +
            "Untuk ROIC, hal penting adalah membandingkannya dengan WACC atau biaya modal.\n\n" +
            "Jika ROIC lebih tinggi daripada WACC secara berkelanjutan, perusahaan berpotensi menciptakan nilai ekonomi.",

        example:
            "Perusahaan memiliki:\n\n" +
            "Laba bersih: Rp20 miliar\n" +
            "Rata-rata ekuitas: Rp100 miliar\n\n" +
            "ROE = 20 ÷ 100 × 100% = 20%\n\n" +
            "Artinya, perusahaan menghasilkan laba Rp20 untuk setiap Rp100 rata-rata modal pemegang saham.\n\n" +
            "Misalnya ROIC 15% dan WACC 10%, selisih positifnya 5 poin persentase.",

        warning:
            "ROE semakin tinggi tidak otomatis semakin bagus.\n\n" +
            "ROE bisa meningkat karena perusahaan menggunakan utang besar atau ekuitasnya menurun.\n\n" +
            "ROA dan ROIC juga harus dibandingkan dengan perusahaan sejenis.\n\n" +
            "Untuk bank, definisi dan cara membaca ROA dapat berbeda dari perusahaan nonkeuangan.",

        source:
            "Laporan Laba Rugi dan Laporan Posisi Keuangan.\n\n" +
            "Cari akun: Laba Bersih, Total Aset, Total Ekuitas, Laba Usaha, dan Utang Berbunga.\n\n" +
            "ROE, ROA, dan ROIC kadang tersedia pada bagian Ikhtisar Rasio Keuangan. Jika tidak ada, hitung sendiri."
    },


    /* ================================
       05. UTANG
    ================================ */

    {
        title: "Utang dan Kesehatan Keuangan",
        author: "Benjamin Graham & Warren Buffett",

        meaning:
            "Utang adalah kewajiban yang harus dibayar perusahaan.\n\n" +
            "Utang tidak selalu buruk. Perusahaan bisa meminjam uang untuk membangun pabrik atau memperbesar bisnis.\n\n" +
            "Masalah muncul ketika utang terlalu besar dibanding kemampuan perusahaan membayarnya.",

        terms: [
            "Debt — Utang",
            "Interest-Bearing Debt — Utang Berbunga",
            "DER — Debt to Equity Ratio",
            "Liabilities — Liabilitas",
            "Current Liabilities — Liabilitas Jangka Pendek",
            "Interest Coverage — Kemampuan Membayar Bunga",
            "Net Debt — Utang Bersih"
        ],

        formula:
            "DER Berbasis Utang Berbunga =\n" +
            "Total Utang Berbunga ÷ Total Ekuitas\n\n" +
            "Interest Coverage = EBIT ÷ Beban Bunga\n\n" +
            "Net Debt = Utang Berbunga − Kas dan Setara Kas\n\n" +
            "Catatan: sebagian sumber menghitung DER memakai total liabilitas. Periksa definisinya sebelum membandingkan.",

        good:
            "Secara umum, utang yang terkendali merupakan tanda positif.\n\n" +
            "DER yang menurun dapat berarti beban utang relatif terhadap ekuitas semakin kecil.\n\n" +
            "Interest Coverage yang tinggi biasanya menunjukkan kemampuan membayar bunga lebih baik.",

        example:
            "Perusahaan memiliki:\n\n" +
            "Utang berbunga: Rp30 miliar\n" +
            "Ekuitas: Rp100 miliar\n\n" +
            "DER berbasis utang berbunga = 30 ÷ 100 = 0,3x\n\n" +
            "Artinya, setiap Rp1 ekuitas dibandingkan dengan Rp0,30 utang berbunga.",

        warning:
            "DER rendah belum tentu perusahaan aman.\n\n" +
            "Periksa juga kapan utangnya jatuh tempo, berapa kas tersedia, dan apakah laba operasinya cukup untuk membayar bunga.\n\n" +
            "DER bukan ukuran utama untuk bank karena struktur pendanaannya berbeda.",

        source:
            "Laporan Posisi Keuangan dan Catatan atas Laporan Keuangan.\n\n" +
            "Cari akun: Pinjaman Bank, Utang Obligasi, Liabilitas Sewa, Kas dan Setara Kas, Total Ekuitas, serta Beban Keuangan."
    },


    /* ================================
       06. CASH FLOW
    ================================ */

    {
        title: "Arus Kas: OCF dan FCF",
        author: "Warren Buffett & Aswath Damodaran",

        meaning:
            "Arus kas menunjukkan uang yang benar-benar masuk dan keluar dari perusahaan.\n\n" +
            "OCF adalah kas yang dihasilkan dari kegiatan usaha sehari-hari.\n\n" +
            "FCF adalah kas yang tersisa setelah perusahaan membayar belanja modal.\n\n" +
            "Bayangkan toko mencatat banyak penjualan, tetapi sebagian pelanggan belum membayar. Penjualan tercatat, namun uangnya belum semuanya diterima.",

        terms: [
            "Cash Flow — Arus Kas",
            "OCF — Operating Cash Flow",
            "CFO — Cash Flow from Operations",
            "FCF — Free Cash Flow",
            "CapEx — Capital Expenditure",
            "Operating Activities — Aktivitas Operasi",
            "Investing Activities — Aktivitas Investasi"
        ],

        formula:
            "FCF Sederhana =\n" +
            "Arus Kas Operasi − Belanja Modal\n\n" +
            "Belanja modal biasanya mencakup pembelian aset tetap dan aset produktif lain yang relevan.\n\n" +
            "Untuk valuasi DCF, definisi FCF dapat berbeda, misalnya FCFF dan FCFE.",

        good:
            "OCF yang positif dan stabil biasanya menunjukkan bisnis mampu menghasilkan kas dari kegiatan utamanya.\n\n" +
            "FCF yang positif selama beberapa tahun juga dapat menjadi tanda bahwa perusahaan menghasilkan kas setelah memenuhi kebutuhan belanja modal.",

        example:
            "Arus kas operasi: Rp1,2 triliun\n" +
            "Belanja modal: Rp300 miliar\n\n" +
            "FCF = Rp1,2 triliun − Rp300 miliar\n\n" +
            "FCF = Rp900 miliar\n\n" +
            "Artinya, masih ada kas Rp900 miliar setelah dikurangi belanja modal menurut rumus sederhana tersebut.",

        warning:
            "FCF negatif tidak selalu buruk.\n\n" +
            "Perusahaan yang sedang membangun pabrik baru bisa mengeluarkan kas besar untuk ekspansi.\n\n" +
            "Namun, jika laba terus naik sementara arus kas operasi terus lemah, kamu perlu mencari penyebabnya.",

        source:
            "Laporan Arus Kas.\n\n" +
            "Cari akun: Arus Kas Neto dari Aktivitas Operasi, Pembelian Aset Tetap, Perolehan Aset Tetap, atau Pengeluaran untuk Aset Tetap."
    },


    /* ================================
       07. MANAJEMEN
    ================================ */

    {
        title: "Kualitas Manajemen",
        author: "Warren Buffett",

        meaning:
            "Manajemen adalah orang-orang yang menjalankan perusahaan, seperti direksi dan pimpinan perusahaan.\n\n" +
            "Bisnis bagus tetap bisa bermasalah jika dikelola dengan buruk.\n\n" +
            "Kita ingin mengetahui apakah manajemen menggunakan uang perusahaan dengan bijak dan menjalankan bisnis secara bertanggung jawab.",

        terms: [
            "Management — Manajemen",
            "Board of Directors — Direksi",
            "Corporate Governance — Tata Kelola Perusahaan",
            "Capital Allocation — Alokasi Modal",
            "Related Party Transactions — Transaksi Pihak Berelasi",
            "Dividend Policy — Kebijakan Dividen"
        ],

        formula:
            "Tidak ada satu rumus yang bisa langsung mengukur kualitas manajemen.\n\n" +
            "Bandingkan janji, keputusan, dan hasil nyata perusahaan selama beberapa tahun.",

        good:
            "Manajemen yang baik biasanya transparan, disiplin mengelola utang, dan mengambil keputusan investasi yang menghasilkan manfaat jangka panjang.\n\n" +
            "Lihat apakah strategi yang diumumkan benar-benar menghasilkan pertumbuhan bisnis dan keuntungan.",

        example:
            "Perusahaan menghasilkan laba Rp1 triliun.\n\n" +
            "Manajemen dapat membagikannya sebagai dividen, membayar utang, atau membangun bisnis baru.\n\n" +
            "Keputusan yang baik bergantung pada pilihan mana yang paling bermanfaat bagi perusahaan dan pemegang saham dalam jangka panjang.",

        warning:
            "Jangan hanya percaya presentasi atau janji manajemen.\n\n" +
            "Periksa apakah target yang pernah diumumkan benar-benar tercapai.\n\n" +
            "Waspadai transaksi yang merugikan pemegang saham minoritas atau masalah tata kelola.",

        source:
            "Laporan Tahunan.\n\n" +
            "Cari bagian: Direksi, Tata Kelola Perusahaan, Analisis dan Pembahasan Manajemen, Manajemen Risiko, serta Transaksi Pihak Berelasi."
    },


    /* ================================
       08. VALUASI
    ================================ */

    {
        title: "Menghitung Nilai Wajar Saham",
        author: "Aswath Damodaran & Benjamin Graham",

        meaning:
            "Nilai wajar atau nilai intrinsik adalah perkiraan berapa nilai ekonomi sebuah saham berdasarkan kondisi bisnis dan kemampuannya menghasilkan uang di masa depan.\n\n" +
            "Harga saham di pasar bisa berbeda dari nilai tersebut.\n\n" +
            "Bayangkan sebuah toko menurut perhitunganmu bernilai Rp500 juta, tetapi pemiliknya menjual seharga Rp350 juta. Toko tersebut terlihat murah jika perkiraan nilainya benar.",

        terms: [
            "Intrinsic Value — Nilai Intrinsik",
            "Fair Value — Nilai Wajar",
            "Valuation — Valuasi",
            "DCF — Discounted Cash Flow",
            "PER — Price to Earnings Ratio",
            "PBV — Price to Book Value",
            "Discount Rate — Tingkat Diskonto",
            "Terminal Value — Nilai Terminal"
        ],

        formula:
            "PER = Harga Saham ÷ EPS\n\n" +
            "PBV = Harga Saham ÷ Nilai Buku per Saham\n\n" +
            "DCF = Jumlah nilai sekarang dari arus kas masa depan, dengan memperhitungkan nilai terminal jika relevan.\n\n" +
            "PER dan PBV adalah rasio pembanding harga, bukan rumus yang otomatis menghasilkan nilai intrinsik.",

        good:
            "Saham lebih menarik untuk diteliti jika harga pasarnya berada di bawah estimasi nilai intrinsik yang dihitung secara masuk akal.\n\n" +
            "Bandingkan juga valuasi dengan perusahaan sejenis dan prospek pertumbuhannya.",

        example:
            "Kamu memperkirakan nilai intrinsik saham sebesar Rp5.000 per lembar.\n\n" +
            "Harga pasar saat ini Rp3.500.\n\n" +
            "Saham terlihat lebih murah daripada estimasi nilainya.\n\n" +
            "Namun, kamu tetap perlu memeriksa apakah asumsi valuasinya realistis.",

        warning:
            "Nilai intrinsik adalah estimasi, bukan angka pasti.\n\n" +
            "PER rendah tidak selalu berarti murah. Bisa saja laba perusahaan akan turun.\n\n" +
            "PBV rendah juga tidak otomatis bagus jika kualitas aset atau keuntungan perusahaan buruk.",

        source:
            "Harga saham pasar, laporan keuangan, proyeksi bisnis, dan perhitungan valuasi investor.\n\n" +
            "Untuk PER dan PBV, cari EPS, Total Ekuitas, serta Jumlah Saham Beredar."
    },


    /* ================================
       09. MARGIN OF SAFETY
    ================================ */

    {
        title: "Margin of Safety",
        author: "Benjamin Graham",

        meaning:
            "Margin of Safety adalah selisih antara perkiraan nilai intrinsik saham dengan harga yang harus kamu bayar.\n\n" +
            "Bahasa gampangnya: kamu ingin membeli dengan harga yang memberikan ruang jika perhitunganmu ternyata kurang tepat.",

        terms: [
            "Margin of Safety — Margin Keamanan",
            "Intrinsic Value — Nilai Intrinsik",
            "Market Price — Harga Pasar",
            "Undervalued — Diperdagangkan di Bawah Estimasi Nilai",
            "Overvalued — Diperdagangkan di Atas Estimasi Nilai"
        ],

        formula:
            "Margin of Safety =\n" +
            "(Nilai Intrinsik − Harga Pasar)\n" +
            "÷ Nilai Intrinsik × 100%",

        good:
            "Semakin besar selisih harga pasar di bawah estimasi nilai intrinsik, semakin besar ruang terhadap kesalahan perhitungan.\n\n" +
            "Namun, ruang tersebut hanya bermakna jika estimasi nilai intrinsiknya cukup dapat dipercaya.",

        example:
            "Estimasi nilai intrinsik: Rp5.000\n" +
            "Harga pasar: Rp3.500\n\n" +
            "Margin of Safety =\n" +
            "(5.000 − 3.500) ÷ 5.000 × 100%\n\n" +
            "Hasil = 30%\n\n" +
            "Artinya, harga pasar berada 30% di bawah estimasi nilai intrinsik.",

        warning:
            "Margin of Safety 30% bukan berarti saham pasti naik 30%.\n\n" +
            "Harga saham masih bisa turun dan estimasi nilai intrinsik bisa saja salah.\n\n" +
            "Perusahaan yang bisnisnya memburuk juga dapat terlihat murah untuk waktu yang lama.",

        source:
            "Hasil valuasi pribadi dan harga saham terbaru di pasar."
    },


    /* ================================
       10. MANAJEMEN RISIKO
    ================================ */

    {
        title: "Manajemen Risiko Investasi",
        author: "Prinsip Manajemen Portofolio",

        meaning:
            "Setelah menemukan perusahaan yang terlihat menarik, kamu tetap harus menentukan berapa banyak uang yang masuk akal untuk diinvestasikan.\n\n" +
            "Saham perusahaan bagus tetap bisa turun karena kondisi ekonomi, perubahan industri, atau kesalahan perkiraan.",

        terms: [
            "Risk Management — Manajemen Risiko",
            "Portfolio — Portofolio",
            "Diversification — Diversifikasi",
            "Position Sizing — Ukuran Posisi",
            "Concentration Risk — Risiko Konsentrasi",
            "Investment Thesis — Alasan atau Dasar Investasi"
        ],

        formula:
            "Bobot Saham dalam Portofolio =\n" +
            "Nilai Investasi pada Saham Tersebut\n" +
            "÷ Total Nilai Portofolio × 100%",

        good:
            "Investasi lebih terencana ketika kamu memahami risiko perusahaan, memiliki dana darurat terpisah, dan tidak menempatkan terlalu banyak dana pada satu saham tanpa alasan yang kuat.\n\n" +
            "Tentukan juga kondisi yang membuat alasan investasimu tidak berlaku lagi.",

        example:
            "Total portofolio: Rp20 juta\n" +
            "Nilai saham A: Rp4 juta\n\n" +
            "Bobot saham A = 4 ÷ 20 × 100%\n\n" +
            "Hasil = 20%\n\n" +
            "Artinya, 20% nilai portofoliomu berada pada saham A.",

        warning:
            "Jangan membeli saham hanya karena takut ketinggalan kenaikan harga.\n\n" +
            "Jangan menggunakan dana kebutuhan mendesak.\n\n" +
            "Tidak ada ukuran posisi yang cocok untuk semua investor.",

        source:
            "Catatan portofolio pribadi, kondisi keuangan, tujuan investasi, dan hasil penelitian perusahaan."
    }
];


/* =====================================================
   2. KAMUS ISTILAH KEUANGAN
===================================================== */

const dictionary = [

    {
        term: "Revenue",
        fullname: "Pendapatan / Penjualan",
        category: "profit",
        meaning: "Jumlah pendapatan yang diperoleh perusahaan dari menjual barang atau jasa sebelum dikurangi biaya.",
        formula: "Pertumbuhan = (Pendapatan Baru − Pendapatan Lama) ÷ Pendapatan Lama × 100%",
        good: "Pendapatan yang meningkat secara konsisten umumnya menjadi tanda bisnis berkembang.",
        warning: "Pendapatan naik belum tentu laba ikut naik.",
        source: "Cari: Pendapatan, Penjualan Neto, Penjualan Bersih, atau Pendapatan Usaha."
    },

    {
        term: "Net Income",
        fullname: "Laba Bersih",
        category: "profit",
        meaning: "Keuntungan perusahaan setelah memperhitungkan seluruh pendapatan, biaya, dan pajak.",
        formula: "Secara sederhana: Total Pendapatan − Total Beban = Laba Bersih.",
        good: "Laba yang meningkat secara konsisten biasanya menjadi tanda positif.",
        warning: "Periksa apakah laba berasal dari bisnis utama atau keuntungan satu kali.",
        source: "Cari: Laba Tahun Berjalan atau Laba yang Diatribusikan kepada Pemilik Entitas Induk."
    },

    {
        term: "EPS",
        fullname: "Earnings per Share — Laba per Saham",
        category: "profit",
        meaning: "Besarnya laba yang dihitung untuk setiap lembar saham biasa.",
        formula: "EPS Dasar = Laba untuk Pemegang Saham Biasa ÷ Rata-rata Tertimbang Saham Biasa Beredar.",
        good: "EPS yang meningkat secara konsisten umumnya positif.",
        warning: "EPS bisa berubah karena jumlah saham beredar berubah.",
        source: "Cari: Laba per Saham Dasar pada Laporan Laba Rugi atau catatannya."
    },

    {
        term: "Gross Profit",
        fullname: "Laba Bruto / Laba Kotor",
        category: "profit",
        meaning: "Keuntungan penjualan setelah dikurangi biaya langsung untuk menghasilkan produk.",
        formula: "Laba Bruto = Penjualan Bersih − Beban Pokok Penjualan.",
        good: "Laba bruto yang bertumbuh dengan margin stabil atau meningkat dapat menjadi tanda positif.",
        warning: "Laba bruto belum memperhitungkan semua biaya perusahaan.",
        source: "Cari: Laba Bruto dan Beban Pokok Penjualan."
    },

    {
        term: "Gross Profit Margin",
        fullname: "Margin Laba Bruto",
        category: "profit",
        meaning: "Persentase pendapatan yang tersisa setelah dikurangi biaya langsung produksi atau penjualan.",
        formula: "Gross Margin = Laba Bruto ÷ Pendapatan × 100%.",
        good: "Margin meningkat dapat menunjukkan harga jual atau efisiensi produksi membaik.",
        warning: "Bandingkan dengan perusahaan sejenis.",
        source: "Cari: Laba Bruto dan Pendapatan."
    },

    {
        term: "Net Profit Margin",
        fullname: "Margin Laba Bersih",
        category: "profit",
        meaning: "Persentase pendapatan yang akhirnya menjadi laba bersih.",
        formula: "Net Profit Margin = Laba Bersih ÷ Pendapatan × 100%.",
        good: "Margin yang stabil atau meningkat bisa menunjukkan perusahaan menjaga keuntungan.",
        warning: "Margin dapat terpengaruh keuntungan atau kerugian satu kali.",
        source: "Cari: Laba Bersih dan Pendapatan."
    },

    {
        term: "EBIT",
        fullname: "Earnings Before Interest and Taxes",
        category: "profit",
        meaning: "Ukuran laba sebelum bunga dan pajak. Sering dipakai untuk melihat kinerja operasi.",
        formula: "Secara sederhana: Laba Sebelum Pajak + Beban Bunga Neto, dengan penyesuaian jika diperlukan.",
        good: "EBIT yang meningkat secara berkelanjutan dapat menjadi tanda operasi membaik.",
        warning: "EBIT tidak sama dengan uang kas yang diterima perusahaan.",
        source: "Cari: Laba Usaha, Laba Sebelum Pajak, Beban Keuangan, dan Pendapatan Keuangan."
    },

    {
        term: "EBITDA",
        fullname: "Earnings Before Interest, Taxes, Depreciation and Amortization",
        category: "profit",
        meaning: "Ukuran laba sebelum bunga, pajak, penyusutan, dan amortisasi.",
        formula: "EBITDA = EBIT + Depresiasi + Amortisasi, sesuai definisi yang digunakan.",
        good: "EBITDA meningkat bisa menunjukkan kemampuan operasi menghasilkan laba sebelum biaya tertentu membaik.",
        warning: "EBITDA bukan arus kas dan tidak memperhitungkan kebutuhan belanja modal.",
        source: "Cari: Laba Usaha, Beban Penyusutan, dan Beban Amortisasi."
    },

    {
        term: "CAGR",
        fullname: "Compound Annual Growth Rate",
        category: "profit",
        meaning: "Tingkat pertumbuhan tahunan majemuk yang menggambarkan perubahan dari nilai awal ke nilai akhir.",
        formula: "CAGR = (Nilai Akhir ÷ Nilai Awal)^(1 ÷ Jumlah Tahun) − 1.",
        good: "CAGR positif menunjukkan pertumbuhan selama periode tersebut jika nilai awal dan akhir positif.",
        warning: "CAGR tidak menunjukkan naik-turunnya angka di antara dua tahun tersebut.",
        source: "Hitung dari data pendapatan, laba, atau EPS beberapa tahun."
    },

    {
        term: "ROE",
        fullname: "Return on Equity",
        category: "ratio",
        meaning: "Mengukur seberapa efektif perusahaan menghasilkan laba dari modal pemegang saham.",
        formula: "ROE = Laba Bersih ÷ Rata-rata Ekuitas × 100%.",
        good: "ROE tinggi dan stabil selama beberapa tahun biasanya menjadi tanda positif.",
        warning: "ROE bisa sangat tinggi karena utang besar atau ekuitas rendah.",
        source: "Cari: Laba Bersih dan Total Ekuitas. Kadang tercantum di Ikhtisar Rasio Keuangan."
    },

    {
        term: "ROA",
        fullname: "Return on Assets",
        category: "ratio",
        meaning: "Mengukur kemampuan perusahaan menghasilkan laba menggunakan seluruh asetnya.",
        formula: "ROA umum = Laba Bersih ÷ Rata-rata Total Aset × 100%.",
        good: "ROA meningkat dapat menunjukkan penggunaan aset semakin produktif.",
        warning: "Cara perhitungan ROA untuk bank dapat berbeda. Bandingkan perusahaan sejenis.",
        source: "Cari: Laba Bersih dan Total Aset. Bisa juga ada pada Ikhtisar Rasio Keuangan."
    },

    {
        term: "ROIC",
        fullname: "Return on Invested Capital",
        category: "ratio",
        meaning: "Mengukur kemampuan bisnis menghasilkan keuntungan operasi setelah pajak dari modal yang digunakan.",
        formula: "ROIC = NOPAT ÷ Rata-rata Invested Capital × 100%.",
        good: "ROIC yang secara konsisten lebih tinggi daripada WACC berpotensi menciptakan nilai.",
        warning: "ROIC sering harus dihitung sendiri dan definisi invested capital dapat berbeda.",
        source: "Cari: Laba Usaha, Pajak, Utang Berbunga, Ekuitas, dan Kas."
    },

    {
        term: "DER",
        fullname: "Debt to Equity Ratio",
        category: "ratio",
        meaning: "Membandingkan jumlah utang dengan modal pemegang saham.",
        formula: "DER = Utang ÷ Ekuitas. Pastikan apakah sumber memakai utang berbunga atau total liabilitas.",
        good: "Utang yang terkendali dan kemampuan membayar yang kuat umumnya positif.",
        warning: "DER rendah tidak otomatis aman. Untuk bank, DER bukan ukuran utama.",
        source: "Cari: Total Ekuitas, Pinjaman Bank, Utang Obligasi, dan Total Liabilitas."
    },

    {
        term: "Current Ratio",
        fullname: "Rasio Lancar",
        category: "ratio",
        meaning: "Membandingkan aset lancar dengan kewajiban jangka pendek.",
        formula: "Current Ratio = Aset Lancar ÷ Liabilitas Jangka Pendek.",
        good: "Rasio yang memadai dapat menunjukkan kemampuan memenuhi kewajiban jangka pendek.",
        warning: "Terlalu tinggi juga bisa berarti aset lancar kurang produktif.",
        source: "Cari: Total Aset Lancar dan Total Liabilitas Jangka Pendek."
    },

    {
        term: "Interest Coverage",
        fullname: "Rasio Kemampuan Membayar Bunga",
        category: "ratio",
        meaning: "Mengukur seberapa besar laba operasi dibanding beban bunga.",
        formula: "Interest Coverage = EBIT ÷ Beban Bunga.",
        good: "Semakin besar kemampuan menutup beban bunga, umumnya semakin aman.",
        warning: "Laba operasi tidak selalu sama dengan kas tersedia.",
        source: "Cari: EBIT atau Laba Usaha dan Beban Bunga."
    },

    {
        term: "Assets",
        fullname: "Aset",
        category: "ratio",
        meaning: "Sumber daya ekonomi milik atau yang dikendalikan perusahaan, seperti kas, persediaan, bangunan, dan mesin.",
        formula: "Aset = Liabilitas + Ekuitas.",
        good: "Aset yang digunakan secara produktif membantu perusahaan menghasilkan keuntungan.",
        warning: "Aset besar belum tentu berarti perusahaan menguntungkan.",
        source: "Cari: Total Aset pada Laporan Posisi Keuangan."
    },

    {
        term: "Equity",
        fullname: "Ekuitas",
        category: "ratio",
        meaning: "Bagian aset perusahaan yang tersisa setelah dikurangi seluruh liabilitas.",
        formula: "Ekuitas = Aset − Liabilitas.",
        good: "Ekuitas yang bertumbuh karena laba ditahan dapat menjadi tanda positif.",
        warning: "Ekuitas naik juga bisa disebabkan penerbitan saham baru.",
        source: "Cari: Total Ekuitas pada Laporan Posisi Keuangan."
    },

    {
        term: "Liabilities",
        fullname: "Liabilitas / Kewajiban",
        category: "ratio",
        meaning: "Kewajiban perusahaan kepada pihak lain, termasuk utang usaha dan pinjaman.",
        formula: "Liabilitas = Aset − Ekuitas.",
        good: "Kewajiban yang sesuai kemampuan keuangan perusahaan lebih mudah dikelola.",
        warning: "Tidak semua liabilitas merupakan pinjaman berbunga.",
        source: "Cari: Total Liabilitas pada Laporan Posisi Keuangan."
    },

    {
        term: "OCF",
        fullname: "Operating Cash Flow",
        category: "cash",
        meaning: "Kas yang masuk atau keluar dari kegiatan usaha utama perusahaan.",
        formula: "Lihat jumlah Arus Kas Neto dari Aktivitas Operasi.",
        good: "OCF positif dan konsisten umumnya menunjukkan bisnis menghasilkan kas.",
        warning: "OCF dapat berfluktuasi karena perubahan persediaan dan piutang.",
        source: "Cari: Arus Kas Neto dari Aktivitas Operasi."
    },

    {
        term: "FCF",
        fullname: "Free Cash Flow",
        category: "cash",
        meaning: "Kas yang tersisa setelah arus kas operasi dikurangi belanja modal.",
        formula: "FCF Sederhana = OCF − CapEx.",
        good: "FCF positif secara konsisten dapat menunjukkan kemampuan menghasilkan kas setelah investasi aset.",
        warning: "FCF negatif bisa terjadi saat perusahaan sedang ekspansi.",
        source: "Cari: Arus Kas Operasi dan Pembelian Aset Tetap."
    },

    {
        term: "CapEx",
        fullname: "Capital Expenditure",
        category: "cash",
        meaning: "Pengeluaran untuk membeli atau membangun aset jangka panjang, seperti mesin dan pabrik.",
        formula: "Jumlah belanja modal dilihat dari pengeluaran investasi aset yang relevan.",
        good: "CapEx yang menghasilkan pertumbuhan keuntungan di masa depan dapat bermanfaat.",
        warning: "CapEx besar belum tentu menghasilkan pengembalian yang baik.",
        source: "Cari: Pembelian Aset Tetap, Perolehan Aset Tetap, dan pengeluaran investasi aset."
    },

    {
        term: "PER",
        fullname: "Price to Earnings Ratio",
        category: "valuation",
        meaning: "Membandingkan harga saham dengan laba per saham.",
        formula: "PER = Harga Saham ÷ EPS.",
        good: "PER lebih rendah bisa menarik jika kualitas laba dan prospek perusahaan tetap baik.",
        warning: "PER rendah tidak otomatis murah. PER juga kurang bermakna jika EPS nol atau negatif.",
        source: "Cari: Harga Saham dan Laba per Saham Dasar."
    },

    {
        term: "PBV",
        fullname: "Price to Book Value",
        category: "valuation",
        meaning: "Membandingkan harga saham dengan nilai buku per saham.",
        formula: "PBV = Harga Saham ÷ (Ekuitas yang Relevan ÷ Jumlah Saham Beredar).",
        good: "PBV rendah bisa menarik jika aset dan kemampuan menghasilkan laba perusahaan berkualitas.",
        warning: "PBV rendah tidak selalu murah. Kualitas aset dan ROE tetap penting.",
        source: "Cari: Harga Saham, Total Ekuitas yang Diatribusikan kepada Pemilik Entitas Induk, dan Jumlah Saham Beredar."
    },

    {
        term: "DCF",
        fullname: "Discounted Cash Flow",
        category: "valuation",
        meaning: "Metode memperkirakan nilai bisnis dari arus kas masa depan yang dihitung ke nilai saat ini.",
        formula: "Nilai = Jumlah arus kas masa depan yang didiskontokan + nilai terminal yang didiskontokan, jika digunakan.",
        good: "DCF membantu menghubungkan nilai perusahaan dengan kemampuan menghasilkan kas.",
        warning: "Hasil DCF sangat bergantung pada asumsi pertumbuhan, risiko, dan tingkat diskonto.",
        source: "Gunakan proyeksi arus kas, biaya modal, dan data laporan keuangan."
    },

    {
        term: "WACC",
        fullname: "Weighted Average Cost of Capital",
        category: "valuation",
        meaning: "Perkiraan biaya rata-rata modal yang digunakan perusahaan dari sumber utang dan ekuitas.",
        formula: "WACC = (E/V × Ke) + (D/V × Kd × (1 − T)).",
        good: "ROIC di atas WACC secara berkelanjutan dapat menunjukkan penciptaan nilai.",
        warning: "WACC merupakan estimasi yang bergantung pada asumsi dan kondisi pasar.",
        source: "Hitung dari struktur modal, biaya utang, biaya ekuitas, dan tarif pajak."
    },

    {
        term: "NOPAT",
        fullname: "Net Operating Profit After Tax",
        category: "profit",
        meaning: "Perkiraan laba operasi setelah pajak, tanpa memasukkan pengaruh cara perusahaan membiayai bisnis.",
        formula: "NOPAT Sederhana = EBIT × (1 − Tarif Pajak Operasional).",
        good: "NOPAT meningkat dapat menunjukkan keuntungan operasi setelah pajak membaik.",
        warning: "NOPAT biasanya perlu dihitung dan dapat membutuhkan penyesuaian.",
        source: "Cari: Laba Usaha, informasi pajak, dan catatan keuangan."
    },

    {
        term: "NIM",
        fullname: "Net Interest Margin",
        category: "ratio",
        meaning: "Rasio perbankan yang menunjukkan margin pendapatan bunga bersih dibanding aset produktif tertentu.",
        formula: "NIM = Pendapatan Bunga Bersih ÷ Rata-rata Aset Produktif sesuai definisi pelaporan.",
        good: "NIM yang sehat dapat menunjukkan kemampuan bank menghasilkan margin bunga.",
        warning: "NIM tinggi tidak otomatis bagus jika kualitas kredit memburuk.",
        source: "Laporan Keuangan Bank atau bagian Rasio Keuangan Bank."
    },

    {
        term: "NPL",
        fullname: "Non-Performing Loan",
        category: "ratio",
        meaning: "Rasio kredit bermasalah pada bank.",
        formula: "NPL Gross = Kredit Bermasalah ÷ Total Kredit × 100%, sesuai definisi pelaporan.",
        good: "NPL yang lebih rendah umumnya menunjukkan kualitas kredit lebih baik.",
        warning: "Periksa juga pencadangan kerugian kredit dan tren kualitas kredit.",
        source: "Laporan Keuangan Bank — Rasio Kualitas Aset atau Risiko Kredit."
    },

    {
        term: "CAR",
        fullname: "Capital Adequacy Ratio",
        category: "ratio",
        meaning: "Rasio kecukupan modal bank untuk menghadapi risiko.",
        formula: "CAR = Modal Regulasi ÷ Aset Tertimbang Menurut Risiko × 100%.",
        good: "CAR yang memadai menunjukkan bank memiliki bantalan modal terhadap risiko.",
        warning: "CAR tinggi tidak otomatis berarti bank lebih menguntungkan.",
        source: "Laporan Keuangan Bank — Kewajiban Penyediaan Modal Minimum atau CAR."
    },

    {
        term: "LDR",
        fullname: "Loan to Deposit Ratio",
        category: "ratio",
        meaning: "Rasio yang membandingkan kredit bank dengan dana simpanan nasabah.",
        formula: "LDR = Total Kredit ÷ Dana Pihak Ketiga × 100%, mengikuti definisi pelaporan.",
        good: "LDR yang seimbang dapat menunjukkan penyaluran kredit dan likuiditas dikelola dengan baik.",
        warning: "Terlalu tinggi bisa menekan likuiditas, sedangkan terlalu rendah dapat menunjukkan dana belum tersalurkan secara optimal.",
        source: "Laporan Keuangan Bank — Rasio Likuiditas atau LDR."
    },

    {
        term: "CASA",
        fullname: "Current Account Saving Account",
        category: "ratio",
        meaning: "Proporsi dana giro dan tabungan dibandingkan total dana pihak ketiga bank.",
        formula: "CASA Ratio = (Giro + Tabungan) ÷ Dana Pihak Ketiga × 100%.",
        good: "CASA tinggi dapat membantu bank memperoleh sumber dana berbiaya relatif rendah.",
        warning: "Tetap periksa stabilitas simpanan dan biaya dana.",
        source: "Laporan Keuangan Bank — Komposisi Dana Pihak Ketiga."
    },

    {
        term: "Margin of Safety",
        fullname: "Margin Keamanan",
        category: "valuation",
        meaning: "Selisih antara estimasi nilai intrinsik dan harga pasar saham.",
        formula: "(Nilai Intrinsik − Harga Pasar) ÷ Nilai Intrinsik × 100%.",
        good: "Harga pasar yang cukup jauh di bawah estimasi nilai intrinsik memberi ruang terhadap kesalahan perkiraan.",
        warning: "Tidak menjamin keuntungan dan sangat bergantung pada ketepatan estimasi nilai intrinsik.",
        source: "Hitung menggunakan estimasi nilai intrinsik pribadi dan harga saham pasar."
    }

];


/* =====================================================
   3. ELEMENT & STATE
===================================================== */

const STORAGE_PREFIX = "stockguide_v3_";

const cardsContainer = document.getElementById("cards");
const dictionaryList = document.getElementById("dictionaryList");
const dictionarySearch = document.getElementById("dictionarySearch");
const dictionaryFilters = document.getElementById("dictionaryFilters");
const dictionaryCount = document.getElementById("dictionaryCount");
const dictionaryEmpty = document.getElementById("dictionaryEmpty");

let currentTicker = "";
let currentData = createEmptyData();
let currentCategory = "all";
let toastTimer = null;


/* =====================================================
   4. DATA DEFAULT
===================================================== */

function createEmptyData() {
    return {
        company: "",
        checked: Array(steps.length).fill(false),
        notes: Array(steps.length).fill(""),
        conclusion: "",
        decision: ""
    };
}

function storageKey(ticker) {
    return STORAGE_PREFIX + ticker;
}


/* =====================================================
   5. HTML SECURITY
===================================================== */

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);

}


/* =====================================================
   6. NOTIFICATION
===================================================== */

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);

}


/* =====================================================
   7. RENDER 10 ANALYSIS CARDS
===================================================== */

function renderCards() {

    cardsContainer.innerHTML = steps.map((step, index) => {

        const termTags = step.terms.map(term => `
            <span class="financial-term-tag">
                ${escapeHTML(term)}
            </span>
        `).join("");

        return `

            <article
                class="guide-card ${currentData.checked[index] ? "completed" : ""}"
                id="card-${index}"
            >

                <div
                    class="card-header"
                    role="button"
                    tabindex="0"
                    aria-expanded="false"
                    data-toggle="${index}"
                >

                    <div class="card-number">
                        ${String(index + 1).padStart(2, "0")}
                    </div>

                    <div class="card-heading">

                        <h3>
                            ${escapeHTML(step.title)}
                        </h3>

                        <p>
                            ${escapeHTML(step.author)}
                        </p>

                    </div>

                    <span class="card-arrow">
                        ⌄
                    </span>

                </div>


                <div class="card-body">

                    <div class="explain-box">

                        <h4>APA ARTINYA?</h4>

                        <p>
                            ${escapeHTML(step.meaning)}
                        </p>

                    </div>


                    <div class="financial-terms">

                        <h4>
                            ISTILAH KEUANGAN YANG PERLU DIKENAL
                        </h4>

                        <div class="financial-term-list">
                            ${termTags}
                        </div>

                    </div>


                    <div class="formula-box">

                        <h4>
                            RUMUS / CARA MENGHITUNG
                        </h4>

                        <div class="formula-content">
                            ${escapeHTML(step.formula)}
                        </div>

                    </div>


                    <div class="explain-box good">

                        <h4>
                            KAPAN HASILNYA BAGUS?
                        </h4>

                        <p>
                            ${escapeHTML(step.good)}
                        </p>

                    </div>


                    <div class="explain-box example">

                        <h4>
                            CONTOH SEDERHANA
                        </h4>

                        <p>
                            ${escapeHTML(step.example)}
                        </p>

                    </div>


                    <div class="explain-box warning">

                        <h4>
                            KAPAN HARUS HATI-HATI?
                        </h4>

                        <p>
                            ${escapeHTML(step.warning)}
                        </p>

                    </div>


                    <div class="data-source">

                        <strong>
                            DATA DIAMBIL DARI:
                        </strong>

                        <br>

                        ${escapeHTML(step.source).replace(/\n/g, "<br>")}

                    </div>


                    <label
                        class="note-label"
                        for="note-${index}"
                    >
                        Catatan Penelitian Saya
                    </label>

                    <textarea
                        id="note-${index}"
                        data-note="${index}"
                        placeholder="Tuliskan angka, sumber, dan kesimpulan penelitianmu..."
                    >${escapeHTML(currentData.notes[index])}</textarea>


                    <label class="check-row">

                        <input
                            type="checkbox"
                            data-check="${index}"
                            ${currentData.checked[index] ? "checked" : ""}
                        >

                        Saya sudah memeriksa poin ini

                    </label>

                </div>

            </article>

        `;

    }).join("");

    updateProgress();

}


/* =====================================================
   8. PROGRESS
===================================================== */

function updateProgress() {

    const completed = currentData.checked.filter(Boolean).length;

    document.getElementById("progressText").textContent =
        `${completed}/${steps.length}`;

    document.getElementById("progressFill").style.width =
        `${(completed / steps.length) * 100}%`;

}


/* =====================================================
   9. SAVE RESEARCH
===================================================== */

function saveData(silent = false) {

    if (!currentTicker) {

        if (!silent) {
            showToast("Masukkan kode saham terlebih dahulu.");
        }

        return;
    }

    currentData.company =
        document.getElementById("company").value.trim();

    currentData.conclusion =
        document.getElementById("conclusion").value;

    currentData.decision =
        document.getElementById("decision").value;

    try {

        localStorage.setItem(
            storageKey(currentTicker),
            JSON.stringify(currentData)
        );

        if (!silent) {
            showToast("Catatan penelitian berhasil disimpan.");
        }

    } catch (error) {

        showToast("Gagal menyimpan. Coba ekspor catatan sebagai cadangan.");

    }

}


/* =====================================================
   10. LOAD RESEARCH
===================================================== */

function loadCompany() {

    const ticker = document.getElementById("ticker")
        .value.trim().toUpperCase();

    if (!ticker) {
        showToast("Isi kode saham terlebih dahulu.");
        return;
    }

    if (currentTicker && currentTicker !== ticker) {
        saveData(true);
    }

    const typedCompany =
        document.getElementById("company").value.trim();

    currentTicker = ticker;

    let saved = null;

    try {

        const raw = localStorage.getItem(storageKey(ticker));

        if (raw) {
            saved = JSON.parse(raw);
        }

    } catch (error) {
        saved = null;
    }

    currentData = {
        ...createEmptyData(),
        ...(saved || {}),

        checked: Array.from(
            { length: steps.length },
            (_, i) => Boolean(saved?.checked?.[i])
        ),

        notes: Array.from(
            { length: steps.length },
            (_, i) => String(saved?.notes?.[i] || "")
        )
    };

    if (typedCompany) {
        currentData.company = typedCompany;
    }

    document.getElementById("ticker").value = ticker;

    document.getElementById("company").value =
        currentData.company;

    document.getElementById("conclusion").value =
        currentData.conclusion;

    document.getElementById("decision").value =
        currentData.decision;

    document.getElementById("activeCompany").textContent =
        `Sedang menganalisis: ${ticker}` +
        (currentData.company ? ` — ${currentData.company}` : "");

    renderCards();

    saveData(true);

    showToast(`Analisis ${ticker} siap digunakan.`);

}


/* =====================================================
   11. NEW RESEARCH
===================================================== */

function startNewCompany() {

    saveData(true);

    currentTicker = "";
    currentData = createEmptyData();

    document.getElementById("ticker").value = "";
    document.getElementById("company").value = "";

    document.getElementById("conclusion").value = "";
    document.getElementById("decision").value = "";

    document.getElementById("activeCompany").textContent =
        "Belum ada perusahaan yang dipilih.";

    renderCards();

    document.getElementById("ticker").focus();

    showToast("Silakan masukkan perusahaan berikutnya.");

}


/* =====================================================
   12. EXPORT RESEARCH
===================================================== */

function exportNotes() {

    if (!currentTicker) {
        showToast("Pilih perusahaan terlebih dahulu.");
        return;
    }

    saveData(true);

    const lines = [

        "STOCKGUIDE — ANALISIS SAHAM",
        "==========================",

        `Kode Saham: ${currentTicker}`,
        `Perusahaan: ${currentData.company || "-"}`,
        `Tanggal: ${new Date().toLocaleString("id-ID")}`,

        ""

    ];

    steps.forEach((step, index) => {

        lines.push(

            `${index + 1}. ${step.title.toUpperCase()}`,

            `Referensi: ${step.author}`,

            `Status: ${currentData.checked[index] ? "SELESAI" : "BELUM"}`,

            `Catatan: ${currentData.notes[index] || "-"}`,

            ""

        );

    });

    lines.push(

        "KESIMPULAN",
        currentData.conclusion || "-",

        "",

        "KEPUTUSAN",
        currentData.decision || "Belum menentukan"

    );

    const blob = new Blob(
        [lines.join("\n")],
        { type: "text/plain;charset=utf-8" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `Analisis_${currentTicker}.txt`;

    document.body.appendChild(link);

    link.click();
    link.remove();

    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 1000);

    showToast("Catatan berhasil diekspor.");

}


/* =====================================================
   13. DICTIONARY CATEGORY LABELS
===================================================== */

const categoryLabels = {

    profit: "Pendapatan & Laba",
    ratio: "Rasio Keuangan",
    cash: "Arus Kas",
    valuation: "Valuasi"

};


/* =====================================================
   14. RENDER DICTIONARY
===================================================== */

function renderDictionary() {

    const query = dictionarySearch.value
        .trim()
        .toLowerCase();

    const filtered = dictionary.filter(item => {

        const matchesCategory =
            currentCategory === "all" ||
            item.category === currentCategory;

        const searchableText = [
            item.term,
            item.fullname,
            item.meaning,
            item.source
        ].join(" ").toLowerCase();

        const matchesSearch =
            searchableText.includes(query);

        return matchesCategory && matchesSearch;

    });

    dictionaryCount.textContent =
        `${filtered.length} istilah`;

    dictionaryEmpty.hidden = filtered.length > 0;

    dictionaryList.innerHTML = filtered.map(item => {

        return `

            <article class="dictionary-card">

                <div class="dictionary-card-header">

                    <div>

                        <h3>
                            ${escapeHTML(item.term)}
                        </h3>

                        <p class="dictionary-fullname">
                            ${escapeHTML(item.fullname)}
                        </p>

                    </div>

                    <span class="dictionary-category">
                        ${escapeHTML(categoryLabels[item.category] || item.category)}
                    </span>

                </div>


                <p class="dictionary-description">
                    ${escapeHTML(item.meaning)}
                </p>


                <div class="dictionary-detail formula">

                    <h4>
                        RUMUS / CARA MENGHITUNG
                    </h4>

                    <p>
                        ${escapeHTML(item.formula)}
                    </p>

                </div>


                <div class="dictionary-detail good">

                    <h4>
                        KAPAN BAGUS?
                    </h4>

                    <p>
                        ${escapeHTML(item.good)}
                    </p>

                </div>


                <div class="dictionary-detail warning">

                    <h4>
                        HAL YANG PERLU DIWASPADAI
                    </h4>

                    <p>
                        ${escapeHTML(item.warning)}
                    </p>

                </div>


                <div class="dictionary-detail source">

                    <h4>
                        CARI DI LAPORAN KEUANGAN
                    </h4>

                    <p>
                        ${escapeHTML(item.source)}
                    </p>

                </div>

            </article>

        `;

    }).join("");

}


/* =====================================================
   15. DICTIONARY SEARCH EVENT
===================================================== */

dictionarySearch.addEventListener("input", () => {

    renderDictionary();

});


/* =====================================================
   16. DICTIONARY FILTER EVENT
===================================================== */

dictionaryFilters.addEventListener("click", event => {

    const button = event.target.closest("[data-category]");

    if (!button) return;

    currentCategory = button.dataset.category;

    dictionaryFilters.querySelectorAll(".filter-btn")
        .forEach(item => {

            item.classList.toggle(
                "active",
                item === button
            );

        });

    renderDictionary();

});


/* =====================================================
   17. CARD OPEN / CLOSE
===================================================== */

cardsContainer.addEventListener("click", event => {

    const toggle = event.target.closest("[data-toggle]");

    if (!toggle) return;

    const index = Number(toggle.dataset.toggle);

    const card = document.getElementById(`card-${index}`);

    card.classList.toggle("open");

    toggle.setAttribute(
        "aria-expanded",
        String(card.classList.contains("open"))
    );

});


/* =====================================================
   18. KEYBOARD SUPPORT
===================================================== */

cardsContainer.addEventListener("keydown", event => {

    const toggle = event.target.closest("[data-toggle]");

    if (!toggle) return;

    if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        toggle.click();

    }

});


/* =====================================================
   19. SAVE NOTES AUTOMATICALLY
===================================================== */

cardsContainer.addEventListener("input", event => {

    if (!event.target.matches("[data-note]")) return;

    const index = Number(event.target.dataset.note);

    currentData.notes[index] = event.target.value;

    saveData(true);

});


/* =====================================================
   20. CHECKLIST EVENTS
===================================================== */

cardsContainer.addEventListener("change", event => {

    if (!event.target.matches("[data-check]")) return;

    const index = Number(event.target.dataset.check);

    currentData.checked[index] = event.target.checked;

    document.getElementById(`card-${index}`)
        .classList.toggle(
            "completed",
            event.target.checked
        );

    updateProgress();

    saveData(true);

});


/* =====================================================
   21. BUTTON EVENTS
===================================================== */

document.getElementById("loadBtn")
    .addEventListener("click", loadCompany);

document.getElementById("newBtn")
    .addEventListener("click", startNewCompany);

document.getElementById("saveBtn")
    .addEventListener("click", () => saveData());

document.getElementById("exportBtn")
    .addEventListener("click", exportNotes);


/* =====================================================
   22. AUTO SAVE CONCLUSION
===================================================== */

document.getElementById("conclusion")
    .addEventListener("input", () => saveData(true));

document.getElementById("decision")
    .addEventListener("change", () => saveData(true));


/* =====================================================
   23. ENTER KEY ON TICKER
===================================================== */

document.getElementById("ticker")
    .addEventListener("keydown", event => {

        if (event.key === "Enter") {

            event.preventDefault();

            loadCompany();

        }

    });


/* =====================================================
   24. INITIALIZE
===================================================== */

renderCards();
renderDictionary();
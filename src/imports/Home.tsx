export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      {/* ===== BAGIAN HEADER ===== */}
      <header className="bg-gray-700 text-white h-[114px] flex items-center justify-between px-8 shadow-lg sticky top-0 z-10">
        <div className="flex items-center gap-4">
          {/* Perbaikan: Menggunakan tag <img> dengan path yang benar */}
          <img
            src="/image/logo.png" // PASTIKAN nama file ini benar & ada di folder /public/image/
            alt="Logo Aksara Laserwork"
            width="67"
            height="61"
            className="rounded-lg"
          />
          <div className="text-center">
            <p className="font-bold tracking-wider">AKSARA</p>
            <p className="text-sm">LASERWORK</p>
          </div>
        </div>
        <nav className="flex items-center gap-2 text-sm font-semibold">
          <a href="#beranda" className="px-5 py-3 rounded-md bg-gray-900 border border-gray-400">
            BERANDA
          </a>
          <a href="#layanan" className="px-5 py-3 rounded-md hover:bg-gray-800 transition-colors">
            LAYANAN
          </a>
          <a href="#galeri" className="px-5 py-3 rounded-md hover:bg-gray-800 transition-colors">
            GALERI
          </a>
          <a href="#tentang" className="px-5 py-3 rounded-md hover:bg-gray-800 transition-colors">
            TENTANG KAMI
          </a>
          <a href="#kontak" className="px-5 py-3 rounded-md hover:bg-gray-800 transition-colors">
            KONTAK
          </a>
        </nav>
      </header>

      {/* ===== BAGIAN UTAMA HALAMAN ===== */}
      <main className="flex-grow">
        {/* Bagian Hero */}
        <section id="beranda" className="bg-gray-600 text-white flex items-center px-8 py-24">
          <div className="flex-1 space-y-8">
            <h1 className="font-serif text-6xl font-bold max-w-3xl leading-tight">Presisi dalam Setiap Potongan</h1>
            <p className="text-2xl max-w-4xl">Aksara Laserwork menghadirkan layanan laser cutting dan engraving profesional dengan ketelitian tinggi untuk kebutuhan industri maupun kreatif.</p>
            <div className="flex gap-8 pt-8">
              <button className="bg-[#dd7311] font-bold text-xl px-8 py-5 rounded-xl hover:bg-opacity-90 transition-opacity shadow-lg">LIHAT LAYANAN</button>
              <button className="bg-[#dd7311] font-bold text-xl px-8 py-5 rounded-xl hover:bg-opacity-90 transition-opacity shadow-lg">HUBUNGI KAMI</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            {/* Perbaikan: Menggunakan tag <img> dengan path yang benar */}
            <img
              src="/image/hero-image.png" // PASTIKAN nama file ini benar & ada di folder /public/image/
              alt="Contoh produk hasil laser cutting"
              width="369"
              height="369"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </section>

        {/* Bagian "Mengapa Kami" */}
        <section id="tentang" className="bg-white py-24 px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Mengapa Memilih Aksara Laserwork?</h2>
          <p className="text-xl max-w-4xl mx-auto text-gray-700 leading-relaxed">
            Dengan pengalaman lebih dari 10 tahun, kami berkomitmen untuk memberikan solusi laser cutting yang inovatif, cepat, dan berkualitas. Tim profesional kami siap membantu Anda mewujudkan desain dan kebutuhan industri dengan standar
            tinggi.
          </p>
        </section>
      </main>

      {/* ===== BAGIAN FOOTER ===== */}
      <footer id="kontak" className="bg-[#1f1a2a] text-white h-[114px] flex items-center justify-center">
        <p className="text-lg">© 2025 Aksara Laserwork. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

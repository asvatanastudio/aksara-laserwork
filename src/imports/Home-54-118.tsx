export default function Home() {
  return (
    <div className="bg-white" data-name="Home">
      <header className="bg-gray-700 text-white h-[114px] flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          {/* PERBAIKAN 1: Gunakan <img> (huruf kecil) */}
          {/* PERBAIKAN 2: Perbaiki path src */}
          <img
            src="/image/logo.png" // Ganti 'logo.png' dengan nama file Anda yang sebenarnya
            alt="Aksara Laserwork Logo"
            width="67"
            height="61"
            className="rounded-[10px]"
          />

          <div className="text-center font-inter">
            <p className="font-bold">AKSARA</p>
            <p>LASERWORK</p>
          </div>
        </div>
        <nav className="flex items-center gap-4 text-lg font-inter">
          <a href="#beranda" className="px-6 py-4 rounded-lg bg-gray-800 border border-white">
            BERANDA
          </a>
          <a href="#layanan" className="px-6 py-4 rounded-lg hover:bg-gray-800 transition-colors">
            LAYANAN
          </a>
          <a href="#galeri" className="px-6 py-4 rounded-lg hover:bg-gray-800 transition-colors">
            GALERI
          </a>
          <a href="#tentang" className="px-6 py-4 rounded-lg hover:bg-gray-800 transition-colors">
            TENTANG KAMI
          </a>
          <a href="#kontak" className="px-6 py-4 rounded-lg hover:bg-gray-800 transition-colors">
            KONTAK
          </a>
        </nav>
      </header>

      {/* ===== Hero Section ===== */}
      <main>
        <section className="bg-gray-600 text-white flex items-center px-8 py-20 min-h-[448px]">
          <div className="flex-1 space-y-8">
            <h1 className="font-notable text-6xl max-w-3xl">Presisi dalam Setiap Potongan</h1>
            <p className="font-inter text-2xl max-w-4xl">Aksara Laserwork menghadirkan layanan laser cutting dan engraving profesional dengan ketelitian tinggi untuk kebutuhan industri maupun kreatif.</p>
            <div className="flex gap-8 pt-8">
              <button className="bg-[#dd7311] font-bold text-2xl px-8 py-5 rounded-[15px] hover:opacity-90 transition-opacity">LIHAT LAYANAN</button>
              <button className="bg-[#dd7311] font-bold text-2xl px-8 py-5 rounded-[15px] hover:opacity-90 transition-opacity">HUBUNGI KAMI</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            {/* PERBAIKAN 1: Gunakan <img> (huruf kecil) */}
            <img
              src="/image/hero-image.png" // Ganti dengan nama file gambar hero Anda
              alt="Contoh hasil laser cutting"
              width="369"
              height="369"
            />
          </div>
        </section>

        {/* ===== Why Us Section ===== */}
        <section className="bg-white py-20 px-8 text-center">
          <h2 className="font-inter text-4xl font-bold mb-6">Mengapa Memilih Aksara Laserwork?</h2>
          <p className="font-inter text-2xl max-w-4xl mx-auto text-gray-700">
            Dengan pengalaman lebih dari 10 tahun, kami berkomitmen untuk memberikan solusi laser cutting yang inovatif, cepat, dan berkualitas. Tim profesional kami siap membantu Anda mewujudkan desain dan kebutuhan industri dengan standar
            tinggi.
          </p>
        </section>
      </main>

      {/* ===== Footer Section ===== */}
      <footer className="bg-[#1f1a2a] text-white h-[114px] flex items-center justify-center">
        <p className="font-inter text-xl">FOOTER</p>
      </footer>
    </div>
  );
}

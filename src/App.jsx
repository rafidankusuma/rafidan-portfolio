import DataImage from "./data";
import { listTools, listProyek } from "./data";
import Particles from "./Particles";
import PixelTransition from "./components/PixelTransition";
import "./components/PixelTransition.css";
import { useRef, useEffect, useState } from "react";
import VariableProximity from "./components/VariableProximity";
// import ScrollReveal from "./components/ScrollReveal";
import ScrollVelocity from "./components/ScrollVelocity";
// import ScrollFloat from "./components/ScrollFloat";

function App() {
  const containerRef = useRef(null);

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScroll(true);
    }, 4000);

    const handleScroll = () => {
      if (window.scrolly > 4500) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showScroll && window.scrollY < 4500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 cursor-pointer rounded-full border border-white/30 bg-white/20 p-3 shadow-lg backdrop-blur-xl transition duration-300 hover:scale-110 hover:bg-white/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div
            className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl"
            ref={containerRef}
            style={{
              position: "relative",
              zIndex: 50,
              padding: "1rem",
              color: "white",
            }}
          >
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q className="flex items-center gap-1 sm:gap-2">
              <VariableProximity
                label="Stop Rebahan, Start Perubahan."
                className="variable-proximity-demo"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Muhamad Rafidan Kusuma
          </h1>
          <p className="text-base/loose mb-6 opacity-60">
            "Halo, saya adalah pribadi yang disiplin, cepat belajar, adaptif,
            dan bertanggung jawab. Memiliki pengalaman di bidang retail dan
            manufaktur dengan keterlibatan dalam operasional bisnis, pelayanan
            pelanggan, pengelolaan stok, serta koordinasi tim untuk mendukung
            pencapaian target perusahaan. Selain itu, saya memiliki minat di
            bidang Programming dan Design, khususnya pengembangan website dan
            UI/UX, serta didukung oleh sertifikasi Badan Nasional Sertifikasi
            Profesi BNSP sebagai bukti kompetensi. Mampu bekerja secara individu
            maupun tim serta siap berkontribusi secara optimal dalam lingkungan
            kerja yang dinamis. "
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="/Portfolio/CV_RAFIDAN.pdf"
              download="CV Rafidan.pdf"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <div
          className="w-full h-[500px] flex justify-end items-center pr-4 md:pr-8 relative animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        >
          <PixelTransition
            firstContent={
              <img
                src={DataImage.HeroImage} // gambar awal
                alt="Hero Image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <img
                src={DataImage.SecondImage} // gambar kedua dari data.js
                alt="Second Image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="custom-pixel-card"
            style={{ width: "400px", height: "400px" }}
          />
        </div>
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-11/12 lg:w-10/12 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 
          sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Hi perkenalkan saya Muhamad Rafidan Kusuma, seorang Junior Web
            Development Dan Designer untuk UI/UX Design maupun Product Digital,
            saya percaya bahwa desain dan fungsionalitas harus berjalan
            beriringan, sehingga setiap proyek yang saya kembangkan tidak hanya
            terlihat menarik tetapi juga memberikan pengalaman pengguna yang
            optimal. Dengan semangat yang tinggi dan rasa ingin tahu terhadap
            teknologi terbaru, saya selalu berusaha untuk mengasah keterampilan
            serta mengikuti tren industri. Saya menyukai tantangan baru, terbuka
            terhadap masukan, dan senang bekerja sama dalam tim serta bermanfaat
            bagi banyak orang.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block
            hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  5<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  7<span className="text-violet-500">+</span>
                </h1>
                <p>Bulan Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <ScrollVelocity
            texts={[
              "Tools yang dipakai",
              "Berikut ini beberapa tools yang biasa saya pakai",
            ]}
            velocity={50}
            className="custom-scroll-text"
          />

          <div
            className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 
          grid-cols-1 gap-4"
          >
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  key={tool.id}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 
              group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* tentang */}

      {/* Proyek */}
      <div className="relative z-10 proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Proyek
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Berikut ini beberapa proyek yang telah saya buat.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md 
                    font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={proyek.link}
                    target="_blank"
                    className="bg-violet-700 p-3 rounded-lg block border 
                  border-zinc-600 hover:bg-violet-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}

      {/* Sertifikat */
      /*<div className="sertifikat">
        <p>hallo ini adalah sertifikasi saya</p>
      </div> */
      /* Sertifikat */}

      {/* Kontak */}
      <div className="relative z-10 kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Mari terhubung dengan saya.
        </p>
        <form
          action="https://formsubmit.co/muhammadrapidan@gmail.com"
          method="POST"
          target="_blank"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan Nama..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukan Email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Pesan..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full 
              cursor-pointer border border-zinc-600 hover:bg-violet-600"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}
    </>
  );
}

export default App;

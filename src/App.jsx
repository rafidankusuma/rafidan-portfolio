import DataImage from "./data";
import { listTools, listProyek } from "./data"
import Particles from "./Particles";
import PixelTransition from './components/PixelTransition';
import './components/PixelTransition.css';
import { useRef } from 'react';
import VariableProximity from "./components/VariableProximity";
// import ScrollReveal from "./components/ScrollReveal";
import ScrollVelocity from "./components/ScrollVelocity";
// import ScrollFloat from "./components/ScrollFloat";

function App() {
  const containerRef = useRef(null);
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1" >
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl" ref={containerRef}
            style={{ position: 'relative', zIndex: 50, padding: '1rem', color: 'white' }}
          >
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q className="flex items-center gap-1 sm:gap-2">
              <VariableProximity
                label="Stop Rebahan, Start Perubahan."
                className="variable-proximity-demo"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear" /></q>

          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Muhamad Rafidan Kusuma</h1>
          <p className="text-base/loose mb-6 opacity-60">"Lulusan SMK tahun 2019 umur 23 Tahun seorang yang cekatan, sigap,
            dapat diandalkan bekerja sama dengan tim dan dapat berkomunikasi dengan baik. Saya mempunyai ketertarikan dalam 
            bidang Programming dan Designer. Terutama pada pembuatan Website dan Desain UI/UX. Saya baru selesai mengikuti 
            pelatihan web programming yang di selenggarakan oleh Pemerintah Kota Tangerang melalui BLK Kota Tangerang dan sudah 
            berkompeten mempunyai sertifikasi Badan Nasional Bersertifikasi Profesi. Saat ini saya sedang melanjutkan kuliah 
            untuk terus mengembangkan diri dan menambah wawasan"
          </p>
          <div className="flex items-center sm:gap-4 gap-2" >
            <a href="/portfolio/RafidanCV.pdf" download="CV Rafidan.pdf" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
              Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <div className="w-full h-[500px] flex justify-end items-center pr-4 md:pr-8 relative animate__animated animate__fadeInUp animate__delay-4s" loading="lazy">
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
        <div className="xl:w-11/12 lg:w-10/12 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 
          sm:hidden" loading="lazy" />
          <p className="text-base/loose mb-10">
            Hi perkenalkan saya Muhamad Rafidan Kusuma,
              seorang Junior Web Development Dan Designer untuk UI/UX Design maupun Product Digital,
              saya percaya bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga setiap
              proyek yang saya kembangkan tidak hanya terlihat menarik tetapi juga memberikan pengalaman pengguna yang optimal.
              Dengan semangat yang tinggi dan rasa ingin tahu terhadap teknologi terbaru, saya selalu berusaha
              untuk mengasah keterampilan serta mengikuti tren industri. Saya menyukai tantangan baru, terbuka
              terhadap masukan, dan senang bekerja sama dalam tim serta bermanfaat bagi banyak orang.    
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block
            hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  5<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  3<span className="text-violet-500">+</span>
                </h1>
                <p>Bulan Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <ScrollVelocity
            texts={['Tools yang dipakai', 'Berikut ini beberapa tools yang biasa saya pakai']}
            velocity={50}
            className="custom-scroll-text"
          />

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 
          grid-cols-1 gap-4">
            {listTools.map(tool => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                  <img src={tool.gambar} key={tool.id} alt="Tools Image" className="w-14 bg-zinc-800 p-1 
              group-hover:bg-zinc-900" />
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
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Proyek
          </h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa proyek yang
          telah saya buat.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map(proyek => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md 
                    font-semibold" key={index}>
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href={proyek.link} target="_blank" className="bg-violet-700 p-3 rounded-lg block border 
                  border-zinc-600 hover:bg-violet-600">
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
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up"
          data-aos-duration="1000" data-aos-once="true">Kontak
          </h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Mari terhubung dengan saya.
        </p>
        <form action="https://formsubmit.co/muhammadrapidan@gmail.com" method="POST" target="_blank"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..."
                className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full 
              cursor-pointer border border-zinc-600 hover:bg-violet-600">
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
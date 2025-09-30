import HeroImage from "/assets/hero-img.png";
import SecondImage from "/assets/hero-img2.jpg";

const Image = {
  HeroImage,
  SecondImage
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/vercel.png";
import Tools10 from "/assets/tools/figma.png";
import Tools11 from "/assets/tools/wordpress.png";
import Tools12 from "/assets/tools/prisma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Vercel",
    ket: "Deployment",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Wordpress Elementor",
    ket: "Website Page Builder",
    dad: "1200",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "prisma",
    ket: "ORM (Object Relational Mapper)",
    dad: "1300",
  },
];

import Proyek1 from "/assets/proyek/proyek.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";
import Proyek6 from "/assets/proyek/proyek6.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Restaurant",
    desk: "Website restoran modern dengan desain elegan, menampilkan menu interaktif dan pengalaman pengguna yang memikat.",
    tools: ["Next.js", "JavaScript", "Prisma", "Midtrans", "Vercel"],
    dad: "200",
    link: "https://restaurant-sederhana.vercel.app/",
  },

  {
    id: 2,
    gambar: Proyek2,
    nama: "Company Profile",
    desk: "Website company profile untuk menampilkan informasi perusahaan, layanan, dan portofolio klien. Dilengkapi animasi interaktif serta desain responsif.",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "300",
    link: "https://rafidankusuma.pelatihanwebdev.com/compro/"
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Penjualan",
    desk: "Website penjualan produk digital. Menyediakan katalog produk, halaman detail.",
    tools: ["Elementor Wordpress", "HTML", "CSS"],
    dad: "400",
    link: "https://rafidankusuma.pelatihanwebdev.com/rtech/"
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website UMKM 2.0",
    desk: "Website UMKM untuk menampilkan produk dan layanan secara profesional. Didesain responsif agar mudah diakses",
    tools: ["HTML", "CSS", "Javascript", "Elementor Wordpress"],
    dad: "500",
    link: "https://rafidankusuma.pelatihanwebdev.com/wedank/"
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Website untuk UMKM yang menampilkan produk wedang jahe tradisional, dengan informasi manfaat, resep, dan galeri produknya.",
    tools: ["HTML", "CSS", "Javascript", "ReactJS", "TailwindCSS"],
    dad: "600",
    link: "https://rafidankusuma.pelatihanwebdev.com/portfolio/"
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Web BLK Kota Tangerang",
    desk: "Website resmi Balai Latihan Kerja Kota Tangerang yang menampilkan informasi profil, program pelatihan, lowongan pekerjaan, dan berita terkini.",
    tools: ["HTML", "CSS", "Javascript", "Elementor Wordpress"],
    dad: "700",
    link: "https://rafidankusuma.pelatihanwebdev.com/blk/"
  },
];

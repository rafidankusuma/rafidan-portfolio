const Footer = () => {
  return (
    <div className="relative z-10 mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex gap-7">
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#proyek">Proyek</a>
        </div>
        <div className="relative z-10 flex items-center gap-3">
            <a href="https://www.linkedin.com/in/muhamad-rafidan-kusuma-129817250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
            <a href="https://instagram.com/rfidankusuma" target="_blank">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="https://www.tiktok.com/@rfdesksetup?fbclid=PAZXh0bgNhZW0CMTEAAadTNzXg_FCyMJ-6h-mfSmZGesZPRuQ2Phr8STPWrX8DvdCMsD9YP0CaX8-8CA_aem_Uo-AJzoRXU1JJxrKSKevzg" target="_blank">
                <i className="ri-tiktok-fill ri-2x"></i>
            </a>
            <a href="https://github.com/rafidankusuma-boop" target="_blank">
                <i className="ri-github-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer
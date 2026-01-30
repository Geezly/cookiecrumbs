// src/app/Order/DetailCookies/page.tsx
import Link from "next/link";

const cookies = [
  {
    slug: "choco-chip-1",
    name: "Chocolate Chip",
    price: "Rp 25.000",
    image: "/images/cookie-original.png",
    desc: "Coklat chip premium dengan adonan lembut",
    badge: "BEST SELLER",
    bgColor: "bg-[#B8E6E6]",
  },
  {
    slug: "red-velvet-1",
    name: "Red Velvet",
    price: "Rp 28.000",
    image: "/images/cookie-redvv.png",
    desc: "Red velvet dengan cream cheese topping",
    badge: "LIMITED EDITION",
    bgColor: "bg-[#FFB6C1]",
  },
  {
    slug: "matcha-1",
    name: "Matcha Cookies",
    price: "Rp 27.000",
    image: "/images/cookie-matcha.png",
    desc: "Matcha Jepang dengan rasa creamy",
    badge: "NEW",
    bgColor: "bg-[#C8E6C9]",
  },
  {
    slug: "almond-1",
    name: "Almond Cookies",
    price: "Rp 30.000",
    image: "/images/cookie-almond.png",
    desc: "Taburan almond panggang renyah",
    badge: "PREMIUM",
    bgColor: "bg-[#D4C5F9]",
  },
  {
    slug: "Oat-1",
    name: "Cookie Oat",
    price: "Rp 26.000",
    image: "/images/cookie-Oat.png",
    desc: "Selai kacang creamy dengan choco chips",
    badge: "NEW",
    bgColor: "bg-[#F5DEB3]", // warna wheat/cream
  },
  {
    slug: "Cookie-Ice-1",
    name: "Cookie Ice Cream",
    price: "Rp 29.000",
    image: "/images/cookie-ice.png",
    desc: "Dark chocolate dengan white chocolate chips",
    badge: "BEST SELLER",
    bgColor: "bg-[#DEB887]", // warna coklat muda
  },
];

export default function DetailCookiesPage() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E6D7C0] border-b-2 border-[#8B4444]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link href="/Order" className="text-[#8B4444] font-semibold hover:underline">
              Order
            </Link>
            <Link href="/Event" className="text-[#8B4444] font-semibold hover:underline">
              Event
            </Link>
            <Link href="/Merch" className="text-[#8B4444] font-semibold hover:underline">
              Merch
            </Link>
          </div>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <img src="/images/logo-topbot.png" alt="Logo" className="h-18" />
          </Link>

          <Link
            href="/Order"
            className="bg-[#8B4444] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#6B3434] transition"
          >
            Order Now
          </Link>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="min-h-screen bg-[#F5F1E8] pt-32 pb-20 px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-[#1A1A2E] mb-4">
            OUR COOKIEZZ
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Koleksi cookies premium kami yang dibuat dengan penuh cinta
          </p>
        </div>

        {/* COOKIE GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cookies.map((item) => (
            <Link
              key={item.slug}
              href={`/Order/DetailCookies/${item.slug}`}
              className="group"
            >
              <div className="relative bg-white border-4 border-black rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* BADGE */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  <span className="bg-[#1A1A2E] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* IMAGE SECTION dengan background warna */}
                <div className={`${item.bgColor} p-6 flex items-center justify-center h-[280px]`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-48 h-48 object-cover rounded-full shadow-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* INFO SECTION */}
                <div className="p-6 text-center bg-white">
                  <h3 className="text-xl font-black text-[#1A1A2E] mb-2 group-hover:text-[#8B4444] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.desc}
                  </p>
                  <p className="text-2xl font-bold text-[#8B4444]">
                    {item.price}
                  </p>
                </div>

                {/* HOVER OVERLAY dengan desc lengkap */}
                <div className="absolute inset-0 bg-[#1A1A2E]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="text-white text-2xl font-bold mb-3">
                    {item.name}
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    {item.desc}
                  </p>
                  <div className="bg-white text-[#1A1A2E] px-6 py-2 rounded-full font-bold">
                    Lihat Detail
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BACK BUTTON */}
        <div className="text-center mt-16">
          <Link
            href="/Order"
            className="inline-flex items-center gap-2 text-[#1A1A2E] font-semibold hover:underline"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali ke Menu Order
          </Link>
        </div>
      </div>
    </>
  );
}
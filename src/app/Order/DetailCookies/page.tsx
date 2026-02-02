'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense, useState } from 'react';
import Header from '../../../Components/Header'; 
import Footer from '../../../Components/Footer'; 

const cookiesData = [
  {
    slug: "choco-chip-1",
    name: "CHOCOLATE CHIP",
    price: 25000,
    image: "/images/cookie-original.png",
    desc: "Coklat chip premium dengan adonan lembut. Nikmati perpaduan klasik keping cokelat yang meleleh di setiap gigitan.",
    bgColor: "bg-[#B8E6E6]",
  },
  {
    slug: "red-velvet-1",
    name: "RED VELVET",
    price: 28000,
    image: "/images/cookie-redvv.png",
    desc: "Red velvet dengan cream cheese topping. Warna merah merona mewah dengan tekstur lembut dan rasa yang autentik.",
    bgColor: "bg-[#FFB6C1]",
  },
  {
    slug: "matcha-1",
    name: "MATCHA COOKIES",
    price: 27000,
    image: "/images/cookie-matcha.png",
    desc: "Matcha Jepang dengan rasa creamy. Menggunakan bubuk matcha pilihan untuk aroma teh hijau yang menenangkan.",
    bgColor: "bg-[#C8E6C9]",
  },
  {
    slug: "almond-1",
    name: "ALMOND COOKIES",
    price: 30000,
    image: "/images/cookie-almond.png",
    desc: "Taburan almond panggang renyah. Memberikan tekstur crunchy yang sempurna bagi pecinta kacang almond.",
    bgColor: "bg-[#D4C5F9]",
  },
  {
    slug: "Oat-1",
    name: "COOKIE OAT",
    price: 26000,
    image: "/images/cookie-Oat.png",
    desc: "Selai kacang creamy dengan choco chips. Pilihan lezat dengan tekstur gandum yang kaya akan serat.",
    bgColor: "bg-[#F5DEB3]",
  },
  {
    slug: "Cookie-Ice-1",
    name: "COOKIE ICE CREAM",
    price: 29000,
    image: "/images/cookie-ice.png",
    desc: "Dark chocolate dengan white chocolate chips. Sensasi rasa es krim dalam bentuk cookies yang memanjakan lidah.",
    bgColor: "bg-[#DEB887]",
  },
  {
    slug: "cookie-mint-1",
    name: "MINT CHOCOLATE COOKIES",
    price: 28000,
    image: "/images/cookie-mint.png",
    desc: "Mint segar dengan dark chocolate chunks. Perpaduan rasa dingin yang unik dan cokelat yang pekat.",
    bgColor: "bg-[#98FB98]",
  },
  {
    slug: "cookie-choco-lava-1",
    name: "CHOCOLATE LAVA COOKIES",
    price: 32000,
    image: "/images/cookie-lava.png",
    desc: "Lelehan coklat premium di dalam cookies renyah. Kejutan cokelat cair yang lumer saat dinikmati.",
    bgColor: "bg-[#8B4513]",
  },
];

function CookieDetailContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const [packSize, setPackSize] = useState('4-PACK');

  const item = cookiesData.find((c) => c.slug === slug);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
        <Link href="/Order" className="text-[#8B4444] font-bold border-b border-[#8B4444] tracking-widest text-xs uppercase transition-opacity hover:opacity-70">
          Kembali ke Menu
        </Link>
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-[#FDFBF7] pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          
          {/* KIRI: IMAGE SECTION */}
          <div className="w-full md:w-1/2">
            <div className={`aspect-square ${item.bgColor} rounded-[2.5rem] border border-[#D4AF37]/20 flex items-center justify-center p-12 shadow-sm relative transition-all duration-500`}>
               <div className="absolute top-6 right-6 px-4 py-1 border border-[#D4AF37] rounded-full">
                  <span className="text-[8px] font-bold text-[#D4AF37] tracking-[0.2em]">ORIGINAL RECIPE</span>
               </div>
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* KANAN: INFO SECTION */}
          <div className="w-full md:w-1/2 flex flex-col">
            {/* Navigasi Go Back ke halaman Order utama */}
            <Link href="/Order" className="text-[#8B4444] text-[10px] font-bold tracking-[0.4em] mb-8 flex items-center gap-2 group uppercase transition-opacity hover:opacity-70">
              <span className="group-hover:-translate-x-1 transition-transform italic text-lg leading-none">‹</span> GO BACK
            </Link>

            <h1 className="text-5xl font-black text-[#1A1A2E] mb-3 tracking-tighter uppercase leading-none">
              {item.name}
            </h1>
            
            <p className="text-3xl font-bold text-[#8B4444] mb-10 tracking-tighter">
              Rp {item.price.toLocaleString('id-ID')}
            </p>

            <div className="mb-10 border-t border-[#D4AF37]/10 pt-6">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Product Detail</h3>
              <p className="text-gray-600 leading-relaxed font-light italic text-lg">
                "{item.desc}"
              </p>
            </div>

            {/* SIZE SELECTOR */}
            <div className="mb-12">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">Select Pack Size</h3>
              <div className="flex gap-4">
                {['4-PACK', '8-PACK', '12-PACK'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setPackSize(size)}
                    className={`flex-1 py-4 border rounded-xl text-[10px] font-bold tracking-[0.2em] transition-all duration-300 ${
                      packSize === size 
                        ? 'bg-[#1A1A2E] border-[#1A1A2E] text-white shadow-lg -translate-y-1' 
                        : 'bg-white border-gray-100 text-gray-400 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* ADD TO CART */}
            <button className="w-full bg-[#8B4444] text-white font-bold py-6 rounded-2xl uppercase tracking-[0.4em] text-[11px] hover:bg-[#6B3434] transition-all shadow-xl shadow-[#8B4444]/10 active:scale-[0.98]">
              Add to Cart
            </button>
            
            <p className="mt-8 text-center text-[9px] text-gray-400 uppercase tracking-widest font-medium italic">
              Hand-baked with love in Rosé Crumbs kitchen
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default function DetailCookiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center text-[#8B4444] font-bold animate-pulse">LOADING...</div>}>
      <CookieDetailContent />
    </Suspense>
  );
}
'use client';

import { useState, useRef } from 'react';
import Header from '../../Components/Header';
import Image from 'next/image';
import Link from 'next/link'; // Import Link dari Next.js

export default function MerchPage() {
  const allProducts = [
    { id: 1, name: 'LOVE ALWAYS CREWNECK', price: 'Rp 450.000', tags: ['LTD. EDITION', 'NEW'], category: 'BAJU', image: '/images/crewneck-love.png' },
    { id: 2, name: 'GLASS MUGS', price: 'Rp 150.000', tags: ['LTD. EDITION', 'NEW'], category: 'MUG', image: '/images/glass-mug.png' },
    { id: 3, name: 'ROSE FADED CREW NECK', price: 'Rp 550.000', tags: ['LTD. EDITION', 'NEW'], category: 'BAJU', image: '/images/crewneck-rose.png' },
    { id: 4, name: 'ROSE FADED SWEATPANTS', price: 'Rp 400.000', tags: ['LTD. EDITION', 'NEW'], category: 'BAJU', image: '/images/pants-rose.png' },
    { id: 5, name: 'ROSE APRON', price: 'Rp 200.000', tags: ['NEW'], category: 'AKSESORI', image: '/images/apron.png' },
    { id: 6, name: 'COOKIE TOTEBAG', price: 'Rp 120.000', tags: ['NEW'], category: 'AKSESORI', image: '/images/totebag.png' },
    { id: 7, name: 'CLASSIC ROSE CAP', price: 'Rp 150.000', tags: [], category: 'TOPI', image: '/images/cap.png' },
  ];

  const [activeFilter, setActiveFilter] = useState('ALL');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const newArrivals = allProducts.filter(p => p.tags.includes('NEW'));
  const filteredProducts = activeFilter === 'ALL' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0]">
      <Header />

      <section className="w-full">
        <div className="relative w-full h-[400px] md:h-[550px] bg-[#EE215A] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#EE215A] to-[#8B4444] opacity-95"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10 text-white">
            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none mb-4">LOVE ALWAYS</h2>
            <p className="text-lg md:text-xl font-bold uppercase tracking-[0.4em] mb-8">Available Now</p>
            <button className="bg-white text-black px-10 py-3 rounded-full font-bold uppercase hover:scale-105 transition-transform shadow-lg">
              Shop Now!
            </button>
          </div>
        </div>
      </section>

      <main className="flex-grow container mx-auto max-w-[1300px] px-6 py-16">
        <section className="mb-24 relative">
          <div className="flex justify-between items-end mb-10">
            <div className="flex items-start gap-2">
              <div className="relative">
                <h2 className="text-5xl md:text-6xl font-black text-[#333] tracking-tighter uppercase leading-none">
                  What's <br /> New
                </h2>
                <p className="text-[#A85858] mt-2 italic">Koleksi terbaru bulan ini</p>
              </div>

              <div className="valentine-sticker-gold group mt-[-10px]">
                <div className="sticker-inner">
                  <div className="sticker-content">
                    <span className="text-[9px] font-bold tracking-tighter">VALENTINE</span>
                    <span className="text-[11px] font-black">EDITION</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mb-2">
              <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-400 flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white shadow-sm">
                <span className="text-xl font-light">{"<"}</span>
              </button>
              <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-400 flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white shadow-sm">
                <span className="text-xl font-light">{">"}</span>
              </button>
            </div>
          </div>
          
          <div ref={scrollRef} className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 pb-4">
            {newArrivals.map((item) => (
               <div key={item.id} className="snap-start flex-shrink-0">
                 <ProductCard item={item} />
               </div>
            ))}
          </div>
        </section>

        <section id="all-merch">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-t pt-16 border-[#8B4444]/10">
            <h2 className="text-5xl md:text-6xl font-black text-[#333] tracking-tighter uppercase leading-none">All <br /> Merch</h2>
            <div className="flex flex-wrap gap-2 bg-[#E6D7C0]/30 p-2 rounded-2xl">
              {['ALL', 'BAJU', 'TOPI', 'MUG', 'AKSESORI'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${activeFilter === cat ? 'bg-[#8B4444] text-white shadow-md' : 'text-[#8B4444] hover:bg-[#E6D7C0]'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            {filteredProducts.map((item) => (
               <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 bg-[#E6D7C0] text-center">
        <p className="font-black text-[#8B4444] uppercase tracking-widest">Rosé Crumbs Merch</p>
      </footer>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .valentine-sticker-gold {
          width: 75px; height: 75px; background: #F2E5C6; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          position: relative; box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.5s; cursor: pointer;
        }
        .sticker-inner {
          width: 62px; height: 62px; background: #722F37; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }
        .valentine-sticker-gold:hover { transform: rotate(12deg) scale(1.1); }
        .sticker-content {
          display: flex; flex-direction: column; line-height: 1.1;
          color: #F2E5C6; text-align: center; transform: rotate(-5deg);
        }
      `}</style>
    </div>
  );
}

function ProductCard({ item }: any) {
  return (
    <Link href={`/Merch/DetailMerch?id=${item.id}`}>
      <div className="w-[260px] p-5 rounded-[20px] bg-white shadow-sm group transition-all duration-300 hover:translate-y-[-10px] hover:shadow-xl cursor-pointer">
        <div className="relative aspect-square bg-[#F5E6D3] rounded-xl overflow-hidden mb-6">
          <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
            {item.tags.map((tag: string) => (
              <span key={tag} className="bg-black text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-widest">{tag}</span>
            ))}
          </div>
          <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="text-center">
          <h3 className="font-black text-xs text-[#333] uppercase mb-1 leading-tight min-h-[32px]">{item.name}</h3>
          <p className="text-lg font-bold text-[#555]">{item.price}</p>
        </div>
      </div>
    </Link>
  );
}
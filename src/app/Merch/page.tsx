'use client';

import { useState, useRef } from 'react';
import Header from '../../Components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function MerchPage() {
  const allProducts = [
    { id: 1, name: 'BE MINE T-Shirt', price: 'Rp 299.000', tags: ['Valentine Edition', 'NEW'], category: 'BAJU', image: '/images/cewekmodel.png' },
    { id: 2, name: 'MUG SNOOPY', price: 'Rp 150.000', tags: ['Valentine Edition', 'NEW'], category: 'MUG', image: '/images/mugvalentine.jpg' },
    { id: 3, name: 'ROSE DREES', price: 'Rp 350.000', tags: ['Valentine Edition', 'NEW'], category: 'BAJU', image: '/images/dressvalentine01.png' },
    { id: 4, name: 'Red Bow Earrings', price: 'Rp 150.000', tags: ['Valentine Edition','NEW'], category: 'AKSESORI', image: '/images/modelanting.png' },
    { id: 5, name: 'TOTEBAG', price: 'Rp 120.000', tags: ['Valentine Edition','NEW'], category: 'AKSESORI', image: '/images/totebag01.png' },
    { id: 7, name: 'CLASSIC ROSE CAP', price: 'Rp 150.000', tags: [], category: 'TOPI', image: '/images/cap.png' },
    { id: 8, name: 'CLASSIC ROSE CAP', price: 'Rp 150.000', tags: [], category: 'TOPI', image: '/images/cap.png' },
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
            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none mb-4 uppercase">LOVE ALWAYS</h2>
            <p className="text-lg md:text-xl font-bold uppercase tracking-[0.4em] mb-8">Available Now</p>
            <button 
              onClick={() => document.getElementById('all-merch')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-10 py-3 rounded-full font-bold uppercase hover:scale-105 transition-transform shadow-lg"
            >
              Shop Now!
            </button>
          </div>
        </div>
      </section>

      <main className="flex-grow container mx-auto max-w-[1300px] px-6 py-16">
        <section className="mb-24 relative">
          <div className="flex justify-between items-end mb-10">
            <div className="flex items-start gap-4">
              <div className="relative">
                <h2 className="text-5xl md:text-6xl font-black text-[#333] tracking-tighter uppercase leading-none">
                  What's <br /> New
                </h2>
                <p className="text-[#A85858] mt-2 italic font-medium">Koleksi terbaru bulan ini</p>
              </div>

              <div className="w-[75px] h-[75px] bg-[#F2E5C6] rounded-full flex items-center justify-center relative shadow-md transition-transform duration-500 hover:rotate-12 hover:scale-110 cursor-pointer mt-[-5px] z-10">
                <div className="w-[62px] h-[62px] bg-[#722F37] rounded-full flex items-center justify-center">
                  <div className="flex flex-col text-[#F2E5C6] text-center -rotate-6">
                    <span className="text-[9px] font-bold tracking-tighter leading-none">VALENTINE</span>
                    <span className="text-[11px] font-black leading-none">EDITION</span>
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
          
          <div 
            ref={scrollRef} 
            className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-8 pb-4 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
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
        <p className="font-black text-[#8B4444] uppercase tracking-[0.5em] text-xs">Rosé Crumbs Merch © 2024</p>
      </footer>
    </div>
  );
}

function ProductCard({ item }: any) {
  return (
    <Link href={`/Merch/DetailMerch?id=${item.id}`}>
      <div className="w-[260px] p-5 rounded-[20px] bg-white shadow-sm group transition-all duration-300 hover:translate-y-[-10px] hover:shadow-xl cursor-pointer border border-transparent hover:border-[#8B4444]/10">
        <div className="relative aspect-square bg-[#F5E6D3] rounded-xl overflow-hidden mb-6">
          
          {/* Container Tag: items-start memastikan tag tidak melebar penuh */}
          <div className="absolute top-3 left-3 flex flex-col items-start gap-1 z-10">
            {item.tags.map((tag: string) => (
              <span 
                key={tag} 
                className="bg-black text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase w-fit"
              >
                {tag}
              </span>
            ))}
          </div>

          <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="text-center">
          <h3 className="font-black text-[11px] text-[#333] uppercase mb-1 leading-tight min-h-[32px]">{item.name}</h3>
          <p className="text-lg font-bold text-[#8B4444]">{item.price}</p>
        </div>
      </div>
    </Link>
  );
}
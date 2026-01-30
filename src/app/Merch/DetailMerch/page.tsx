'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '../../../Components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function DetailMerchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');

  const allProducts = useMemo(() => [
    { 
      id: 1, 
      name: 'BE MINE T-Shirt ', 
      price: 'Rp 299.000', 
      category: 'BAJU', 
      images: ['/images/cewekmodel.png', '/images/baju01.png'], 
      tags: ['Valentine Edition', 'NEW'], 
      desc: 'Rayakan momen kasih sayang dengan sentuhan klasik yang menggemaskan! Koleksi Signature Limited Edition ini dalam balutan desain bertema romantis yang eksklusif.' 
    },
    { 
      id: 2, 
      name: 'MUG SNOOPY', 
      price: 'Rp 150.000', 
      category: 'MUG', 
      images: ['/images/mugvalentine.jpg'], 
      tags: ['Valentine Edition', 'NEW'], 
      desc: 'Nikmati minuman favoritmu dengan sentuhan kehangatan dari si ikonik Snoopy! Mug edisi terbatas ini hadir dengan desain "Hugs & Kisses" yang manis, sangat cocok untuk menemani waktu santai di pagi hari atau sebagai kado spesial untuk orang tersayang.' 
    },
    { 
      id: 3, 
      name: 'ROSE DREES', 
      price: 'Rp 350.000', 
      category: 'BAJU', 
      images: ['/images/dressvalentine01.png'], 
      tags: ['Valentine Edition', 'NEW'], 
      desc: 'Gaun ini mengusung gaya Vintage-Romantic atau yang sering disebut dengan tren Coquette Aesthetic. Penggunaan skema warna kontras antara Bold Maroon (merah marun) dan Broken White (putih tulang) memberikan kesan elegan namun tetap manis.' 
    },
    { 
      id: 4, 
      name: 'Red Bow Earrings', 
      price: 'Rp 150.000', 
      category: 'AKSESORIS', 
      images: ['/images/modelanting.png', '/images/anting.png', '/images/anting01.png'], 
      tags: ['Valentine Edition', 'NEW'], 
      desc: 'Rayakan bulan penuh kasih sayang dengan koleksi eksklusif Love Always. Mulai dari gaya busana vintage-romantic hingga aksesori manis yang mendukung tren Coquette Aesthetic, setiap produk dirancang untuk memberikan kesan elegan, hangat, dan tak terlupakan.' 
    },
    { 
      id: 5, 
      name: 'Totebag', 
      price: 'Rp 150.000', 
      category: 'AKSESORIS', 
      images: ['/images/totebag01.png', '/images/totebag02.png', '/images/totebag03.png'], 
      tags: ['Valentine Edition', 'NEW'], 
      desc: 'Tas praktis untuk membawa semua keperluan kencan atau hadiah Valentine Anda dengan gaya yang tetap tematik.' 
    },
    { 
      id: 6, 
      name: 'TUMBLR', 
      price: 'Rp 250.000', 
      category: 'AKSESORIS', 
      images: ['/images/botol01.png'], 
      tags: [], 
      desc: 'Lengkapi koleksi eksklusif Anda dengan Rose Crumbs Signature Tumblr, bagian dari koleksi resmi official merchandise kami.' 
    },
    { 
      id: 7, 
      name: 'BAG CHARM CAT', 
      price: 'Rp 40.000', 
      category: 'AKSESORIS', 
      images: ['/images/ganci3.png'], 
      tags: [], 
      desc: 'Sentuhan kecil yang membawa perubahan besar pada penampilan tas Anda. Gantungan tas (bag charm) ini dirancang khusus untuk Anda yang menyukai detail handmade yang unik, manis, dan penuh karakter.' 
    },
    { 
      id: 8, 
      name: 'PINK HAT', 
      price: 'Rp 100.000', 
      category: 'TOPI', 
      images: ['/images/Hat5.png'], 
      tags: ['Coquette Plaid Edition', 'SOLD'] ,
      desc: 'Bawa nuansa romantis dan tren terkini ke dalam lemari pakaian Anda dengan Pink Hat – Coquette Plaid Edition.' 
    },
  ], []);

  const product = useMemo(() => {
    return allProducts.find((p) => p.id === Number(id));
  }, [id, allProducts]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [id]);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/Merch');
    }
  };

  if (!id || !product) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF8F0]">
      <p className="font-bold text-[#8B4444] text-xl mb-4 uppercase">
        {id ? 'Produk tidak ditemukan' : 'Memuat produk...'}
      </p>
      <Link href="/Merch" className="bg-black text-white px-8 py-3 rounded-full uppercase font-black text-xs">
        Back to Merch
      </Link>
    </div>
  );

  const isBaju = product.category === 'BAJU';
  const sizeOptions = isBaju ? ['S', 'M', 'L', 'XL', 'XXL'] : ['S', 'M', 'L'];
  const mainImageSrc = product.images?.[activeImageIndex] || '';
  const isSoldOut = product.tags.includes('SOLD');

  return (
    <div className="min-h-screen bg-[#FFF8F0] flex flex-col font-sans">
      <Header />

      <div className="pt-24 md:pt-32"> 
        <nav className="container mx-auto max-w-[1300px] px-6 py-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B4444]">
          <button onClick={handleGoBack} className="flex items-center gap-2 hover:opacity-50 transition-all cursor-pointer">
            <span className="text-sm">{"<"}</span> GO BACK
          </button>

          <div className="flex gap-3 text-gray-400 items-center">
            <Link href="/" className="hover:text-[#8B4444]">HOME</Link> 
            <span className="opacity-30">/</span> 
            <Link href="/Merch" className="hover:text-[#8B4444]">MERCHANDISE</Link> 
            <span className="opacity-30">/</span> 
            <span className="text-[#8B4444]">{product.name}</span>
          </div>
        </nav>

        <main className="container mx-auto max-w-[1300px] px-6 pb-24 mt-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Thumbnails Side */}
            <div className="hidden lg:flex flex-col gap-4 w-[100px]">
              {product.images?.map((img, index) => (
                <button 
                  key={index}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`aspect-square relative bg-[#F7F4F0] rounded-2xl overflow-hidden border-2 transition-all ${
                    activeImageIndex === index ? 'border-[#8B4444]' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <Image src={img} alt={`thumb-${index}`} fill className="object-contain p-1" sizes="100px" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-grow flex justify-center items-start">
              <div className="relative w-full aspect-square max-w-[600px] bg-[#F7F4F0] rounded-[40px] overflow-hidden shadow-sm border border-[#E6D7C0]">
                {mainImageSrc && (
                  <Image src={mainImageSrc} alt={product.name} fill className="object-contain p-4 lg:p-1" priority sizes="(max-width: 768px) 100vw, 600px" />
                )}
              </div>
            </div>

            {/* Product Detail */}
            <div className="w-full lg:w-[450px] flex flex-col">
              <div className="flex gap-2 mb-6">
                {product.tags?.map(tag => (
                  <span 
                    key={tag} 
                    className={`text-[10px] font-black px-3 py-1 rounded-md tracking-tighter uppercase ${
                        tag === 'SOLD' 
                        ? 'bg-red-600 text-black' 
                        : tag === 'Valentine Edition' 
                        ? 'bg-[#722F37] text-white' 
                        : 'bg-black text-white'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-[#333] leading-[0.9] tracking-tighter uppercase mb-8">{product.name}</h1>
              <div className="h-[1px] bg-gray-300 w-full mb-8"></div>
              <p className="text-3xl font-bold text-[#8B4444] mb-8">{product.price}</p>

              <div className="mb-10 text-sm">
                <h4 className="font-black text-[#333] mb-3 uppercase tracking-tight">{product.name} Detail</h4>
                <p className="text-[#555] leading-relaxed italic">{product.desc}</p>
              </div>

              <div className="space-y-8 mb-12">
                <div className="relative">
                  <label className="text-[11px] font-black text-[#333] uppercase mb-3 block tracking-widest">Size</label>
                  <select 
                    defaultValue="" 
                    disabled={isSoldOut}
                    className={`w-full border rounded-2xl px-6 py-4 text-sm font-bold outline-none appearance-none cursor-pointer ${
                        isSoldOut ? 'bg-gray-100 text-gray-400 border-gray-200' : 'bg-white border-gray-300 text-gray-800 focus:border-[#8B4444]'
                    }`}
                  >
                    <option value="" disabled>Select Size</option>
                    {sizeOptions.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-[48px] pointer-events-none text-gray-400 text-xs">▼</div>
                </div>
              </div>

              <button 
                disabled={isSoldOut}
                className={`w-full py-6 rounded-full font-black uppercase tracking-[0.2em] transition-all shadow-xl active:scale-[0.98] ${
                    isSoldOut ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-black text-white hover:bg-[#222]'
                }`}
              >
                {isSoldOut ? 'Sold Out' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
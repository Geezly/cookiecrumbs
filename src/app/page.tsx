'use client';

import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000); // Ganti slide setiap 4 detik

    return () => clearInterval(interval); // Cleanup saat component unmount
  }, []);

  const featuredProducts = [
    { 
      id: 1, 
      name: 'VALENTINE COOKIE TIN', 
      price: 'Rp 350.000', 
      tags: ['LIMITED EDITION'], 
      image: '🎁',
      color: '#FFB4C8'
    },
    { 
      id: 2, 
      name: 'CLASSIC ASSORTMENT', 
      price: 'Rp 275.000', 
      tags: ['BEST SELLER'], 
      image: '🍪',
      color: '#A8D8EA'
    },
    { 
      id: 3, 
      name: 'PREMIUM GIFT BOX', 
      price: 'Rp 425.000', 
      tags: ['PREMIUM'], 
      image: '💝',
      color: '#C9B8E8'
    },
  ];

  // Carousel slides data - dengan gambar full
  const carouselSlides = [
    {
      id: 1,
      title: 'Valentine Cookie Tin',
      image: '/images/cookie7.png', // Ganti dengan path gambar Anda
      alt: 'Valentine Cookie Tin Limited Edition'
    },
    {
      id: 2,
      title: 'Classic Assortment Box',
      image: '/images/cookie31.png', // Ganti dengan path gambar Anda
      alt: 'Classic Assortment Cookie Box'
    },
    {
      id: 3,
      title: 'Premium Gift Collection',
      image: '/images/cookie32.png', // Ganti dengan path gambar Anda
      alt: 'Premium Gift Cookie Collection'
    },
  ];

  // Data produk untuk Shop Fan Favorites
  const fanFavorites = [
    {
      id: 1,
      name: "Valentine's Day Tin Gift Set",
      description: "Kaleng eksklusif berisi 24 cookie spesial Valentine dengan desain romantis",
      image: "/images/cookie7.png",
      badge: "LIMITED EDITION",
      badgeColor: "from-[#FF6B6B] to-[#FF8E53]"
    },
    {
      id: 2,
      name: "Dark Days of Winter Assortment",
      description: "18 cookie cokelat gelap dengan rasa musim dingin yang kaya dan hangat",
      image: "/images/cookie17.png",
      badge: "SEASONAL",
      badgeColor: "from-[#0033A0] to-[#0066CC]"
    },
    {
      id: 3,
      name: "Signature Cookie Assortment",
      description: "Koleksi 20 cookie terbaik dengan berbagai rasa klasik pilihan pelanggan",
      image: "/images/cookie6.png",
      badge: "BEST SELLER",
      badgeColor: "from-[#00A86B] to-[#00CC88]"
    },
    {
      id: 4,
      name: "Premium Gift Box Collection",
      description: "Kotak hadiah premium dengan 30 cookie spesial dan aksesori eksklusif",
      image: "/images/giftbox3.png",
      badge: "NEW",
      badgeColor: "from-[#9B59B6] to-[#8E44AD]"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(-12deg);
          }
          50% {
            transform: translateY(-10px) rotate(-12deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
      
      <div className="min-h-screen bg-[#FFF8F3]">
      <Header />
      
      {/* Hero Section - Inspired by reference but unique layout */}
      <section className="relative pt-28 pb-20 px-6 overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #8B4444 0px, #8B4444 2px, transparent 2px, transparent 10px)`,
          }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-[#0F1B3D] mb-6 leading-[0.95] tracking-tight">
                Say More<br/>With Cookies
              </h1>
              
              <p className="text-lg lg:text-xl text-[#4A5568] mb-10 leading-relaxed max-w-xl">
                Kaleng cookie edisi terbatas Valentine's Day kami adalah hadiah sempurna untuk persahabatan, hubungan, dan segala yang ada di antaranya.
              </p>

              <Link 
                href="#products" 
                className="inline-block bg-[#0033A0] text-white px-12 py-5 rounded-full font-bold text-base hover:bg-[#002080] transition-all duration-300 transform hover:scale-105 shadow-2xl uppercase tracking-widest"
              >
                Shop All Cookies
              </Link>
            </div>

            {/* Right Visual - CAROUSEL Gift boxes */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-square max-w-[550px] mx-auto">
                {/* Star Badge - positioned at top-right corner */}
                <div className="absolute -top-8 -right-8 z-30 animate-float">
                  <div className="relative">
                    <svg width="140" height="140" viewBox="0 0 140 140" className="transform -rotate-12 drop-shadow-2xl">
                      <path d="M70,10 L90,50 L130,50 L100,75 L115,115 L70,90 L25,115 L40,75 L10,50 L50,50 Z" 
                            fill="#A8D8EA" stroke="#1A1A2E" strokeWidth="3"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center -mt-2">
                        <div className="text-[11px] font-black text-[#1A1A2E] tracking-tight leading-tight">
                          LIMITED<br/>EDITION<br/>TIN!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main red background card - CAROUSEL CONTAINER */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4757] via-[#FF6B7A] to-[#FF8FA3] rounded-[3rem] shadow-2xl transform rotate-2 overflow-hidden">
                  
                  {/* Pink striped floor */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden rounded-b-[3rem]">
                    <div className="absolute inset-0 bg-[#FFD4DD]"></div>
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="stripes" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(-20)">
                          <line x1="0" y1="0" x2="0" y2="40" stroke="#FF9AAA" strokeWidth="3"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#stripes)"/>
                    </svg>
                  </div>

                  {/* CAROUSEL: Full images that slide */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                      
                      {/* Carousel slides dengan gambar full */}
                      {carouselSlides.map((slide, index) => (
                        <div
                          key={slide.id}
                          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            index === currentSlide 
                              ? 'opacity-100 scale-100 z-10' 
                              : index < currentSlide
                              ? 'opacity-0 scale-95 z-0'
                              : 'opacity-0 scale-95 z-0'
                          }`}
                        >
                          {/* Full image container dengan animasi mengambang */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-full max-h-[85%] flex items-center justify-center">
                              <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-contain drop-shadow-2xl animate-float-slow"
                                style={{
                                  animation: 'floatSlow 3s ease-in-out infinite'
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>

                  {/* Navigation buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#0F1B3D] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Previous slide"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#0F1B3D] rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Next slide"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Carousel indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {carouselSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentSlide 
                            ? 'bg-white w-8 h-3' 
                            : 'bg-white/50 w-3 h-3 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section - Shop Fan Favorites */}
      <section id="products" className="py-24 px-6 bg-[#F5E6D3]">
        <div className="container mx-auto max-w-[1400px]">
          <div className="text-left mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-[#0033A0] mb-2">
              Shop Fan Favorites
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {fanFavorites.map((product) => (
              <div 
                key={product.id} 
                className="relative bg-white rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group shadow-lg hover:shadow-2xl flex flex-col h-full"
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="relative">
                    <div className={`bg-gradient-to-r ${product.badgeColor} rounded-full px-4 py-2 transform -rotate-6 shadow-lg`}>
                      <span className="text-white font-black text-xs uppercase tracking-wider">
                        {product.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product Image - MORE SPACE */}
                <div className="h-80 overflow-hidden flex items-center justify-center p-6">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Product Info - Less prominent */}
                <div className="p-6 pt-4 mt-auto">
                  <h3 className="text-xl font-black text-[#0033A0] mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section dengan Card yang memiliki tempat untuk 3 gambar cookies */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-[900px]">
          <div className="relative">
            {/* Frame/border khusus untuk gambar cookies */}
            <div className="absolute inset-0 z-0">
              {/* Cookie 1 - Kiri Atas */}
              <div className="absolute -top-6 -left-6 z-0 w-24 h-24 bg-white rounded-full p-2 shadow-lg border-2 border-[#F5E6D3]">
                <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden bg-gradient-to-br from-[#F5E6D3] to-[#FFE4E9]">
                  <img 
                    src="/images/cookie1.png" 
                    alt="Cookie 1" 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>

              {/* Cookie 2 - Kanan Atas */}
              <div className="absolute -top-6 -right-6 z-0 w-24 h-24 bg-white rounded-full p-2 shadow-lg border-2 border-[#F5E6D3]">
                <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden bg-gradient-to-br from-[#D4E9FF] to-[#E6E6FA]">
                  <img 
                    src="/images/cookie2.png" 
                    alt="Cookie 2" 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>

              {/* Cookie 3 - Bawah Tengah */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-0 w-28 h-28 bg-white rounded-full p-2 shadow-lg border-2 border-[#F5E6D3]">
                <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden bg-gradient-to-br from-[#FFD4DD] to-[#FFE4E9]">
                  <img 
                    src="/images/cookie3.png" 
                    alt="Cookie 3" 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>
            </div>

            {/* Card Container dengan padding ekstra untuk gambar */}
            <div className="relative z-10 bg-white border-2 border-gray-200 rounded-2xl p-10 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300 mt-12 mb-12 mx-6">
              
              {/* Cookie Images di sudut-sudut - seperti contoh gambar */}
              {/* Cookie Kiri Atas */}
              <div className="absolute -top-16 -left-16 w-32 h-32 md:w-40 md:h-40 z-20 drop-shadow-2xl">
                <img 
                  src="/images/cookie13.png" 
                  alt="Cookie decoration" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Cookie Kanan Atas */}
              <div className="absolute -top-12 -right-12 w-28 h-28 md:w-36 md:h-36 z-20 drop-shadow-2xl" style={{ animation: 'float 3.5s ease-in-out infinite' }}>
                <img 
                  src="/images/cookie40.png" 
                  alt="Cookie decoration" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Cookie Kiri Bawah */}
              <div className="absolute -bottom-14 -left-14 w-36 h-36 md:w-44 md:h-44 z-20 drop-shadow-2xl" style={{ animation: 'float 4s ease-in-out infinite' }}>
                <img 
                  src="/images/cookie10.png" 
                  alt="Cookie decoration" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Cookie Kanan Bawah - Hidden on mobile for cleaner look */}
              <div className="hidden md:block absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 z-20 drop-shadow-2xl" style={{ animation: 'float 3.2s ease-in-out infinite' }}>
                <img 
                  src="/images/cookie3.png" 
                  alt="Cookie decoration" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Quote marks - kiri atas */}
              <div className="absolute top-4 left-8 text-[#FF6B6B] text-5xl md:text-6xl font-serif">
                "
              </div>

              {/* Main quote text */}
              <blockquote className="mb-8 relative z-10">
                <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-[#333333] leading-[1.4] text-center px-4 md:px-8">
                  "Among local cookie mavens, they're considered as much a New York culinary icon as a Katz's hot dog or a Di Fara slice. Tourists bucket-list them. New Yorkers line up for them."
                </p>
              </blockquote>

              {/* Quote marks - kanan bawah */}
              <div className="absolute bottom-4 right-8 text-[#FF6B6B] text-5xl md:text-6xl font-serif transform rotate-180">
                "
              </div>

              {/* Divider line - simple */}
              <div className="flex justify-center my-8">
                <div className="w-24 h-1 bg-[#0033A0] rounded-full"></div>
              </div>

              {/* Source - simple centered text */}
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#0033A0] tracking-wide">
                  NY Magazine
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies for Every Occasion Section */}
      <section id="occasions" className="py-24 px-6 bg-[#F5F2EE]">
        <div className="container mx-auto max-w-[1400px]">
          <div className="text-left mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-[#0033A0] mb-4">
              Cookies for Every Occasion
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Corporate Gifts */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src="/images/giftbox1.png" 
                  alt="Corporate Gifts" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black text-[#0033A0] mb-4">
                  Corporate Gifts
                </h3>
                <p className="text-[#4A5568] mb-6 leading-relaxed">
                  Welcome back team members, reconnect with clients, or make new introductions with cookies delivered straight to their door.
                </p>
                <Link 
                  href="#corporate" 
                  className="inline-flex items-center text-[#0033A0] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all group"
                >
                  <span>SHOP CORPORATE</span>
                  <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </Link>
              </div>
            </div>

            {/* Events */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src="/images/giftbox2.png" 
                  alt="Events" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black text-[#0033A0] mb-4">
                  Events
                </h3>
                <p className="text-[#4A5568] mb-6 leading-relaxed">
                  Whatever the occasion, our single-wrapped, fresh-baked cookies are a perfect dessert or sweet party favor for your guests.
                </p>
                <Link 
                  href="#events" 
                  className="inline-flex items-center text-[#0033A0] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all group"
                >
                  <span>SHOP EVENTS</span>
                  <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </Link>
              </div>
            </div>

            {/* Catering */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src="/images/giftbox.png" 
                  alt="Catering" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black text-[#0033A0] mb-4">
                  Catering
                </h3>
                <p className="text-[#4A5568] mb-6 leading-relaxed">
                  Add a little 'mmm' to your pitch, brunch, birthday, or book club. Build the perfect spread with classic cookies, breads, and morning goodies.
                </p>
                <Link 
                  href="#catering" 
                  className="inline-flex items-center text-[#0033A0] font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all group"
                >
                  <span>SHOP CATERING</span>
                  <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cookie That Became a New York Institution Section */}
      <section className="py-24 px-6 bg-[#FFF8F3]">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/bakery.jpg" 
                  alt="Pam & Connie - Friends & Founders of Levain Bakery" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0033A0] mb-8 leading-tight">
                The Cookie That Became a New York Institution
              </h2>
              
              <p className="text-lg md:text-xl text-[#4A5568] mb-8 leading-relaxed">
                In 1995, our shared passion for breads urged us to open a little neighborhood bakery on W. 74th Street. One day, we baked BIG, hearty, gooey cookies and after a short article in The New York Times described them as "what may possibly be the largest, most divine chocolate chip cookies in Manhattan," our little shop became an overnight sensation — and we've been baking every since.
              </p>

              <div className="text-lg md:text-xl text-[#0033A0] font-bold">
                <p className="mb-1">Pam & Connie</p>
                <p className="text-[#4A5568] font-normal">Friends & Founders of Levain</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#8B4444] to-[#A85858]">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Make Someone's Day Sweeter?
          </h2>
          <p className="text-xl text-white/95 mb-10 leading-relaxed">
            Jangan lewatkan koleksi edisi terbatas kami. Order sekarang dan rasakan kebahagiaan dalam setiap gigitan!
          </p>
          <Link 
            href="#order" 
            className="inline-block bg-white text-[#8B4444] px-14 py-6 rounded-full font-black text-lg hover:bg-[#0F1B3D] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl uppercase tracking-widest"
          >
            Pesan Sekarang
          </Link>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
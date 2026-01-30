import Link from "next/link";
import "../events.css";

const eventProducts: Record<string, { title: string; products: { name: string; price: string; desc: string; img: string; }[] }> = {
  "valentine": {
    title: "Valentine Special ❤️",
    products: [
      { name: "Heart Cookies", price: "Rp 25.000", desc: "Sweet heart-shaped cookies", img: "/images/heartcookies.png" },
      { name: "Red Dress", price: "Rp 150.000", desc: "Romantic red dress", img: "/images/red-dress.png" },
      { name: "Syal Pink", price: "Rp 45.000", desc: "Soft scarf for love", img: "/images/syal.png" },
      { name: "Tas Hati", price: "Rp 150.000", desc: "Cute heart bag", img: "/images/taslove.png" },
    ],
  },
  "new-year": {
    title: "New Year Bash 🎆",
    products: [
      { name: "Fireworks Cookies", price: "Rp 30.000", desc: "Festive cookies", img: "/images/new-year.png" },
      { name: "Party Dress", price: "Rp 180.000", desc: "Stylish party wear", img: "/images/dress.png" },
    ],
  },
  "christmas": {
    title: "Christmas Magic 🎄",
    products: [
      { name: "Xmas Cookies", price: "Rp 35.000", desc: "Christmas flavor cookies", img: "/images/xmas.png" },
      { name: "Winter Scarf", price: "Rp 60.000", desc: "Warm scarf", img: "/images/syal-crismas.png" },
    ],
  },
  "halloween": {
    title: "Halloween Treats 🎃",
    products: [
      { name: "Spooky Cookies", price: "Rp 28.000", desc: "Fun spooky cookies", img: "/images/kuehalloween.png" },
      { name: "Halloween Outfit", price: "Rp 140.000", desc: "Dark themed fashion", img: "/images/outfit.png" },
    ],
  },
  "imlek": {
    title: "Imlek Celebration 🧧",
    products: [
      { name: "Fortune Cookies", price: "Rp 32.000", desc: "Lucky cookies", img: "/images/fornuter.png" },
      { name: "Red Bag", price: "Rp 170.000", desc: "Symbol of fortune", img: "/images/redbag.png" },
    ],
  },
  "idul-fitri": {
    title: "Idul Fitri Feast 🌙",
    products: [
      { name: "Eid Cookies", price: "Rp 30.000", desc: "Festive cookies", img: "/images/kuelebaran.png" },
      { name: "Muslim Wear", price: "Rp 200.000", desc: "Elegant fashion", img: "/images/gamis.png" },
    ],
  },
};

// Tambahkan async di sini
export default async function EventDetail({ params }: { params: Promise<{ slug: string }> }) {
  // Tunggu params selesai di-load
  const resolvedParams = await params;
  const slug = resolvedParams.slug.toLowerCase();
  const event = eventProducts[slug];

  if (!event) {
    return (
      <div style={{ padding: 100, textAlign: 'center' }}>
        <h1>Event "{slug}" Not Found</h1>
        <Link href="/Event" style={{ color: 'blue', textDecoration: 'underline' }}>Back to Events</Link>
      </div>
    );
  }

  return (
    <main className="detail-page">
      <div className="detail-header">
        <Link href="/Event" className="back-btn">← Back</Link>
        <h1>{event.title}</h1>
      </div>
      
      <p className="subtitle">Discover our exclusive collection for this season.</p>

      <div className="product-grid">
        {event.products.map((p) => (
          <div key={p.name} className="product-card">
            <div className="img-container">
               <img src={p.img} alt={p.name} />
            </div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <span className="price">{p.price}</span>
            <button className="order-btn">Order Now</button>
          </div>
        ))}
      </div>
    </main>
  );
}
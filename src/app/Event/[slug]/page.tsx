import "../events.css";

const eventProducts: Record<string, { title: string; products: { name: string; price: string; desc: string; img: string; }[] }> = {
  "valentine": {
    title: "Valentine Special ❤️",
    products: [
      { name: "Heart Cookies", price: "Rp 25.000", desc: "Sweet heart-shaped cookies", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" },
      { name: "Red Dress", price: "Rp 150.000", desc: "Romantic red dress", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38" },
      { name: "Syal Pink", price: "Rp 45.000", desc: "Soft scarf for love", img: "https://images.unsplash.com/photo-1618354691229-cbb85d20d86b" },
      { name: "Rok Red", price: "Rp 90.000", desc: "Elegant skirt", img: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f" },
      { name: "Celana Merah", price: "Rp 110.000", desc: "Stylish pants", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0" },
      { name: "Tas Hati", price: "Rp 150.000", desc: "Cute heart bag", img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7" },
    ],
  },
  "new-year": {
    title: "New Year Bash 🎆",
    products: [
      { name: "Fireworks Cookies", price: "Rp 30.000", desc: "Festive cookies", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b" },
      { name: "Party Dress", price: "Rp 180.000", desc: "Stylish party wear", img: "https://images.unsplash.com/photo-1593030103066-0096c3a4b5c0" },
    ],
  },
  "christmas": {
    title: "Christmas Magic 🎄",
    products: [
      { name: "Xmas Cookies", price: "Rp 35.000", desc: "Christmas flavor cookies", img: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7" },
      { name: "Winter Scarf", price: "Rp 60.000", desc: "Warm scarf", img: "https://images.unsplash.com/photo-1618354691229-cbb85d20d86b" },
    ],
  },
  "halloween": {
    title: "Halloween Treats 🎃",
    products: [
      { name: "Spooky Cookies", price: "Rp 28.000", desc: "Fun spooky cookies", img: "https://images.unsplash.com/photo-1503602642458-232111445657" },
      { name: "Halloween Outfit", price: "Rp 140.000", desc: "Dark themed fashion", img: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d" },
    ],
  },
  "imlek": {
    title: "Imlek Celebration 🧧",
    products: [
      { name: "Fortune Cookies", price: "Rp 32.000", desc: "Lucky cookies", img: "https://images.unsplash.com/photo-1580910051073-b0a6d2231db0" },
      { name: "Red Bag", price: "Rp 170.000", desc: "Symbol of fortune", img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7" },
    ],
  },
  "idul-fitri": {
    title: "Idul Fitri Feast 🌙",
    products: [
      { name: "Eid Cookies", price: "Rp 30.000", desc: "Festive cookies", img: "https://images.unsplash.com/photo-1529042410759-befb1204b468" },
      { name: "Muslim Wear", price: "Rp 200.000", desc: "Elegant fashion", img: "https://images.unsplash.com/photo-1593030103066-0096c3a4b5c0" },
    ],
  },
};

export default function EventDetail({ params }: { params: { slug: string } }) {
  if (!params || !params.slug) return <h1 style={{ padding: 40 }}>Event not found</h1>;

  const slug = params.slug.toLowerCase();
  const event = eventProducts[slug];

  if (!event) return <h1 style={{ padding: 40 }}>Event not found</h1>;

  return (
    <main className="detail-page">
      <h1>{event.title}</h1>
      <div className="product-grid">
        {event.products.map((p) => (
          <div key={p.name} className="product-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <span className="price">{p.price}</span>
            <button>Order Now</button>
          </div>
        ))}
      </div>
    </main>
  );
}

import ProductCard from "@/Components/ProductCard";

const products = [
  { name: "Rose Red Velvet", slug: "rose-red-velvet", image: "/events/valentine.jpg" },
  { name: "Pink Sugar Cookie", slug: "pink-sugar", image: "/events/valentine.jpg" },
];

export default function ValentinePage() {
  return (
    <div className="px-6 py-14">
      <h1 className="text-4xl font-bold mb-4">
        Valentine’s Special ❤️
      </h1>
      <p className="text-gray-600 mb-10">
        Cookies baked with love for your special moment.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p.slug} {...p} />
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";

export default function idulfitri() {
  return (
    <div className="px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/events/valentine.jpg"
          alt="Valentine Cookies"
          width={600}
          height={600}
          className="rounded-2xl"
        />

        <div>
          <h1>Idul Fitri Cookies 🌙</h1>
          <p className="text-gray-600 mb-6">
            Sweet cookies made with love. Perfect for your special someone.
          </p>

          <button className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
